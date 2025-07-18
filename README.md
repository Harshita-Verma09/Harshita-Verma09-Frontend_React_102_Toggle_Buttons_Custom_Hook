# React Custom Hook: useToggle & ToggleDemo Component

This project demonstrates a reusable custom hook `useToggle` and a feature-rich demo component `ToggleDemo` built with React. The hook simplifies boolean state management, while the demo showcases multiple toggleable UI features.

---

## Features

- **Custom Hook (`useToggle`)**  
  Easily manage boolean state with a simple toggle function.

- **ToggleDemo Component**  
  - Password visibility toggle
  - Dark/Light theme switch
  - Secret message reveal
  - Like button toggle
  - Notification checkbox
  - Show/Hide form with submit

- **Modular & Reusable**  
  The hook and demo are designed for easy integration into any React project.

---

## Project Structure

```
src/
├── components/
│   └── ToggleDemo.js      # Main demo component
├── custom/
│   └── useToggle.js       # Custom hook for boolean toggling
├── Toggle.css             # Styles for the demo
├── App.js                 # Entry point
└── ...
```

---

## Usage

### 1. useToggle Hook

```js
import { useState, useCallback } from "react";

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => setValue(prev => !prev), []);
    return [value, toggle];
}

export default useToggle;
```

### 2. ToggleDemo Component

```js
import React from "react";
import useToggle from "../custom/useToggle";
import "./Toggle.css";

const ToggleDemo = () => {
    const [showPassword, togglePassword] = useToggle(false);
    // ...other toggles

    return (
        <div className={darkMode ? "dark" : "light"}>
            {/* Multiple toggleable UI features */}
        </div>
    );
};

export default ToggleDemo;
```

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the app**
   ```bash
   npm start
   # or
   yarn start
   ```

---

## Customization

- Add more toggles by calling `useToggle` in your components.
- Style the demo via `Toggle.css`.

---

##  Customization

- Add more toggles by calling `useToggle` in your components.
- Style the demo via `Toggle.css`.

---
