import React from "react";
import style from "../styles/Main.module.css";
import "../styles/dotCustom.css";
import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const Main = () => {
  return (
    <div className={style.mainbody}>
      {/* 알림 Header */}
      <div className={style.mainHeader}>
        <Link to="/alarm">
          <FaBell
            size="24"
            color="white"
            style={{
              marginRight: "15px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
      {/* 이미지 배너 슬라이더 */}
      <MainHeader />

      {/* main content 영역 */}
    </div>
  );
};

export default Main;