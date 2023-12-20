import React from "react";
import "./App.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { LOGOUT } from "./actions/types";

// Redux
import { Provider } from "react-redux";
import store from "./store";
// import { loadUser } from "./actions/auth";
import { setCart } from "./actions/cart";
import setAuthToken from "./utils/setAuthToken";

import Routes from "./Routes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  React.useEffect(() => {

    let cart = localStorage.getItem("cart");
    if(cart == null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    store.dispatch(setCart());

    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <Routes />
      <Footer />
    </Provider>
  );
}

export default App;
