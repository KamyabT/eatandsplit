const Friend = ({ friend }) => {
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
        {friend.balance < 0 && <span className="text-danger">{friend.name} owes {friend.balance}</span>}
        <span>{friend.balance}</span>
        <span>{friend.balance}</span>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-warning">Select</button>
      </div>
    </div>
  );
};

export default Friend;
