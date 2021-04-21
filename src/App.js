import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from './Screen/Home/Home'
import JobDetails from './Screen/JobDetails/JobDetails'
import Signin from './Screen/Auth/Signin'
import Signup from './Screen/Auth/Signup'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/job/details/:id' exact component={JobDetails} />
      <Route path='/sign-in' exact component={Signin} />
      <Route path='/register' exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
