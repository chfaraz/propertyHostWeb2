import React from "react";

import List from "./SubComponents/List";
import Img from "../Assets/634.jpg";

const agentList = () => {
  return (
    <div className="agentlist-page">
      <aside>
        <List
          img={Img}
          name="Faraz Ahmed"
          intro="Make your property promonent and sell it fast."
          star="*****"
        />
        <List
          img={Img}
          name="Ahmad Nadeem"
          intro="Make your property promonent and sell it fast."
          star="****"
        />
        <List
          img={Img}
          name="Qasim Khoker"
          intro="Make your property promonent and sell it fast."
          star="****"
        />
        <List
          img={Img}
          name="Awais Mukhtar"
          intro="Make your property promonent and sell it fast."
          star="***"
        />
      </aside>
    </div>
  );
};
export default agentList;
