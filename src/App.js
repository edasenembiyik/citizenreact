import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
function App() {
  return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route
                path="/"
                element={  <HomePage></HomePage> }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
