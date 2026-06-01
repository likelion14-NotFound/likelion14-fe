import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
