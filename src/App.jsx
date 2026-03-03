import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import CreateTrip from "./pages/createTrip";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create-trip" element={<CreateTrip></CreateTrip>}></Route>
      </Routes>
    </>
  );
}
export default App;
