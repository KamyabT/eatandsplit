const SplitForm = () => {
  return (
    <>
      <form
        className="d-flex flex-column bg-warning p-4"
        style={{ width: "480px" }}
        action=""
      >
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Bill amount:</span> <input type="number" />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Your Expense:</span> <input type="number" />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Friend Expense:</span>
          <input type="text" />
        </label>
        <label className="d-flex align-items-center justify-content-between p-2">
          <span>Who is paying the bill?</span>
          <select className="p-2" name="" id="">
            <option value="">Select a friend 1</option>
            <option value="">Select a friend 2</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default SplitForm;
