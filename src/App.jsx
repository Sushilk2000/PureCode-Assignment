import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OrderList from "./Orders";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer";
import TopbarAdmin from "./components/layout/TopbarAdmin";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <TopbarAdmin></TopbarAdmin>
          <Navbar></Navbar>
          <OrderList />
        </BrowserRouter>
      </HelmetProvider>
      <Footer hideLinks></Footer>
    </>
  );
}

export default App;
