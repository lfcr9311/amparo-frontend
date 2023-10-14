// Header.tsx
import React from 'react';
import './HeaderHome.css';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from 'react-router-dom';
import CustomTabs from '../CustomTabs/CustomTabs';

interface HeaderProps {
  title?: string;
  type: 'headerHome' | 'headerChat' | 'headerPage' | 'headerTab';
  setActiveTab?: (tab:string) => void;
  activeTab?: string;
}

const HeaderHome: React.FC<HeaderProps> = ({ title, type, setActiveTab, activeTab }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  

  return (
    <div className="header"></div>
      <div className="header-content">
        <ArrowCircleLeftOutlinedIcon
          onClick={handleBack}
          style={
            type == 'headerHome' ? { fontSize: '20px' } : { fontSize: '40px', marginRight: '10px' }
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
            setActiveTab={setActiveTab}
            activeTab={activeTab}
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
