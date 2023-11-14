
import { useState } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import './AdicionarInformacao.css'
import DescriptionInfo from "../../components/DescriptionInfo/DescriptionInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constans";

interface InformacaoUpdate {
    title?: string;
    link?: string;
    description?: string;
    update: boolean;
}

export function AdicionarInformacao() {
    const location = useLocation();
    const information = location.state as InformacaoUpdate;
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [link, setLink] = useState('');

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
    console.log(title, text, link)


    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            <DescriptionInfo value={information.title === undefined ? '' : information.title} onChange={handleTitle} placeholder="Título" type="title" />
            <DescriptionInfo value={information.description === undefined ? '' : information.description} onChange={handleText} placeholder="Texto" type="text" />
            <DescriptionInfo value={information.link === undefined ? '' : information.link} onChange={handleLink} placeholder="Link" type="link" />
            <div className="button-add-info">
                <Button variant="contained" label="Salvar" onClick={() => {
                    navigate(ROUTES.INFORMACOES_MEDICO(), { state: { title: title, description: text, link: link, update: true} })
                }} />
            </div>
            <Footer user='doctor' />
        </>
    )
}