import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <Toaster />
    </div>
  );
}

export default App;
