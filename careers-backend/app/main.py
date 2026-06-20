from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="Sarmak RecruitIQ", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files if the directory exists
static_dir = os.path.join(os.path.dirname(__file__), "../static")
if os.path.exists(static_dir):
    app.mount("/static", StaticFiles(directory=static_dir), name="static")

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "Sarmak RecruitIQ"}

@app.get("/api/jobs")
def get_jobs():
    """Return open job listings."""
    return {
        "jobs": [
            {"id": 1, "title": "Senior Full-Stack Engineer", "dept": "Engineering", "location": "Remote (India)", "type": "Full-time", "salary": "₹18–26 LPA"},
            {"id": 2, "title": "AI/ML Engineer — NLP & Resume Intelligence", "dept": "Engineering", "location": "Remote / Bangalore", "type": "Full-time", "salary": "₹22–32 LPA"},
            {"id": 3, "title": "DevOps & Infrastructure Engineer", "dept": "Engineering", "location": "Remote (India)", "type": "Full-time", "salary": "₹15–22 LPA"},
            {"id": 4, "title": "Product Manager — Recruiter Experience", "dept": "Product", "location": "Bangalore / Remote", "type": "Full-time", "salary": "₹20–28 LPA"},
            {"id": 5, "title": "UX/Product Designer", "dept": "Product", "location": "Remote (India / APAC)", "type": "Full-time", "salary": "₹12–18 LPA"},
            {"id": 6, "title": "Enterprise Account Executive", "dept": "Sales", "location": "Mumbai / Delhi", "type": "Full-time", "salary": "₹14–20 LPA + OTE"},
            {"id": 7, "title": "Customer Success Manager", "dept": "Operations", "location": "Remote (India)", "type": "Full-time", "salary": "₹10–16 LPA"},
        ]
    }
