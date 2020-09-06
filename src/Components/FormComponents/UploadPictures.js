import React from "react";
import ImageGallery from "../SubComponents/ImageGallery";

const uploadPictures = () => {
  return (
    <div className="upload-img">
      <div className="basic-form">
        <form>
          <label>Upload Pictures</label>
          <input type="file" name="img" accept="image/*" multiple />
          <div className="next-btn">
            <button>Post</button>
          </div>
        </form>
      </div>
      <section>
        <ImageGallery />
      </section>
    </div>
  );
};
export default uploadPictures;
