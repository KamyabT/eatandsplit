import { useState } from "react";

const AddFriend = () => {
  function handleAddFriendClick() {
    setAddNewFriend((prev) => !prev);
  }

  const [NewFriendName, setNewFriendName] = useState("");
  const [NewFriendImg, setNewFriendImg] = useState("");
  const [AddNewFriend, setAddNewFriend] = useState(false);

  return (
    <>
      <div className="d-flex flex-column bg-warning-subtle p-2 rounded">
        {AddNewFriend && (
          <form className="d-flex flex-column p-4 " style={{ width: "480px" }}>
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
          onClick={handleAddFriendClick}
        >
          {AddNewFriend ? "Close" : "Add Friend"}
        </button>
      </div>
    </>
  );
};

export default AddFriend;
