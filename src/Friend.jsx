const Friend = ({ friend }) => {
  console.log(friend);

  return (
    <div className="d-flex mb-3">
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
        <span>{friend.age}</span>
      </div>
      <div>
        <button>Select</button>
      </div>
    </div>
  );
};

export default Friend;
