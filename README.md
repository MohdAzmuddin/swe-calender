🗓️ Interactive Wall Calendar Component
A polished, responsive React calendar component inspired by a physical wall calendar aesthetic. Built for a Frontend Engineering Challenge.

## 🔗 Live Demo
**[View the Live Component Here](https://swe-azmuddin.vercel.app/)**

## ✨ Features
* **Wall Calendar Aesthetic**: Features a "spiral-bound" top and a hero image with a custom geometric overlay.
* **Day Range Selector**: Click a start date and an end date to highlight a range.
* **Integrated Notes Section**: A dedicated area for monthly memos, styled to match the printed look of the reference design.
* **Fully Responsive**: Adapts from a large-scale desktop "wall" view to a vertically stacked mobile view.
* **Date Logic**: Handles month switching and week-start logic using `date-fns`.

## 🛠️ Tech Stack
* **Framework**: [React](https://reactjs.org/) (Vite)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Date Manipulation**: [date-fns](https://date-fns.org/)
* **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone <your-repository-link>
cd wall-calendar
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 🧠 Technical Choices
* **Tailwind CSS**: Chosen for rapid UI development and the ability to use complex `clip-path` utilities for the geometric design.
* **Date-FNS**: Used over the native `Date` object to ensure consistent behavior across different browsers and easy calculation of week boundaries.
* **State Management**: Used React's `useState` for range selection. I implemented a "three-click" logic:
    1. First click: Sets start date.
    2. Second click: Sets end date (if after start).
    3. Third click: Resets and starts a new range.

## 📝 Notes for Evaluators
* **Frontend Only**: Per the requirements, no backend is used. Notes are stored in local component state.
* **Design Accuracy**: Special attention was paid to the "Spiral" top and the specific blue geometric overlay from the reference image.

3. **Submit**: Send the **GitHub Link**, the **Vercel Link**, and your **Video** to the hiring team.

Good luck! You've handled the technical hurdles like a pro.
