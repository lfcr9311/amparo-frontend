import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import Splash from './pages/Splash/Splash';
import './styles/global.css';

class App extends Component {
  state = {
    showSplash: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 5000);
  }

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
}

ReactDOM.render(<App />, document.getElementById('root'));