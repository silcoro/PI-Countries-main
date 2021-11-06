import { Route } from 'react-router';
import './App.css';
import CreateActivity from './Components/CreateActivity/CreateActivity';

import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import NavBar from './Components/NavBar/NavBar';
import Seacrh from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ LandingPage } />
      <Route path='/countries' component={ NavBar } />
      <Route exact path='/countries' component={ Home } />
      <Route path='/countries/details/:id'  render={({match}) => <Details id={match.params.id}/>} />
      <Route exact path="/countries/create" component={CreateActivity}/>
      <Route exact path='/countries/search' component={Seacrh} />
    </div>
  );
}

export default App;
