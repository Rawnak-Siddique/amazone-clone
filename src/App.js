import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout';
import { auth } from './Components/firebase';
import Header from './Components/Header';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Payment from './Components/Payment';
import { useStateValue } from './Components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HiXKqBnQpI8NSMVDTDdjCX5022zTpJJ9NgJ8uPMpPVGIZjAQZgv2ruawA27q7mW1maE5Ajq8Hmn0Jxdwhvs7ZrS009geBJ3n5');

function App() {
  const [{ user },dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" >
            <LoginPage />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" >
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
