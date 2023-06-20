import React from "react";
import dark from "../../assets/dark.png";
import ligth from "../../assets/ligth.png";
function Ligthmode({ switchStyle, value }) {

  return (
    <div className="styleBackground absolute translate-x-32 translate-y-36 z-10 md:translate-x-80 md:translate-y-44 ">
      <button onClick={switchStyle}>
        {value === true ? (
          <img className="h-7 w-7" src={ligth} alt="" />
        ) : (
          <img className="h-7 w-7" src={dark} alt="" />
        )}
      </button>
    </div>
  );
}
export default Ligthmode;