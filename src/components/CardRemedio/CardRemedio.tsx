import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CardRemedio.css';

interface Medicamento {
  label: string;
  dosagem?: string;
  frequencia?: string;
  dataFinal?: string | "Uso contínuo";
}

interface CardRemedioProps {
  medicamento: Medicamento;
}

export default function CardRemedio({ medicamento }: CardRemedioProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={toggleAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="card-remedio-header">
            <p className="label-card">{medicamento.label}</p>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="medicamento-info">
            <p>Dosagem: {medicamento.dosagem || 'Não informado'}</p>
            <p>Frequência: {medicamento.frequencia || 'Não informado'}</p>
            <p>Data final: {medicamento.dataFinal || 'Não informado'}</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
