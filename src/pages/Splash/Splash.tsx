import React, { Component } from 'react';
import Lottie from 'lottie-web';
import animationData from '../../assets/Splash.json';
import './Splash.css';

class Splash extends Component {
    animationContainerRef = React.createRef<HTMLDivElement>();

    componentDidMount() {
        if (this.animationContainerRef.current) {
            Lottie.loadAnimation({
                container: this.animationContainerRef.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: animationData,
            });
        }
    }

    render() {
        return (
            <div
                className='splash-size'
                ref={this.animationContainerRef}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fbf8f8',
                }}
            ></div>
        );
    }
}

export default Splash;