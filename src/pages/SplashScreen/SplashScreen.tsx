import React, { Component } from 'react';
import Lottie from 'lottie-web';
import animationData from '../../assets/Splash.json';

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
                ref={this.animationContainerRef}
                style={{
                    width: '60%',
                    height: '60%',
                    margin: 'auto'
                }}
            ></div>
        );
    }
}

export default Splash;