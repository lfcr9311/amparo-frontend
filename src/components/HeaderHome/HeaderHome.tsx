// Header.tsx
import React from 'react';
import './HeaderHome.css'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
interface HeaderProps {
  title: string;
}

const HeaderHome: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <div className="header-content">
          <ArrowCircleLeftOutlinedIcon  style= {{fontSize:'20px'}}className='back-button'/>
          <p className='leave'>Sair</p>
        <p className='title'>{title}</p>
        <NotificationsNoneIcon style= {{fontSize:'27px'}} className='question-mark-icon'/>
      </div>
    </div>
  );
};

export default HeaderHome;
