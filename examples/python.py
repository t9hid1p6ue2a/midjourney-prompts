"""Submit + poll for gpt-image-2.5-ext (async, cost reported per task)."""
import os, time, uuid, requests
BASE = "https://api.apimart.ai/v1"
H = {"Authorization": f"Bearer {os.environ['APIMART_KEY']}",
     "Content-Type": "application/json",
     "X-APIMart-Response-Version": "2026-07-27",
     "Idempotency-Key": str(uuid.uuid4())}

r = requests.post(f"{BASE}/images/generations", headers=H, json={
    "model": "gpt-image-2.5-ext",
    "prompt": "cozy reading nook, warm lamp, cinematic light",
    "size": "1:1", "resolution": "1K", "n": 1,
}).json()
task = r["task_id"] if "task_id" in r else r.get("data", {})["task_id"]

while True:
    d = requests.get(f"{BASE}/tasks/{task}", headers=H).json()
    if (d.get("status") or d.get("data", {}).get("status")) in ("completed", "succeeded"):
        print("cost", d.get("cost"), "credits", d.get("credits_cost")); break
    time.sleep(3)
