import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import StateCLass1 from './components/StateClass1';
import StateClass2 from './components/StateClass2';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Lists from './components/Lists';
import FormFinal1 from './components/FormFinal1';
import Props1 from './components/Props1';
import Props21 from './components/Props21';
import InterestShowClass from './components/InterestShowClass';
import Ref1 from './components/Ref1';
import Keys1 from './components/Keys1';
import ClassLifeCycle1 from './components/ClassLifeCycle1';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Menu from './components/Menu';
import Routenewcomp from './components/Routenewcomp';
import Routepropscomp1 from './components/Routepropscomp1';
import Routepropscomp2 from './components/Routepropscomp2';
import Student from './components/Student';
import UseStateHook1 from './components/UseStateHook1';
import UseEffectHook1 from './components/UseEffectHook1';
import UseRef1 from './components/UseRef1';
import CountUseState1 from './components/CountUseState1';
import Employee from './components/component-interaction/Employee';
import MyCounter from './components/redux/MyCounter';

import MyReducers from './reducers/MyReducers'
import { Provider } from "react-redux";
import { createStore } from "redux";
import StarRatingHook1 from './components/StarRatingHook1';
import Api1 from './components/Api1';
import Api2 from './components/Api2';
import Api3 from './components/Api3';
import ApiAssignment1 from './components/ApiAssignment1';
const store = createStore(MyReducers);

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <div class="container " style={{border:'2px solid #ccc','text-align':'center','border-radius':'10px','margin-top':'50px','margin-bottom':'50px'}}>
            <h2>Routing</h2>
            <Router>
                <div>
                    <Route path="/" component={Menu}/>
                    <Route path="/hello" component={Hello}/>
                    <Route path="/welcome" component={Welcome}/>
                    <Route path="/routenewcomp/:id_val" component={Routenewcomp}/>
                    {/* send props through route */}
                    <Route path="/routepropscomp1" component={Routepropscomp1}/>
                     {/* props validation through route */}
                    <Route path="/routepropscomp2" component={Routepropscomp2}/>
                     <Route path="/studinfo" component={Student}/>
                </div>
            </Router>
            <div class="row" >
                <div class="col-sm-12" style={{padding:'10px',margin:'50px','text-align':'center'}}>
                      <div><img src={logo} className="App-logo" alt="logo" />
                        <a
                          className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn React
                        </a></div>
                        <Hello/>
                        <hr/>
                        <Welcome/>
                         
                        <StateCLass1/>
                       
                        <StateClass2/>
                         
                        <Form1/>
                       
                        <Form2/>
                        <Lists/>  
                        <FormFinal1/>
                        <Props1/>
                        {/* component interaction App.js->Props21->Props22 */}
                        <Props21/> 
                        <InterestShowClass/>
                        <Ref1/>
                        <Keys1/>
                        <ClassLifeCycle1/>
                        <UseStateHook1/>
                         <UseEffectHook1/>
                         <UseRef1/>
                         <CountUseState1/>
                         <Employee id="100" name="Rajib Roy" location="Kolkata" salary="50000" basicSalary="25000" hra="10000" specialAllowance="15000"/>
                         {/* <MyCounter countVal="4"/> */}
                        <Provider store={store}>
                            <MyCounter />
                        </Provider>
                        <StarRatingHook1/>
                        <Api1/>
                        <Api2/>
                        <Api3/>
                        <ApiAssignment1/>
                    </div>
                 </div>
    </div>
    
  );
}

export default App;
