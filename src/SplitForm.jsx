const SplitForm = () => {
  return (
    <>
      <form
        className="d-flex flex-column bg-warning p-4 rounded    "
        style={{ width: "480px" }}
        action=""
      >
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Bill amount:</span> <input className="form-control w-50" type="number" />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Your Expense:</span> <input className="form-control w-50" type="number" />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Friend Expense:</span>
          <input className="form-control w-50" type="text" />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Who is paying the bill?</span>
          <select className="form-select p-2 w-50" name="" id="">
            <option value="">Select a friend 1</option>
            <option value="">Select a friend 2</option>
          </select>
        </label>
        <button className="btn btn-dark mt-3">Split Bill</button>
      </form>
    </>
  );
};

export default SplitForm;
