import React, { Component } from "react";

import List from "../Components/SubComponents/List";
import Img from "../Assets/634.jpg";

class MyListing extends Component {
  state = {
    data: [
      {
        delet: false,
        bidList: false,
        show: false,
        id: 1,
        img: Img,
        name: "5 marla house",
        price: 2500000,
      },
      {
        delet: false,
        bidList: false,
        show: false,
        id: 2,
        img: Img,
        name: "New Shop of 10 x 15",
        price: 4800000,
      },
      {
        delet: false,
        bidList: false,
        show: false,
        id: 3,
        img: Img,
        name: "WareHouse",
        price: 3600000,
      },
      {
        delet: false,
        bidList: false,
        show: false,
        id: 4,
        img: Img,
        name: "5 marla house",
        price: 7700000,
      },
    ],
  };

  showBtns = (element) => {
    const newData = [...this.state.data];
    for (let i = 0; i < newData.length; i++) {
      if (i === element) {
        newData[i].bidList = false;
        newData[i].show = !newData[i].show;
      }
      if (i !== element) {
        newData[i].show = false;
        newData[i].bidList = false;
      }
    }
    this.setState({ data: newData });
  };

  showBidlist = (element) => {
    const newData = [...this.state.data];
    for (let i = 0; i < newData.length; i++) {
      if (i === element) {
        newData[i].bidList = !newData[i].bidList;
      }
    }
    this.setState({ data: newData });
  };
  deletePost = (element) => {
    const newData = [...this.state.data];
    for (let i = 0; i < newData.length; i++) {
      if (i === element) {
        newData[i].delet = !newData[i].delet;
      }
    }
    this.setState({ data: newData });
  };

  render() {
    return (
      <div className="listing-page">
        <aside>
          {this.state.data.map((data, index) => {
            return (
              <List
                key={data.id}
                img={data.img}
                name={data.name}
                price={data.price}
                clicked={() => this.showBtns(index)}
                show={data.show}
                delete={data.delet}
                bidList={data.bidList}
                bidBtnclick={() => this.showBidlist(index)}
                deleteBtnclick={() => this.deletePost(index)}
              />
            );
          })}
        </aside>
      </div>
    );
  }
}
export default MyListing;
