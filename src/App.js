import './App.scss';
import TodoList from './screens/TodoList/TodoList';
import Header from './screens/Header/Header';
import AddForm from './screens/AddForm/AddForm';
import Todos from './screens/Todos/Todos';

import EmptyPage from "./screens/EmtyPage/EmptyPage";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import SignInForm from "./screens/SignInForm/SignInForm";
import SignUpForm from "./screens/SignUpForm/SignUpForm";
function App() {
  return (
    <>
 
      <Router>
        <Header key="index"/>
        <Switch>
          <Route path="/sign-in">
            <SignInForm />
          </Route>
          <Route path="/sign-up">
            <SignUpForm />
          </Route>
          <Route path="/to-do">
            <Todos/>
          </Route>
          <Route path="/add-task">
            < AddForm />
          </Route>
        </Switch>
      </Router>
 
    </>
  );
}

export default App;
