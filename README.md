#  Toggle Feature Demo (React + Custom Hook)

This project showcases a **React demo** with multiple toggle functionalities using a **custom `useToggle` hook**. It demonstrates common toggling use cases like:

-  Show/Hide Password  
-  Toggle Light/Dark Theme  
-  Show/Hide Secret Message  
-  Like Button Toggle  
-  Enable/Disable Notifications  
-  Show/Hide a Form  

---

##  Project Structure

src/
├── custom/
│ └── useToggle.ts - Custom hook for toggle state
├── components/
│ └── ToggleDemo.jsx - Demo component using the hook
├── Toggle.css - Styling for toggle components

yaml
Copy
Edit

---

##  Custom Hook: `useToggle`

```ts
function useToggle(initialValue: boolean): [boolean, () => void]
Usage:
js
Copy
Edit
const [isOn, toggle] = useToggle(false);
Returns a boolean value and a toggle function that flips it between true and false.

```
🚀 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/toggle-demo.git
cd toggle-demo
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App
bash
Copy
Edit
npm start
```
## Example Code Snippet
jsx
Copy
Edit
const [showPassword, togglePassword] = useToggle(false);

<input type={showPassword ? "text" : "password"} />
<button onClick={togglePassword}>
  {showPassword ? "Hide" : "Show"}
</button>


```
##  🛠 Tech Stack
React

TypeScript (for hook)

Custom Hook (useToggle)

CSS (Toggle styles)



##  Inspiration
This project demonstrates reusability in React using custom hooks to simplify toggle-related state logic across multiple UI features.
