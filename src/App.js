// import logo from "./logo.svg";
// import { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import SplitForm from "./SplitForm";
import AddFriend from "./AddFriend";
import { useState } from "react";
import Button from "./Button";
const friends = [
  {
    id: 1,
    name: "Kamyab",
    age: 22,
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    balance: -7,
  },
  {
    id: 2,
    name: "Ali",
    age: 25,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    balance: 0,
  },
  {
    id: 3,
    name: "Sara",
    age: 20,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    balance: 10,
  },
];

function App() {
  const [AddNewFriend, setAddNewFriend] = useState(false);
  const [Friends, setFriends] = useState(friends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  <button className={` ${AddNewFriend ? "mt-3" : ""}`} onClick={showAddFriend}>
    {AddNewFriend ? "Close" : "Add Friend"}
  </button>;

  function showAddFriend() {
    setAddNewFriend((prev) => !prev);
    setSelectedFriend(null);
  }


  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend);
    setAddNewFriend(false);
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="me-4">
        <FriendsList friends={Friends} onSelection={handleSelectFriend} selectedFriend={selectedFriend} />
        {AddNewFriend && <AddFriend friends={Friends} setFriends={setFriends} />}
        <Button onClick={showAddFriend}>{AddNewFriend ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && <SplitForm selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
