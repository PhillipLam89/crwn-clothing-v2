import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/nav/nav.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <h1>SHOPPPPP</h1>
  )
}

const App = () => {
  return(
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index={true} element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="signIn" element={<SignIn />} />
    </Route>
  </Routes>
  )
}

export default App;
