import { useState } from "react";
import UserList from "./components/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
