import os, requests, base64, json, random
from datetime import datetime

GEMINI_KEY = os.getenv("GEMINI_API_KEY")
GH_TOKEN = os.getenv("GH_TOKEN")
REPO = "parya5103/spatial-pro-empire"

def ask_gemini(prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key={GEMINI_KEY}"
    payload = {"contents": [{"parts": [{"text": prompt}]}]}
    res = requests.post(url, json=payload)
    return res.json()['candidates'][0]['content']['parts'][0]['text']

def run():
    print("Agent waking up...")
    # 1. Get Trending Topic
    topic = ask_gemini("Suggest one specific trending news topic or tutorial idea for a blog about Spatial Computing and AR/VR Productivity. Return only the title.")
    print(f"Topic: {topic}")
    
    # 2. Write Article
    article = ask_gemini(f"Write a professional 1000-word SEO blog post in Markdown about '{topic}'. Include H2 headers and a summary.")
    
    # 3. Push to GitHub
    filename = topic.lower().replace(" ", "-").replace(":", "")[:30] + ".md"
    path = f"app/blog/{filename}"
    content_b64 = base64.b64encode(article.encode()).decode()
    
    headers = {"Authorization": f"token {GH_TOKEN}"}
    
    # Check if file exists to get SHA
    sha = None
    check = requests.get(f"https://api.github.com/repos/{REPO}/contents/{path}", headers=headers)
    if check.status_code == 200: sha = check.json()['sha']

    push_payload = {
        "message": f"Autonomous Update: {topic}",
        "content": content_b64,
        "sha": sha
    } if sha else {"message": f"Autonomous Update: {topic}", "content": content_b64}
    
    requests.put(f"https://api.github.com/repos/{REPO}/contents/{path}", json=push_payload, headers=headers)
    print("Success: Article published.")

if __name__ == "__main__":
    run()