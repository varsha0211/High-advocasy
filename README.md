A simple testimonial platform where customers can submit testimonials and businesses can review, approve, or reject them before they are displayed publicly.

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- Axios
- React Router
- React Toastify

### Backend

- Node.js
- NestJS
- REST API
- PostgreSQL

## Features

- Public testimonial submission
- Name, email, company, testimonial, and star rating
- Moderation dashboard for pending testimonials
- Approve or reject testimonials
- Public testimonial wall
- Only approved testimonials are displayed publicly
- Responsive UI
- Loading, empty, and error states
- Toast notifications for API errors and actions

## Project Setup

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file and add the required database and server configuration.

Start the backend:

```bash
npm run start:dev
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Core Flow

```text
Customer submits testimonial
        ↓
Testimonial is saved as pending
        ↓
Business reviews it in Dashboard
        ↓
Approve / Reject
        ↓
Approved testimonials appear on Public Wall
```

Rejected testimonials are never displayed on the public wall.

## API

The frontend uses the following backend endpoints:

```text
POST   /testimonials
GET    /testimonials?status=pending
GET    /testimonials?status=approved
PATCH  /testimonials/status/:id
```

## Completed

- [x] Testimonial submission
- [x] Backend API integration
- [x] Database persistence
- [x] Moderation dashboard
- [x] Approve / reject functionality
- [x] Public testimonial wall
- [x] Approved testimonials only on public wall
- [x] Responsive UI
- [x] Loading, empty, and error states
- [x] Toast notifications

## Verification

The main flow was tested end-to-end:

```text
Submit testimonial
        ↓
Verify pending testimonial in Dashboard
        ↓
Approve testimonial
        ↓
Verify testimonial appears on Public Wall
```

The rejection flow was also verified to ensure rejected testimonials do not appear publicly.

## Project Links

- **Live Demo:** [`Live`](https://high-advocasy-gaxebwu4e-test11-e3d8.vercel.app)
- **GitHub Repository:** https://github.com/varsha0211/High-advocasy
- **Frontend:** https://high-advocasy-gaxebwu4e-test11-e3d8.vercel.app

## License

This project was created as part of a take-home assignment.
