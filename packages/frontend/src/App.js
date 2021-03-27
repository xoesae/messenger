import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Main from './pages/Main'
import Register from './pages/Register'

import './css/reset.css'
import './css/global.css'

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" exact={true}>
           <Main />
         </Route>
         <Route path="/register">
           <Register />
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
