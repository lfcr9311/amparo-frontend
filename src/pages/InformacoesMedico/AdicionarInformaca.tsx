import { addInformation } from '../../utils/apiService';
import { useState } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import './AdicionarInformacao.css'
import DescriptionInfo from "../../components/DescriptionInfo/DescriptionInfo";
import { ROUTES } from "../../routes/constans";
import { useNavigate } from 'react-router-dom';

export function AdicionarInformacao() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [link, setLink] = useState('');
    const doctorId = localStorage.getItem('idUser');
    console.log(doctorId);

    const navigate = useNavigate();

    const handleTitle = (newValue: string) => {
        setTitle(newValue);
    }
    const handleText = (newValue: string) => {
        setText(newValue);
    }
    const handleLink = (newValue: string) => {
        setLink(newValue);
    }

    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            <DescriptionInfo value={title} onChange={handleTitle} placeholder="Título" type="title" />
            <DescriptionInfo value={text} onChange={handleText} placeholder="Texto" type="text" />
            <DescriptionInfo value={link} onChange={handleLink} placeholder="Link" type="link" />

            <div className="button-add-info">
                <Button variant="contained" label="Salvar" onClick={() => {
                    addInformation(doctorId,title, text, link);
                    navigate(ROUTES.INFORMACOES_MEDICO());
                }} />
            </div>
            <Footer user='doctor' />
        </>
    )
}