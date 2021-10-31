import logo from './logo.svg';
import './App.css';

import Firstex from './components/Firstex';
import Secondex from './components/Secondex';
import Reactstate from './components/Reactstate';
import Formex from './components/Formex';
import Users from './components/users';
import Compnew from './components/compnew';
import Emp from './components/Emp';

import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';

import Menu from './components/Menu';

import Student from './components/Student';

import Funccomp from './components/Funccomp';

import Condrender from './components/Condrender';

import Condrend2 from './components/Condrend2';

import Fragment from './components/Fragment';

import List from './components/List';

import Keys from './components/Keys';

import Refsex from './components/Refsex';

import Lifecycle from './components/Lifecycle';

import Home from './components/Home';

import PersonList from './components/PersonList';

import Personadd from './components/Personadd';

import Deleteuser from './components/Deleteuser';

import Specificuser from './components/Specificuser';

import DemoAPI from './components/DemoAPI';

import Hookseg1 from './components/Hookseg1';

import Hookseg2 from './components/Hookseg2';

import Register from './components/Register';

import Login from './components/Login';

import Dashboard from './components/Dashboard';

import Test1 from './api_test/Test1';

import Test2 from './api_test/Test2';

import Test3 from './api_test/Test3';

import Test4 from './api_test/Test4';

import Weather from './api_test/Weather';

import PersonData from './components/PersonData';

function App() {
  return (
    <div className="App">

  <Router>
    <div>
       <Route path="/" component={Menu} /> 
      <Route path="/Firstex" component={Firstex} />
      <Route path="/first" component={Home} />
      <Route path="/compnew/:id_val" component={Compnew}></Route>
      <Route path="/users" component={Users}></Route>
      <Route path="/empinfo" component={Emp}></Route>
      <Route path="/studinfo" component={Student}></Route>
    </div>
  </Router>
      
     {/* <Route path="/login" component={Login}></Route>
      <Route exact path="/" component={Register}></Route>
      <Route exact path="/showdata" component={Dashboard}></Route> */}

      {/* <Lifecycle></Lifecycle> */}
       {/* <Personadd></Personadd> */}
       {/* <Refsex></Refsex> */}
       {/* <Hookseg1></Hookseg1> */}
       {/* <Hookseg2></Hookseg2> */}
       {/* <Test1/> */}
       {/* <Test2/> */}
       {/* <Test4/> */}
       {/* <PersonList/> */}
       {/* <PersonData/> */}
       {/* <Weather/> */}
       {/* <Condrend2/> */}
       {/* <Keys/> */}
       {/* <Refsex/> */}
       {/* <Lifecycle/> */}
    </div>
  );
}

export default App;
