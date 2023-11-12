import './Overlay.css';
import Loading from '../Loading/Loading';

const Overlay = () => {
    return (
        <div className="overlay">
            <div className='loading-container'>
                <Loading />
            </div>
        </div>
    );
};

export default Overlay;
