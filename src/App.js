import { useState } from 'react'

import { Client } from './components/Client'

import './App.css'

const App = () => {
  const [search, setSearch] = useState('');
  const [isDisabled, setIsDisabled] = useState('');
  const [clients, setClients] = useState([]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value && e.target.value.length > 3) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClients([])
    const response = await fetch(`/api/clients?search=${search}`);
    const clients = await response.json();
    setClients(clients);
  };

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleInputChange} />
        <button type="submit" disabled={isDisabled}>Search</button>
      </form>
      <div className="clients">
        {clients.map((client, i) => (
          <Client key={client.name + i} name={client.name} pets={client.pets} />
        ))}
      </div>
    </div>
  )
}

export default App
