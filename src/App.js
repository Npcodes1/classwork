import React, { useState, useEffect } from "react";

import { greeting, user, users } from "./data";

function App() {
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const currentUser = users.find((user) => user.id === userId);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(currentUser);
  }, [userId]);

  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
    </div>
  );
}

export default App;
