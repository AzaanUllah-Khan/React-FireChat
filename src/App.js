import "@fontsource/poppins";

import './App.css'
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Container from "./Components/MessagingContainer";
function App() {
  return (
    <>
      <Navbar />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <Container />
    </>
  )
}

export default App;
