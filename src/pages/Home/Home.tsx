import React from 'react';
import './Home.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';

const handleClick = () => {
  console.log("Clickei aqui hein");
  
}
const Home = () => {
  return (
    <div className="container">
      <HeaderHome title='Olá, Fulano!'/>
    </div>
  );
};

export default Home;
