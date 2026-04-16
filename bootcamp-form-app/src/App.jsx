// import { useState, useEffect } from "react"; // React hooks
// import axios from "axios"; // API calling library

// function App() {

//   // state for form
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   // state for storing users
//   const [users, setUsers] = useState([]);

//   // CREATE USER
//   const addUser = async () => {
//     await axios.post("http://localhost:3000/add-user", {
//       name,
//       email
//     }); // send data to backend

//     setName("");   // clear name input
//     setEmail("");  // clear email input

//     fetchUsers(); // refresh data
//   };

//   // READ USERS
//   const fetchUsers = async () => {
//     const res = await axios.get("http://localhost:3000/users");
//     setUsers(res.data); // store response
//   };

//   // DELETE USER
//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:3000/delete/${id}`);
//     fetchUsers(); // refresh data
//   };

//   // LOAD DATA ON START
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h2>User Form</h2>

//       {/* INPUT FIELDS */}
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <button onClick={addUser}>Add User</button>

//       <h2>User List</h2>

//       {/* DISPLAY USERS */}
//       {users.map((user) => (
//         <div key={user._id}>
//           {user.name} - {user.email}
//           <button onClick={() => deleteUser(user._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;