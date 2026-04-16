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
            except:
                time.sleep(self.BACKOFF ** (i+1))
        return None

    def run(self):
        topic = self.call("Trending topic in Spatial Computing. Title only.")
        content = self.call(f"Write a 1500-word SEO blog post in Markdown for '{topic}'.")
        if not content: return
        path = f"app/blog/{topic.lower().replace(' ', '-')[:20]}.md"
        headers = {"Authorization": f"token {self.token}"}
        sha = requests.get(f"https://api.github.com/repos/{self.repo}/contents/{path}", headers=headers).json().get('sha')
        requests.put(f"https://api.github.com/repos/{self.repo}/contents/{path}", 
            json={"message": f"Auto-Update: {topic}", "content": base64.b64encode(content.encode()).decode(), "sha": sha} if sha else {"message": f"Auto-Update: {topic}", "content": base64.b64encode(content.encode()).decode()},
            headers=headers)

if __name__ == "__main__":
    SovereignAgent().run()