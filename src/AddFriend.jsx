import { useState } from "react";

const AddFriend = ({ friends, setFriends }) => {
  function showAddFriend() {
    setAddNewFriend((prev) => !prev);
  }

  function handleAddNewFriend(e) {
    e.preventDefault();
    console.log("form submitted", friends);
    const newFriend = {
      name: NewFriendName,
      id: Math.floor(Math.random() * 1000),
      img: "https://randomuser.me/api/portraits/lego/5.jpg",
      balance: 0,
    };
    setFriends([...friends, newFriend]);
  }

  const [NewFriendName, setNewFriendName] = useState("");
  const [NewFriendImg, setNewFriendImg] = useState("");
  const [AddNewFriend, setAddNewFriend] = useState(false);

  return (
    <>
      <div className="d-flex flex-column bg-warning-subtle p-2 rounded">
        {AddNewFriend && (
          <form
            onSubmit={handleAddNewFriend}
            className="d-flex flex-column p-4 "
            style={{ width: "480px" }}
          >
            <label className="d-flex justify-content-between p-2">
              <span>Name:</span>
              <input
                value={NewFriendName}
                onChange={(e) => setNewFriendName(e.target.value)}
                className="form-control w-50"
                type="text"
              />
            </label>
            <label className="d-flex justify-content-between p-2">
              <span>Image URL:</span>
              <input
                value={NewFriendImg}
                onChange={(e) => setNewFriendImg(e.target.value)}
                className="form-control w-50"
                type="text"
              />
            </label>
            <button className="btn btn-primary">Add Friend</button>
          </form>
        )}

        <button
          className={`btn bg-warning d-flex align-self-end w-50 justify-content-center ${
            AddNewFriend ? "mt-3" : ""
          }`}
          onClick={showAddFriend}
        >
          {AddNewFriend ? "Close" : "Add Friend"}
        </button>
      </div>
    </>
  );
};

export default AddFriend;
