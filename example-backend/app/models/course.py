from sqlalchemy import Column, Integer, String, Text
from app.db.base import Base

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text, nullable=True)
    instructor = Column(String, nullable=True)
