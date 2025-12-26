// import { useState } from "react";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  console.log(selectedFriend);
  const isSelected = selectedFriend && selectedFriend.id === friend.id;
  return (
    <div className="d-flex justify-content-between mb-3 p-2 bg-body-secondary rounded">
      <div>
        <img
          style={{ width: "75px", borderRadius: "50%" }}
          className=""
          src={`${friend.img}`}
          alt=""
        />
      </div>
      <div className="d-flex flex-column ">
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <span className="text-success">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </span>
        )}
        {friend.balance === 0 && (
          <span className="text-info">You and {friend.name} are even</span>
        )}
        {friend.balance > 0 && (
          <span className="text-danger">
            You owes {friend.name} ${friend.balance}
          </span>
        )}
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-warning" onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Friend;
