import Friend from "./Friend";
const FriendsList = ({ friends }) => {
  console.log(friends);

  return (
    <div className="d-flex flex-column p-4" style={{ width: "480px" }}>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
