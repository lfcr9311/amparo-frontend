import React from 'react';
import IconProfile from '../../../../assets/IconProfile.svg';

import './NomePerfil.css';

interface NomeProps {
  name: string;
}
const nameStyle = {
  fontFamily: 'Poppins',
  fontSize: '25px',
  fontWeight: 600,
  lineHeight: '38px',
};


export function Nome({ name }: NomeProps) {
  return (
    <div className="profile-box">
      <img src={IconProfile} alt="Profile" className="profile-image" />
      <p className="name" style={nameStyle}>{name}</p>
    </div>
  );
}