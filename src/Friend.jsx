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
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div>
        <button className="btn btn-warning">Select</button>
      </div>
    </div>
  );
};

export default Friend;
