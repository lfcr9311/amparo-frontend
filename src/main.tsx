/*
> Para poder utilizar a Splash Screen, desfaça os comentários e comente o outro render.
  
> Para boas práticas, como ainda estamos ainda fazendo os códigos, deixe as linhas comentadas!
Senão, toda vez que fizer reload na página, a Splash Screen reinicia.
*/

import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import './styles/global.css';
//import Splash from './pages/SplashScreen/SplashScreen';

class App extends Component {
  /*
  state = {
    showSplash: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 5000);
  }
  */

  render(): ReactNode {
    return (
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    );
  }

  /*
  render(): ReactNode {
    const { showSplash } = this.state;
    return (
      <React.StrictMode>
        {showSplash ? (
          <Splash />
        ) : (
          <AppRoutes />
        )}
      </React.StrictMode>
    );
  }
  */
}

ReactDOM.render(<App />, document.getElementById('root'));