import React, { useState } from "react";

function App() {

  const users = [
    { id: 1, name: "ESHAAN SHARMA", email: "eshaan@fruitshop.com", contact: "1234567890", age: 24 },
    { id: 2, name: "VANSH ABROL", email: "vansh@kalyan.com", contact: "9876543210", age: 25 },
    { id: 3, name: "ANKIT CHOUDHARY", email: "ankit@kathua.com", contact: "5647382910", age: 25 },
  { id: 4,name: "SIDHARTH GUPTA",email: "sidharth@shopperstop.com",contact:"2477284634",age: 22}
  ];


  const [searchId, setSearchId] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleSearch = () => {
    const user = users.find((user) => user.id === parseInt(searchId));
    setUserDetails(user || "User not found");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Search User by ID</h1>

      
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
          Enter User ID:
        </label>
        <input
        max={4}
        min={1}
          type="number"
          id="userId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700 border-blue-500"
          placeholder="Enter ID"
        />
        <button
          onClick={handleSearch}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </div>

    
      {userDetails && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg w-96">
          {typeof userDetails === "string" ? (
            <p className="text-red-500">{userDetails}</p>
          ) : (
            <div>
              <p>Name:{userDetails.name}</p>
              <p>Email: {userDetails.email}</p>
              <p>Contact: {userDetails.contact}</p>
              <p>Age: {userDetails.age}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
