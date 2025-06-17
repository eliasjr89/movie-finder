import { ThemeToggle } from "./components/ThemeToggle";
import "./styles/tailwind.css";

export const App = () => {
  return (
    <>
      <div id="root">
        <h1>Hello World</h1>
        <ThemeToggle />
      </div>
    </>
  );
};
