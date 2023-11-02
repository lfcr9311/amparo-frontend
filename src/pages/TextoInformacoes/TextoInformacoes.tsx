import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import ComponentTextoInformacoes from '../../components/TextoInformacoes/TextoInformacoes';


const TextoInformacoes = () => {



    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            <ComponentTextoInformacoes

                titulo="Posso tomar banho de chuva?"
                previa="O infectologista Francisco Ferrer explica que o frio e os dejetos em calhas e bicas podem apresentar riscos durante o banho"
                autor=" Dr. João Silva (CRM/UF 123456)"
                data="24/10/2023"
                texto="Durante a quadra chuvosa, que acontece entre os meses de fevereiro e maio, é comum surgirem dúvidas sobre o banho de chuva e seus possíveis impactos à saúde. No entanto, como explica o médico infectologista Francisco Ferrer, do Hospital São José, em Fortaleza, “o banho de chuva propriamente dito não tem um risco diretamente associado”. Apesar de não existirem doenças relacionadas diretamente ao ato, o infectologista explica que, ao tomar banho na chuva, a temperatura corporal tende a diminuir, o que pode ocasionar uma queda da imunidade. Essa queda, coloca ele, “pode culminar em uma das infecções virais comuns nessa época, como as gripes e resfriados.” Uma dica do especialista para quem vai tomar banho de chuva é verificar o local de onde vem a água. Francisco orienta evitar pontos de drenagem de água como córregos onde acontece o esgotamento sanitário e dejetos são depositados. “Estes locais em si vão apresentar um risco maior, pela contaminação já existente”, afirma."

                referencias={["https://www.opovo.com.br/noticias/saude/2023/03/03/banho-de-chuva-nao-faz-mal-a-saude-mas-requer-cuidados-com-contaminacao.html#:~:text=Para%20evitar%20doenças%20como%20a,nas%20ruas%20com%20a%20chuva.", "https://www.opovo.com.br/noticias/saude/2023/03/03/banho-de-chuva-nao-faz-mal-a-saude-mas-requer-cuidados-com-contaminacao.html#:~:text=Para%20evitar%20doenças%20como%20a,nas%20ruas%20com%20a%20chuva."]} />

            <Footer user="patient" />
        </>
    );
};

export default TextoInformacoes;