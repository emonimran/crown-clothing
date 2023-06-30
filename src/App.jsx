import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
