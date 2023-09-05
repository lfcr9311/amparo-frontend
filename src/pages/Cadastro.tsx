import React, { useState } from 'react';
import Textfield from '../components/Textfield'
import Button from '../components/Button'

interface FormData {
  name: string;
  email: string;
  cpf: string;
  dob: string;
  password: string;
  confirmPassword: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  cpf: '',
  dob: '',
  password: '',
  confirmPassword: '',
};

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Textfield
                  label="Nome"
                  value={formData.name} 
                  type={''} 
                  onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                  } } 
        />
        <Textfield
          label="Email"
          type={''} 
                  onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                  } }       
        
          value={formData.email}
        />
        <Textfield
          label="CPF"
          type={''} 
          onChange={function (value: string): void {
              throw new Error('Function not implemented.');
          } }       
          value={formData.cpf}
        />
        <Textfield
          label="Data de Nascimento"
          type={''} 
            onChange={function (value: string): void {
                throw new Error('Function not implemented.');
            } }       
          value={formData.dob}
        />
        <Textfield
          label="Senha"
          type={''} 
            onChange={function (value: string): void {
                throw new Error('Function not implemented.');
            } }       
          value={formData.password}
        />
        <Textfield
          label="Confirmar Senha"
          type={''} 
            onChange={function (value: string): void {
                throw new Error('Function not implemented.');
            } }       
          value={formData.confirmPassword}
        />
        <Button
          variant="contained"
          label='aaaa'
          onClick={() => {}}
        />
        
      </form>
    </div>
  );
};

export default Cadastro;
