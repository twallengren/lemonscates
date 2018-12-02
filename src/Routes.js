import React, { Component } from "react";
import { Route } from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';

import MainWorld from "./features/mainworld";
import ForestWorld from "./features/forestworld"
import DesertWorld from "./features/desertworld"
import BeachWorld from "./features/beachworld"
import WinterWorld from "./features/winterworld"
import Menu from "./features/menu"

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

class Routes extends Component {
    render() {
        return (
            <div>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="route-wrapper"
                >
                    <Route path="/" component={Menu} exact />
                    <Route path="/lemonscates" component={MainWorld} />
                    <Route path="/forest" component={ForestWorld} />
                    <Route path="/desert" component={DesertWorld} />
                    <Route path="/beach" component={BeachWorld} />
                    <Route path="/winter" component={WinterWorld} />
                </AnimatedSwitch>
            </div>
        )
    }
}

export default Routes;