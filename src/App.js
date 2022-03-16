import './App.css';
import { Users } from './users'
import { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState("");

  console.log(Users.filter(user => user.first_name.includes("fe")));
  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search"
        onChange={(event) => event.target.value} />
      <ul className="list">
        {Users.map(user => (
          <li key={user.id} className='listItem'>{user.first_name}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
