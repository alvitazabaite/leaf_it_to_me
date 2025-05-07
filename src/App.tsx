import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import Header from "@/components/Header/Header.tsx";
import { Routes, Route } from "react-router-dom";
import NoPage from "@/components/NoPage/NoPage.tsx";
import Results from "@/pages/Results.tsx";

export default function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results" element={<Results />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}
