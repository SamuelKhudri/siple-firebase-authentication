// import logo from './logo.svg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';


initializeAuthentication();
// google auth provider add
const provider = new GoogleAuthProvider();


function App() {
  // state declare for showing user login info
  const [user, setUser] = useState({})

  // google sign in function
  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        console.log(result.user);
        const loggedUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };

        setUser(loggedUser);
      })
  }
  return (
    <div className="App">
      <h2>that is firebase User ID</h2>
      <button onClick={handleSignIn}>google sign in</button>
      <br />
      {
        user.email && <div>
          <h3>Welcome: {user.name}</h3>
          <p>user mail: {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      }

    </div>
  );
}

export default App;
