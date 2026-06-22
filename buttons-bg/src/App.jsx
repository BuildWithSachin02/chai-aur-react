import react from "react";
import { Routes, Route } from "react-router";
import BottomHeader from "./screens/bottom-navber";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BottomHeader/>} />
      </Routes>
    </>
  );
}
