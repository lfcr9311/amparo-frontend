import React, { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import LoadingAnim from '../../assets/LoadingRound.json';
//import LoadingAnim from '../../assets/LoadingNoBackg.json';

//O LoadingRound é a animação com fundo para dar o contraste certo (SUGERIDO).
//O Loading é a animação com fundo transparente, o que deixa estranho a dinâmia das cores.


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
