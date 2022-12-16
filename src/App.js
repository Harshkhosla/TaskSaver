import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import Home from './Component/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
