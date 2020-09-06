import React from "react";
import ImagePopup from "./ImagePopup";

const imagrGallery = (props) => {
  return (
    <aside>
      <img src={require("../../Assets/main-img.jpg")} onClick={props.clicked} />
      {props.ImagePopup ? (
        <div className="close-btn-wrapper close-img">
          <a href="#close" onClick={props.hide}>
            ×
          </a>
          <ImagePopup />
        </div>
      ) : null}
      <div className="flex">
        <div className="img-size">
          <img src={require("../../Assets/634.jpg")} />
        </div>
        <div className="img-size">
          <img src={require("../../Assets/692.jpg")} />
        </div>
      </div>
      <div className="flex">
        <div className="img-size">
          <img src={require("../../Assets/634.jpg")} />
        </div>
        <div className="img-size">
          <img src={require("../../Assets/main-img.jpg")} />
        </div>
      </div>
      <div className="flex">
        <div className="img-size">
          <img src={require("../../Assets/634.jpg")} />
        </div>
        <div className="img-size">
          <img src={require("../../Assets/692.jpg")} />
        </div>
      </div>
      <div className="flex">
        <div className="img-size">
          <img src={require("../../Assets/634.jpg")} />
        </div>
        <div className="img-size">
          <img src={require("../../Assets/692.jpg")} />
        </div>
      </div>
    </aside>
  );
};
export default imagrGallery;
