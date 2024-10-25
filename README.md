# Capital Cities Quiz

## Description

Challenge your knowledge of world capitals with this interactive quiz application. Users are presented with a country and must select the correct capital city from multiple options, with the app tracking current and best streaks. Built with React and Express, this project features real-time feedback, score tracking, and a responsive design.

---
## Features


- Random country selection for each question
- Multiple choice answers with three options
- Current and Best streak tracking
- Ability to quit and restart game
- Mobile-responsive design
- Loading state handling

---
## Technologies Used

- **Frontend:**
  - React (Create React App)
  - Tailwind CSS for styling
  
- **Backend:**
  - Node.js
  - Express.js

- **API:**
  - Countries API (countriesnow.space)
---
## Installation

1. Clone the repository:
```bash
git clone 
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Set up environment variables:
- Create a `.env` file in the backend directory with:
```env
PORT=5000
```
```
COUNTRY_API_URL=https://countriesnow.space/api/v0.1/countries/capital
```
- And an `.env` file in the frontend directory with:
```
REACT_APP_BACKEND_URL=http://localhost:5000
```
---
## Required Packages

### Backend
```bash
npm install express cors
```

### Frontend
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Usage

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

---

### External API
The application uses the Countries API:
```http
https://countriesnow.space/api/v0.1/countries/capital
```

---
## Planning

For this back end utilised Postman to check the API woutes and custom endpoint before connecting to the front end. More information on the process can be founf on my frontend readme here [Frontend Readme](https://github.com/8055-NVW/Capital-Cities-Quiz-Frontend/blob/main/README.md)

---
## Future Improvements
- Save high scores locally
- Add comprehensive error handling
- Add a timer for each question

<!-- ---
## Bugs
--- -->