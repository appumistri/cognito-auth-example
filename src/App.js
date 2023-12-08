import { useState } from "react";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Loader from "./components/common/loader/Loader/Loader";

import './App.css';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingState = (isLoadng) => {
    setIsLoading(isLoadng);
  };

  let token = localStorage.getItem('idToken');

  return (
    <>
      {token ? <Home loading={handleLoadingState} /> : <Login loading={handleLoadingState} />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
