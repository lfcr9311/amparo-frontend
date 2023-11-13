
import { useState } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import './AdicionarInformacao.css'
import DescriptionInfo from "../../components/DescriptionInfo/DescriptionInfo";


export function AdicionarInformacao() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [link, setLink] = useState('');

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
            <DescriptionInfo value={title} onChange={handleTitle} placeholder="Título" type="title" />
            <DescriptionInfo value={text} onChange={handleText} placeholder="Texto" type="text" />
            <DescriptionInfo value={link} onChange={handleLink} placeholder="Link" type="link" />
            <div className="button-add-info">
                <Button variant="contained" label="Salvar" onClick={() => { }} />
            </div>
            <Footer user='doctor' />
        </>
    )
}