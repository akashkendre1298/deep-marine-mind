 import React from "react";
import Sidebar from "./../../Components/SideBar/SideBar";
import HoverDevCards from "../../Components/Cards/Cards";
import VerticalAccordion from "../../Components/Match_Applied_Jobs/MatchAppliedJobs";
import Latest_job from "../../Components/Latest_Job/Latest_job";
import Applied_Jobs from "../../Components/Applied_Jobs/Applied_Jobs";

const DashBoard = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "150px",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div>
          <Sidebar />
        </div>

        <div style={{ width: "65%" }}>
          <div>
            <HoverDevCards />
          </div>
  
          <div className="flex gap-5">

          <div style={{width:"50%"}}>
           <Latest_job/>
          </div>

          <div style={{width:"50%"}}>
            <Applied_Jobs/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
