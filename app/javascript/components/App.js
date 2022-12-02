import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/Greetings/Store";
import Greeting from "./Greeting";

 const App = () => {
    return (
        <>
        <BrowserRouter>
         <Provider store={store}>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
          </Provider>
        </BrowserRouter>
        </>
    )
}

export default App;