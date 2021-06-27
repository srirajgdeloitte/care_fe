import React from "react";
import Sanjeevani from "../../Common/images/Sanjeevani.png";

const img =
  "https://cdn.coronasafe.network/black-logo.svg";
const TopBar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto py-4 px-2">
        <div>
          <a href={"/"}>
            <img src={Sanjeevani} style={{ height: "25px" }} alt="sanjeevani logo" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
