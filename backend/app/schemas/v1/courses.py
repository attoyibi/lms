from pydantic import BaseModel, Field
from typing import Optional

class CourseCreate(BaseModel):
    title: str = Field(..., min_length=5, examples="Introduction to Python")

class CourseResponse(CourseCreate):
    id: int
    description: Optional[str] = None