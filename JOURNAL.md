# JOURNAL.md — Decision Journal

## 1. Prioritization

I prioritized the main P0 flow first:

Submit testimonial → Pending → Review → Approve/Reject → Public Wall

### Built

- React frontend
- NestJS backend
- PostgreSQL database
- Testimonial submission
- Moderation dashboard
- Approve/reject functionality
- Public testimonial wall
- API validation and error handling
- Frontend/backend deployment

### Skipped

- Authentication
- Photo upload
- Embeddable widget
- Pagination
- Spam/duplicate detection
- AI feature

These were skipped to keep the core flow complete and reliable.

---

## 2. Key Decisions

### React + NestJS

I kept the frontend and backend separate so they have clear responsibilities and can be deployed independently.

### PostgreSQL + TypeORM

I used PostgreSQL because testimonial data is structured and TypeORM integrates well with NestJS.

### Testimonial status

Testimonials use three states:

- PENDING
- APPROVED
- REJECTED

New testimonials start as PENDING. Only APPROVED testimonials are shown on the public wall.

### Backend validation

I used NestJS DTO validation and a global ValidationPipe so the API does not rely only on frontend validation.

### Error handling

I added a global exception filter to keep API error responses consistent.

### Photo upload

I intentionally skipped photo upload because it was optional and not required for the main P0 flow.

---

<!-- ## 3. Working with AI Agents

### Tools used

I used ChatGPT as my AI coding assistant throughout the project.

I used it mainly for:

- Breaking the assignment into smaller tasks
- React component implementation
- NestJS API improvement
- API integration
- UI improvements
- Debugging
- Deployment issues
- Reviewing code and implementation decisions

I did not ask the AI to build the complete project in one prompt. I worked feature by feature and reviewed the output before using it.


#### Prompt 1

> Give me the basic frontend structure for this assignment. Keep it minimal and production-ready without adding unnecessary functionality.

**Why:** This helped keep the implementation focused on the assignment instead of overengineering it.

#### Prompt 2

> Give me concise JavaScript code for testimonial form submission using my existing APIs. Keep it production-ready but simple enough for me to explain.

**Why:** I wanted the API integration to remain understandable rather than introducing unnecessary abstractions.

#### Prompt 3

> Make the dashboard simple and show all important testimonial details with approve and reject actions.

**Why:** The dashboard is part of the core moderation flow, so I wanted the UI to make the decision obvious.

#### Prompt 4

> Explain why this React useEffect implementation is better or worse than the alternative.

**Why:** I used AI not only to generate code but also to understand React patterns and make implementation decisions myself.



### How I worked with AI

My approach was:

1. Understand the requirement myself.
2. Ask AI for a simple implementation or explanation.
3. Review the generated code.
4. Run and test it locally.
5. Fix or simplify anything that did not fit the project.
6. Move to the next feature.

I intentionally preferred simple, understandable code over adding abstractions that were not needed for this project.

### A time AI was wrong

One example was the CORS/deployment debugging.

The initial suggestions did not immediately fix the browser CORS issue even though the API worked in Postman. I did not assume the suggested solution was correct. I checked the actual browser request, preflight request, backend logs, and environment configuration and iterated from there.

I also faced a Vercel refresh issue where the application worked through navigation but returned 404 when refreshing a React Router route. This required adding the appropriate Vercel rewrite configuration.

### Something I rejected

I rejected unnecessary complexity several times.

For example:

- I did not use FormData when there was no photo upload.
- I did not add unnecessary frontend abstractions.
- I kept API calls in a small service layer instead of introducing a larger state-management solution.
- I simplified generated UI code when it became harder to understand than the requirement justified.

### What I kept for myself

I made the final decisions about:

- What features to implement
- What features to skip
- folder structure
- API structure
- Database approach
- UI flow
- Deployment setup
- Whether an AI suggestion was actually useful

The AI helped with implementation and debugging, but I verified the code by running and testing it rather than treating generated code as automatically correct.

### Agent setup

I did not create custom agent rules, skills, or commands for this project.

--- -->


## 3. Working with AI Agents

I used ChatGPT as a development assistant throughout the project. I used it mainly for planning, code review, debugging, and exploring implementation options. I made the final decisions and verified the generated code myself.


### How I worked with AI

I generally worked in small iterations:

1. Understand the requirement.
2. Ask AI for a simple implementation or possible approaches.
3. Review the response and adapt it to my existing code.
4. Run and test the implementation.
5. Ask AI again when I found an issue or needed a better approach.

I intentionally avoided adding functionality that was not required just because AI suggested it.

### Example 1 — Designing the testimonial flow

**Prompt:**

"Here are my testimonial APIs. I want a simple production-ready React implementation for submit, approve/reject, and fetching approved testimonials. Do not add unnecessary functionality."

**What I used from the response:**

I used the suggested separation between the React components and a small testimonial API service. This kept API calls out of the UI components and made the code easier to maintain.

**My decision:**

I kept the implementation simple instead of introducing extra state-management libraries or unnecessary abstractions.

### Example 2 — Form submission

**Prompt:**

"I have a NestJS API that accepts JSON for creating testimonials. Give me concise JavaScript code for the form submission. I am not using photo upload, so do not use FormData."

**What I changed after the response:**

The initial suggestions included FormData because photo upload was considered. Since I did not implement photo upload, I changed the implementation to send a normal JSON request.

**Why:**

There was no reason to add FormData complexity when the API only needed normal testimonial fields.

### Example 3 — Deployment debugging

**Prompt:**

"My NestJS API works in Postman but the browser is showing a CORS error. The frontend is deployed separately from the backend. Help me debug the actual cause instead of just changing the CORS configuration."

**What I did:**

I checked:

- Browser Network tab
- OPTIONS/preflight request
- Request Origin
- Backend CORS configuration
- Environment variables
- Render logs
- Deployed frontend/backend URLs

I also debugged a Vercel 404 issue where refreshing a React Router route failed. The issue was related to SPA routing, so I added the appropriate Vercel rewrite configuration.

### Example 4 — UI simplification

**Prompt:**

"Make this testimonial moderation dashboard simpler. Keep the same functionality and show all important customer details, but avoid unnecessary UI complexity."

**What I changed:**

I simplified the layout, kept the important testimonial information visible, and kept approve/reject actions easy to find.

This was important because the assignment focuses on the moderation workflow rather than a complex admin interface.

### When AI was wrong

One example was deployment debugging. Some initial suggestions focused only on changing CORS settings, but the issue required checking the actual browser preflight request and deployment configuration.

I verified the behavior myself using browser DevTools, Postman, and backend logs rather than assuming the AI suggestion was correct.

### Something I rejected

I rejected several suggestions that added unnecessary complexity, including:

- FormData without file upload
- Extra state-management libraries
- Authentication, even though it was a non-goal
- Extra abstractions for simple API calls
- Features outside the required P0 flow

My approach was to use AI for speed and reasoning, while keeping the final implementation simple enough to understand and explain.

## 4. Verification

I tested the complete flow:

Submit → Pending → Approve → Public Wall

I also tested:

- Invalid form data
- API validation
- Approve/reject actions
- Loading and empty states
- API errors
- Public visibility of approved testimonials
- PostgreSQL connection

I also used Postman to test the backend APIs independently.

### Known limitations

- No authentication
- No photo upload
- No widget
- No pagination
- No automated tests
- No AI feature
- Free hosting may have cold starts

---

## 5. If I Had 5 More Hours

I would prioritize:

1. Embeddable testimonial widget
2. Photo upload
3. Pagination
4. Duplicate/spam protection
5. Small AI feature such as sentiment classification