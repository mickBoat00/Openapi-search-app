import SearchBar from "./components/SearchBar"
import './App.css'
import { useState, useEffect } from "react"

import UserCard from "./components/UserCard";

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleQuery = (text: string) => {
    setQuery(text)
  }


  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: query
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  return (

    <div className="container">
      <SearchBar query={query} handleOnChange={handleQuery} handleSubmit={handleSearch} />

      <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-cards-container">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      </div>


    </div>
  )
}


export default App
