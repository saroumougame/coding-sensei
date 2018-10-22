import React from 'react';
import Event from './AppComponentEvent';
import './AppComponent.scss';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = Event.handleClick.bind(this);
    }

    render(){
        return (
            <div className="app-component">
                <h2>Composant React</h2>
            </div>
        )
    }
}

export default AppComponent;
