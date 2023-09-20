// Header.tsx
import React from 'react';
import './HeaderHome.css'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
  title: string;
}

const HeaderHome: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const handleBack = () =>{
    navigate('/login')
  }
  return (
    <div className="header">
      <div className="header-content">
          <ArrowCircleLeftOutlinedIcon onClick={handleBack}  style= {{fontSize:'20px'}}className='back-button'/>
          <a className='leave'>Sair</a>
        <a className='title'>{title}</a>
        <NotificationsNoneIcon style= {{fontSize:'27px'}} className='question-mark-icon'/>
      </div>
    </div>
  );
};

export default HeaderHome;