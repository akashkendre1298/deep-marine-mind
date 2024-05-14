import React from "react";
import Sidebar from "./../../Components/SideBar/SideBar";
import HoverDevCards from "../../Components/Cards/Cards";

const DashBoard = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div>
          <Sidebar />
        </div>

        <div style={{ width: "65%" }}>
          <HoverDevCards />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
