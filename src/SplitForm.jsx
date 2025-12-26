import { useState } from "react";

const SplitForm = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  return (
    <>
      <form
        className="d-flex flex-column bg-warning p-4 rounded    "
        style={{ width: "480px" }}
        action=""
      >
        <p className="text-center h4">Split a bill with {selectedFriend.name}</p>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Bill amount:</span>{" "}
          <input
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="form-control w-50"
            type="number"
          />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Your Expense:</span>{" "}
          <input
            value={paidByUser}
            onChange={(e) => setPaidByUser(Number(e.target.value))}
            className="form-control w-50"
            type="number"
          />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Friend Expense:</span>
          <input
            className="form-control w-50"
            type="number"
            value={paidByFriend}
            disabled
          />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Who is paying the bill?</span>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
            className="form-select p-2 w-50"
            name=""
            id=""
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </label>
        <button className="btn btn-dark mt-3">Split Bill</button>
      </form>
    </>
  );
};

export default SplitForm;
