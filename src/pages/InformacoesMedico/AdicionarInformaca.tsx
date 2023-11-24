import { addInformation, updateInformation } from '../../utils/apiService';
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import './AdicionarInformacao.css'
import DescriptionInfo from "../../components/DescriptionInfo/DescriptionInfo";
import { ROUTES } from "../../routes/constans";
import { useLocation, useNavigate } from 'react-router-dom';

export function AdicionarInformacao() {
    const location = useLocation()
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [id, setId] = useState('');
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
    const handleId = (id: string) => {
        setId(id)
    }

    useEffect(() => {
        const { id, title, description, link } = location.state || { id: '', title: '', description: '', link: '' }
        handleId(id)
        handleTitle(title)
        handleText(description)
        handleLink(link)
    }, [])

    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            <DescriptionInfo value={title} onChange={handleTitle} placeholder="Título" type="title" />
            <DescriptionInfo value={text} onChange={handleText} placeholder="Texto" type="text" />
            <DescriptionInfo value={link} onChange={handleLink} placeholder="Link" type="link" />

            <div className="button-add-info">
                <Button variant="contained" label="Salvar" onClick={() => {
                    if (id != '') {
                        updateInformation(id, title, text, link)
                    } else {
                        addInformation(title, text, link);
                    }
                    navigate(ROUTES.INFORMACOES_MEDICO());
                }} />
            </div>
            <Footer user='doctor' />
        </>
    )
}