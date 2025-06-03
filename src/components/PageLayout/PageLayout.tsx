import Header from "@/components/Header/Header.tsx";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
