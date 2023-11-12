import React, { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import LoadingAnim from '../../assets/Loading.json';

const Loading: React.FC = () => {
    const animationContainer = useRef<HTMLDivElement | null>(null);
    const animation = useRef<AnimationItem | null>(null);

    useEffect(() => {
        if (animationContainer.current && !animation.current) {
            animation.current = Lottie.loadAnimation({
                container: animationContainer.current,
                animationData: LoadingAnim,
                loop: true,
                autoplay: true,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                },
            });
        }

        return () => {
            if (animation.current) {
                animation.current.destroy();
                animation.current = null;
            }
        };
    }, []);

    return (
        <div style={{ marginTop: '10rem' }}>
            <div ref={animationContainer} style={{ width: 120, height: 120 }} />
        </div>
    );
};

export default Loading;
