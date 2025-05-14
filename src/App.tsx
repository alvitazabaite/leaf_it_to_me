// import Home from "./pages/Home.tsx";
// import Search from "./pages/Search.tsx";
import Header from "@/components/Header/Header.tsx";
import { Routes, Route, Navigate } from "react-router-dom";
// import NoPage from "@/components/NoPage/NoPage.tsx";
// import Results from "@/pages/Results.tsx";
import Login from "@/pages/Login.tsx";

export default function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/search" element={<Search />} />*/}
          {/*<Route path="/results" element={<Results />} />*/}
          {/*<Route path="/*" element={<NoPage />} />*/}
        </Routes>
      </div>
    </>
  );
}
