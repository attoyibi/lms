from typing import Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas
from app.api import deps
from app.crud import crud_course

router = APIRouter()

@router.get("/", response_model=List[schemas.Course])
def read_courses(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user = Depends(deps.get_current_user),
) -> Any:
    courses = crud_course.get_courses(db, skip=skip, limit=limit)
    return courses

@router.post("/", response_model=schemas.Course)
def create_course(
    *,
    db: Session = Depends(deps.get_db),
    course_in: schemas.CourseCreate,
    current_user = Depends(deps.get_current_user),
) -> Any:
    course = crud_course.create_course(db, course=course_in)
    return course
