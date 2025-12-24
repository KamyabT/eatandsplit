// import logo from "./logo.svg";
import "./App.css";
import FriendsList from "./FriendsList";
import SplitForm from "./SplitForm";

const friends = [
  {
    id: 1,
    name: "Kamyab",
    age: 22,
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  { id: 2, name: "Ali", age: 25, img: "https://randomuser.me/api/portraits/men/76.jpg" },
  {
    id: 3,
    name: "Sara",
    age: 20,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" , width: "100vw"}}>
      <FriendsList friends={friends} />
      <SplitForm />
    </div>
  );
}

export default App;
