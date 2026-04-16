import os, requests, base64, time, logging
logging.basicConfig(level=logging.INFO)

class SovereignAgent:
    MAX_RETRIES = 5
    BACKOFF = 2
    def __init__(self):
        self.key = os.getenv("GEMINI_API_KEY")
        self.token = os.getenv("GH_TOKEN")
        self.repo = "parya5103/spatial-pro-empire"

    def call(self, prompt):
        for i in range(self.MAX_RETRIES):
            try:
                res = requests.post(f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key={self.key}", 
                json={"contents": [{"parts": [{"text": prompt}]}]})
                res.raise_for_status()
                return res.json()['candidates'][0]['content']['parts'][0]['text']
            except Exception as e:
                logging.error(f"Retry {i+1} due to {e}")
                time.sleep(self.BACKOFF ** (i+1))
        return None

    def run(self):
        topic = self.call("Suggest a specific trending topic in Spatial Computing. Title only.")
        if not topic: return
        content = self.call(f"Write a 1200-word SEO blog post in Markdown for '{topic}'. Include H2 headers.")
        if not content: return
        
        path = f"app/blog/{topic.lower().replace(' ', '-')[:20]}.md"
        headers = {"Authorization": f"token {self.token}", "Accept": "application/vnd.github.v3+json"}
        
        sha = None
        r = requests.get(f"https://api.github.com/repos/{self.repo}/contents/{path}", headers=headers)
        if r.status_code == 200: sha = r.json().get('sha')

        payload = {
            "message": f"Auto-Update: {topic}",
            "content": base64.b64encode(content.encode()).decode(),
            "branch": "main"
        }
        if sha: payload["sha"] = sha
        
        requests.put(f"https://api.github.com/repos/{self.repo}/contents/{path}", json=payload, headers=headers)

if __name__ == "__main__":
    SovereignAgent().run()