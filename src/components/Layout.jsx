import React, { useState } from "react";
import NavBar from './navbar/NavBar'
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [isSideBarShown, setIsSideBarShown] = useState(false);
  return (
    <>
      <NavBar isSideBarShown={isSideBarShown} setIsSideBarShown={setIsSideBarShown} />
      <Sidebar isSideBarShown={isSideBarShown} />
      <main className="mx-[32px] xl:mx-[130px] pt-[120px]">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
