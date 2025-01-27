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

sampleCourses = [{"title": "Course 1", "slug": "course-1"}, {"title": "Course 2", "slug": "course-2"}]

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
    return {"title": course_id, "q": q}