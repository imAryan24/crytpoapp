import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" element={<Homepage/>}/>
        <Route path="/coins/:id" element={<CoinPage/>}/>
      </div>
   </BrowserRouter>
  );
}

export default App;
