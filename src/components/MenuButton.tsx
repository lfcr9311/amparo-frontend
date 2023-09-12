import React from 'react';

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const buttonStyle: React.CSSProperties = {
    width: '163px',
    height: '163px',
    backgroundColor: '#E76553',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const innerSpaceStyle: React.CSSProperties = {
    width: '85px',
    height: '85px',
    backgroundColor: 'white', 
    borderRadius: '50%',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <div style={innerSpaceStyle}></div>
    </button>
  );
};

export default MenuButton;