import Home from "./components/Home";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div>
      <Home className="" />;
      <SpeedInsights />
    </div>
  );
}

export default App;
