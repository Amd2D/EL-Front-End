import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Slider from './Slider'

function App(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/items" component={Slider}/>
            </Switch>
        </Router>
    );
}

export default App;
