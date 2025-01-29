from typing import Union, List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials= True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sampleCourses = [
    {"title": "Intro to React", "slug": "intro-to-react", "id": 0, "author": "Todd Howard", "publishDate": "2025-01-01", "description": "NA"}, 
    {"title": "Intro to Flack", "slug": "intro-to-flack", "id": 1, "author": "John Doe", "publishDate": "2025-01-02", "description": "NA"}, 
]

@app.get("/")
def read_root() -> Union[str, dict]:
    return {"title": "default course"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/courses/")
def read_courses() -> List[dict]:
    return sampleCourses;

@app.get("/course/{course_id}")
def read_item(course_id: str, q: Union[str, None] = None):
    for course in sampleCourses:
        if course.get('id') == int(course_id):
            return course
        
    return {"title": "course not found", "q": q}