import { Fragment, useState } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

/*
import { Fragment } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

/*
import React,{Fragment} from "react"
import Header from "./Components/Layout/Header"
import Meals from "./Components/Meals/Meals"
const App=()=>{
  return(
    <Fragment>
      <Header></Header>
      <main>
        <Meals/>
      </main>
    </Fragment>
  )
}
export default App
*/