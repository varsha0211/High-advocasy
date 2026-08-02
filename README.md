# Testify

A simple testimonial platform where customers can submit testimonials and businesses can review, approve, or reject them before they are displayed publicly.

## Features

- Customer testimonial submission
- Name, email, company, testimonial, and star rating
- Moderation dashboard
- Approve or reject testimonials
- Public testimonial wall
- Only approved testimonials are displayed publicly
- Responsive masonry-style testimonial layout
- Loading, empty, and error states
- Toast notifications for API errors and actions

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Toastify

### Backend

- Node.js
- NestJS
- REST API
- PostgreSQL

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── testimonials/
│       └── Rating.jsx
│
├── pages/
│   ├── SubmitTestimonial.jsx
│   ├── Dashboard.jsx
│   └── Wall.jsx
│
├── services/
│   └── testimonialApi.js
│
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Backend API running locally

### Installation

```bash
git clone <your-github-repository-url>
cd <project-folder>
npm install
```

### Environment Variables

Create a `.env` file in the frontend root:

```env
VITE_API_URL=http://localhost:3000
```

Update the URL if your backend is running on a different port or host.

### Run the Application

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

## Main Routes

| Route        | Description                 |
| ------------ | --------------------------- |
| `/`          | Submit a testimonial        |
| `/dashboard` | Review pending testimonials |
| `/wall`      | View approved testimonials  |

## API Integration

The frontend communicates with the backend through a dedicated API service.

### Create Testimonial

```http
POST /testimonials
```

Creates a new testimonial with a pending status.

### Get Testimonials

```http
GET /testimonials?status=pending
```

Used by the moderation dashboard.

```http
GET /testimonials?status=approved
```

Used by the public wall.

### Update Testimonial Status

```http
PATCH /testimonials/status/:id
```

Used to approve or reject a testimonial.

## Testimonial Flow

```text
Customer
   ↓
Submit Testimonial
   ↓
Pending
   ↓
Moderation Dashboard
   ↓
Approve / Reject
   ↓
Approved
   ↓
Public Wall
```

Rejected testimonials are never displayed on the public wall.

## Design Decisions

### Simple Moderation Dashboard

The dashboard focuses on the main moderation workflow: reviewing testimonials and approving or rejecting them.

Unnecessary features such as authentication, analytics, advanced filtering, and multiple business accounts were intentionally not added because they are outside the assignment scope.

### Masonry Testimonial Wall

Testimonials can have different content lengths, so the public wall uses a masonry-style layout. This allows each testimonial card to naturally adapt to its content.

### Public Information

The moderation dashboard displays the customer information required for review.

The public wall does not display the customer's email address.

### API Service Layer

API calls are kept inside a dedicated service file instead of being placed directly inside UI components.

This keeps the components focused on presentation and makes the API layer easier to maintain.

## Completed

- [x] Testimonial submission
- [x] Backend API integration
- [x] Database persistence
- [x] Pending testimonial moderation
- [x] Approve testimonial
- [x] Reject testimonial
- [x] Public testimonial wall
- [x] Responsive UI
- [x] Masonry-style testimonial layout
- [x] Loading states
- [x] Empty states
- [x] Error handling
- [x] Toast notifications

## Not Included

The following features were intentionally left out based on the assignment scope and available development time:

- Authentication / login
- Multiple businesses or users
- Roles and permissions
- Payments
- Email notifications
- Advanced analytics
- Advanced search and filtering
- Customer photo upload
- AI features
- Embeddable widget

## Verification

The main product flow was tested end-to-end:

```text
Submit testimonial
      ↓
Verify testimonial appears as pending
      ↓
Open moderation dashboard
      ↓
Approve testimonial
      ↓
Open public wall
      ↓
Verify testimonial appears publicly
```

The rejection flow was also tested to verify that rejected testimonials do not appear on the public wall.

## Future Improvements

If the product were extended beyond the assignment, the following would be considered next:

- Embeddable testimonial widget
- Customer photo upload
- Pagination or lazy loading
- Duplicate and spam detection
- Better form validation
- AI-powered sentiment analysis or testimonial summarization
- Authentication for the business dashboard
- Production deployment

## License

This project was created as part of a take-home assignment.
