import Friend from "./Friend";
const FriendsList = ({ friends }) => {
  console.log(friends);

  return (
    <div className="d-flex flex-column bg-info p-4">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      {/* <Friend /> */}
    </div>
  );
};

export default FriendsList;
