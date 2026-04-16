import os, requests, base64, json, time, logging

logging.basicConfig(level=logging.INFO)

class GeminiAgent:
    MAX_RETRIES = 5
    BACKOFF_FACTOR = 2

    def __init__(self):
        self.api_key = os.getenv("GEMINI_API_KEY")
        self.gh_token = os.getenv("GH_TOKEN")
        self.repo = "parya5103/spatial-pro-empire"
        self.endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent"

    def call_gemini(self, prompt):
        retries = 0
        while retries < self.MAX_RETRIES:
            try:
                payload = {"contents": [{"parts": [{"text": prompt}]}]}
                res = requests.post(f"{self.endpoint}?key={self.api_key}", json=payload)
                res.raise_for_status()
                return res.json()['candidates'][0]['content']['parts'][0]['text']
            except Exception as e:
                retries += 1
                wait_time = self.BACKOFF_FACTOR ** retries
                logging.error(f"Error calling Gemini: {e}. Retrying in {wait_time}s...")
                time.sleep(wait_time)
                if retries == self.MAX_RETRIES: raise

    def publish(self):
        topic = self.call_gemini("Suggest a specific trending topic for a blog about Spatial Productivity. Title only.")
        content = self.call_gemini(f"Write a 1200-word SEO blog post in Markdown about '{topic}'.")
        
        filename = topic.lower().replace(" ", "-")[:30] + ".md"
        path = f"app/blog/{filename}"
        headers = {"Authorization": f"token {self.gh_token}"}
        
        # Get SHA if exists
        check = requests.get(f"https://api.github.com/repos/{self.repo}/contents/{path}", headers=headers)
        sha = check.json().get('sha') if check.status_code == 200 else None

        payload = {
            "message": f"Autonomous Update: {topic}",
            "content": base64.b64encode(content.encode()).decode(),
        }
        if sha: payload["sha"] = sha
        
        requests.put(f"https://api.github.com/repos/{self.repo}/contents/{path}", json=payload, headers=headers)
        print(f"Published: {topic}")

if __name__ == "__main__":
    agent = GeminiAgent()
    agent.publish()