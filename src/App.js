import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {
    const [cartIsShown, setCartIsShown] = useState(false)

    const shownCartHandler = () =>{
      setCartIsShown(true)
    }

    const hideCartHandler = () =>{
      setCartIsShown(false)
    }
    

  return (
    <Fragment>
     {cartIsShown && <Cart  onClose={hideCartHandler}/>}
    <Header onShownCart={shownCartHandler} />
    <Meals />
  </Fragment>
    )
}

export default App;
