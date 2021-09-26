import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Master from './components/Master'
import Electronics from './components/Electronics'
import Fashion from './components/Fashion'
import Accessories from './components/Accessories'
import Cart from './components/Cart'
import WishList from './components/WishList'
import Payment from './components/Payment'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {


  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Header />
            <Master />
            <Footer />
          </Route>

          <Route path='/electronics'>
            <Header />
            <Electronics />
            <Footer />
          </Route>

          <Route path='/accessories'>
            <Header />
            <Accessories />
            <Footer />
          </Route>

          <Route path='/fashion'>
            <Header />
            <Fashion />
            <Footer />
          </Route>

          <Route path='/cart'>
            <Header />
            <Cart />
          </Route>

          <Route path='/wishlist'>
            <Header />
            <WishList />
          </Route>

          <Route path='/payment'>
            <Header />
            <Payment />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
