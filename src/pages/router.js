import React from 'react';
// HomeScreen
const HomeScreen = props => <h1>Hello</h1>;
// 404Screen
const NotFoundScreen = props => <h1>404</h1>;
// Counter
import { connect } from 'react-redux';

let CounterScreen = props  => (
  <div>
    <h1>Counter: {props.counter}</h1>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
  </div>
);
CounterScreen = connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    increment: () => dispatch({ type: 'INC' }),
    decrement: () => dispatch({ type: 'DEC' })
  })
)(CounterScreen);

// pagesrouter
import SignInPage from './signin';
import PrivateRoute from '../components/privateRoute';
import { Link, Route, Switch } from 'react-router-dom';
const PageRouter = props => (
    <div>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <PrivateRoute path="/counter" component={CounterScreen} />
        <Route path="/signin" component={SignInPage} />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </div>
);

export default PageRouter;
