import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MainWorld from "./features/mainworld";
import ForestWorld from "./features/forestworld"
import DesertWorld from "./features/desertworld"
import BeachWorld from "./features/beachworld"
import WinterWorld from "./features/winterworld"
import Menu from "./features/menu"

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Menu} exact />
                    <Route path="/lemonscates" component={MainWorld} />
                    <Route path="/forest" component={ForestWorld} />
                    <Route path="/desert" component={DesertWorld} />
                    <Route path="/beach" component={BeachWorld} />
                    <Route path="/winter" component={WinterWorld} />
                </Switch>
            </div>
        )
    }
}

export default Routes;