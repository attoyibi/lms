# Technical Documentation: FastAPI Learning Management System (LMS)

## 1. System Architecture Overview
Aplikasi ini menggunakan **FastAPI** dengan struktur *layered architecture* untuk memisahkan logika bisnis, validasi data, dan akses database. Struktur ini mendukung skalabilitas dan kemudahan pemeliharaan (*Clean Code*).

## 2. Database Models (ERD)
Berikut adalah entitas utama yang diperlukan untuk mendukung fitur kursus dan AI Chat:

### **Users**
- `id`: Integer (Primary Key)
- `username`: String
- `email`: String (Unique)
- `hashed_password`: String
- `is_active`: Boolean

### **Courses**
- `id`: Integer (Primary Key)
- `title`: String
- `description`: Text
- `thumbnail_url`: String
- `instructor_id`: Integer (Foreign Key to **Users**)

### **Lessons (Videos)**
- `id`: Integer (Primary Key)
- `course_id`: Integer (Foreign Key to **Courses**)
- `title`: String
- `video_url`: String
- `order`: Integer (Urutan video)

### **ChatHistory (AI Tutor)**
- `id`: Integer (Primary Key)
- `user_id`: Integer (Foreign Key to **Users**)
- `lesson_id`: Integer (Foreign Key to **Lessons**)
- `message`: Text
- `response`: Text (Jawaban dari AI)
- `timestamp_video`: String (Misal: "12:40")

---

## 3. API Endpoints Specification (v1)

### **Authentication**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | Mendaftarkan akun siswa/instruktur baru. |
| `POST` | `/auth/login` | Autentikasi dan pengembalian JWT Token. |

### **Course & Content**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/courses/` | Mengambil semua daftar kursus (Katalog). |
| `GET` | `/courses/{id}` | Detail kursus beserta daftar materi/video. |
| `GET` | `/lessons/{id}` | Mengambil detail video spesifik untuk diputar. |

### **AI Interaction**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/chat/ask` | Mengirim pertanyaan ke AI Tutor berdasarkan konteks video. |
| `GET` | `/chat/history/{lesson_id}` | Mengambil riwayat percakapan pada video tertentu. |

---

## 4. Development Workflow
Untuk menambahkan fitur baru, ikuti langkah-langkah berikut:

1. **Definisikan Database Model** di `app/models/`.
2. **Buat Pydantic Schema** di `app/schemas/v1/` untuk validasi input/output.
3. **Implementasikan logika database** di `app/crud/`.
4. **Buat Endpoint** di `app/api/v1/endpoints/`.
5. **Daftarkan router** di `app/api/api_v1.py`.