import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Subscribe from "./pages/Subscribe/Subscribe.jsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Route>
    </Routes>
  );
}

export default App;
