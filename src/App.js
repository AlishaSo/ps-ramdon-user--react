import React from 'react';
import fetchUser from "./services/random_user";
import UserSummary from './components/UserSummary';
import { nanoid } from 'nanoid';
import './styles.css';

function App() {
  const [userList, setUserList] = React.useState([]);

  console.log(userList)

  async function refreshUser() {
    const user = await fetchUser();
    setUserList([...userList, user]);
  }

  React.useEffect(() => {
    async function getUser() {
      await refreshUser();
    }
    getUser();
  }, [])

  return (
    <div className="App">
      <h1>Random User Data</h1>
      {userList.map(user => {
        return <UserSummary key={nanoid
        ()} userData = {user} />
      })}
      <button id='get-btn' className='btn' onClick={refreshUser}>Get New User</button>
    </div>
  );
}

export default App;
