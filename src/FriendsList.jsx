import Friend from "./Friend";
const FriendsList = ({ friends, onSelection, selectedFriend }) => {

  return (
    <div className="d-flex flex-column justify-content-center" style={{ width: "480px" }}>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </div>
  );
};

export default FriendsList;
