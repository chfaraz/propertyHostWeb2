import React, { Component } from "react";

import { FaStar } from "react-icons/fa";

class StarRating extends Component {
  state = {
    rating: "",
  };
  render() {
    return (
      <article className="rating-wrapper">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => this.setState({ rating: ratingValue })}
              />
              <FaStar
                className="rating"
                size={30}
                color={ratingValue <= this.state.rating ? "red" : "grey"}
              />
            </label>
          );
        })}
      </article>
    );
  }
}
export default StarRating;
