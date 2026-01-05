from typing import Optional
from pydantic import BaseModel

class CourseBase(BaseModel):
    title: str
    description: Optional[str] = None
    instructor: str

class CourseCreate(CourseBase):
    pass

class CourseUpdate(CourseBase):
    title: Optional[str] = None
    description: Optional[str] = None
    instructor: Optional[str] = None

class Course(CourseBase):
    id: int

    class Config:
        from_attributes = True
