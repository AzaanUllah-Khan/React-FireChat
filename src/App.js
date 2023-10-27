import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Container from './Components/MessagingContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;