import React from 'react';
import fetchUser from "./services/random_user";
import UserSummary from './components/UserSummary';

function App() {
  const [currUser, setCurrUser] = React.useState(null);

  console.log(currUser)

  async function refreshUser() {
    const user = await fetchUser();
    setCurrUser(user);
  }

  React.useEffect(() => {
    async function getUser() {
      await refreshUser();
    }
    getUser();
  }, [])

  return (
    <div className="App">
      <UserSummary userData = {currUser}/>
      <button onClick={refreshUser}>Get New User</button>
    </div>
  );
}

export default App;
