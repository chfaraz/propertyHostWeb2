import React from "react";

import Modal from "react-modal";

const list = (props) => {
  let showbtns = null;
  if (props.show) {
    showbtns = (
      <div className="show">
        <button>Update</button>
        <button onClick={props.deleteBtnclick}>Delete</button>
        <button onClick={props.bidBtnclick}>Bid List</button>
      </div>
    );
  }
  let showBidList = null;
  if (props.bidList) {
    showBidList = (
      <article>
        <table className="bid-list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Bid</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ali Qureshi</td>
              <td>03335293844</td>
              <td>2000000</td>
              <td>
                <button className="no" onClick={props.deleteBtnclick}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>Farhan Khan</td>
              <td>03125293444</td>
              <td>1800000</td>
              <td>
                <button className="no">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
  let deleteModel = null;
  if (props.delete) {
    deleteModel = (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={true}
        onRequestClose={props.deleteBtnclick}
      >
        <h2>Are You Shore You Want To DELETE This Post!</h2>
        <h4>This Will Delete It Permanently</h4>
        <div className="list-item">
          <div>
            <img alt="profile" src={props.img} className="avatar-img" />
          </div>
          <div>
            <h2>{props.name}</h2>
          </div>
        </div>
        <br />
        <aside>
          <button onClick={props.deleteBtnclick}>Cancel</button>
          <button>Delete</button>
        </aside>
      </Modal>
    );
  }

  return (
    <div className="list-wrapper">
      <div className="list-page">
        <div className="list-item" onClick={props.clicked}>
          <div>
            <img alt="profile" src={props.img} className="avatar-img" />
          </div>
          <div>
            <h2>{props.name}</h2>
            <p>{props.intro}</p>
            <p>{props.price}</p>
          </div>
          <span>{props.star}</span>
        </div>
        {showbtns}
      </div>
      {props.show ? <hr /> : null}

      {showBidList}
      {deleteModel}
    </div>
  );
};
export default list;
