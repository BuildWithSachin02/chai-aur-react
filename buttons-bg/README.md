# 🎨 React Background Color Changer

A simple React application that allows users to change the background color of the page by clicking different color buttons.

## 🚀 Features

- Change background color with a single click
- Multiple color options:
  - Red
  - Blue
  - Gray
  - Black
  - Yellow
  - Green
- Dynamic text color adjustment
- Built with React Hooks (`useState`)
- Responsive layout using Bootstrap

## 🛠️ Technologies Used

- React.js
- Bootstrap 5
- JavaScript (ES6+)
- CSS

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Navigate to the project folder:

```bash
cd <project-folder>
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## 📂 Project Structure

```bash
src/
│
├── components/
│   └── BottomHeader.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## 💡 How It Works

The application uses React's `useState` hook to store the current background color.

```jsx
const [bgColor, setBgColor] = useState("white");
```

When a button is clicked, the state updates:

```jsx
onClick={() => setBgColor("red")}
```

React automatically re-renders the component and updates the page background color.

## 📸 Preview

- Click a color button.
- Background color changes instantly.
- Heading text color adjusts for better visibility.

## 🎯 Learning Concepts

- React Components
- JSX
- React Hooks (`useState`)
- Event Handling (`onClick`)
- Dynamic Styling
- Bootstrap Integration

## 👨‍💻 Author

**Sachin Yadav**

- Portfolio: https://sachinyadav.navyantravels.com
- GitHub: https://github.com/BuildWithSachin02

## 📄 License

This project is open source and available under the MIT License.