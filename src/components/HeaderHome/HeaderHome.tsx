// Header.tsx
import './HeaderHome.css';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from 'react-router-dom';
import CustomTabs from '../CustomTabs/CustomTabs';
interface HeaderProps {
  title?: string;
  type: 'headerHome' | 'headerChat' | 'headerPage' | 'headerTab';
  setValue?: (value: number) => void;
  value?: number;
}

const HeaderHome: React.FC<HeaderProps> = ({
  title,
  type,
  setValue,
  value,
}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleExit = () => {
    console.log('saiu');
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header-content">
        <ArrowCircleLeftOutlinedIcon
          onClick={type == 'headerHome' ? handleExit : handleBack}
          style={
            type == 'headerHome'
              ? { fontSize: '20px' }
              : { fontSize: '40px', marginRight: '10px' }
          }
          className="back-button"
        />
        {type == 'headerHome' && (
          <a
            className="leave"
            style={type != 'headerHome' ? { visibility: 'hidden' } : {}}
          >
            Sair
          </a>
        )}
        {type == 'headerTab' ? (
          <CustomTabs
            tabs={[
              { content: '', label: 'Pendentes' },
              { content: '', label: 'Realizados' },
            ]}
            setValue={setValue}
            value={value}
          />
        ) : (
          <a className="title">{title}</a>
        )}
        <NotificationsNoneIcon
          style={
            type == 'headerHome'
              ? { fontSize: '27px' }
              : { fontSize: '27px', visibility: 'hidden' }
          }
          className="question-mark-icon"
        />
      </div>
    </div>
  );
};

export default HeaderHome;
