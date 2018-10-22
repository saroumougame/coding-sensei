import React from 'react';
import ReactDOM from 'react-dom';
import './AppContainer.scss';
import AppComponent from '../../Component/AppComponent/AppComponent.jsx';

class AppContainer extends React.Component {

    render(){
        return (
            <div className="app-container">
                <h1>Container React</h1>
                <AppComponent/>
            </div>
        )
    }
}


ReactDOM.render(
<AppContainer/>,
    document.querySelector('#app-container')
);

