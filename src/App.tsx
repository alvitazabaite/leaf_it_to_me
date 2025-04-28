import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import Header from "@/components/Header/Header.tsx";
import { Routes, Route } from "react-router-dom";
import NoPage from "@/components/NoPage/NoPage.tsx";
import { plants } from "@/lib/options.ts";
import Results from "@/pages/Results.tsx";

export default function App() {
  return (
    <>
      <Header />
      <div className="text-3xl pt-20 min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search plants={plants} />} />
          <Route path="/results" element={<Results />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}
