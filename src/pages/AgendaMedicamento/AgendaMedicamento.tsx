import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import MedicamentoAgenda, { MedicamentoAgendaType } from '../../components/MedicamentoAgenda/MedicamentoAgenda';
import './AgendaMedicamento.css';
import { useEffect, useState } from 'react';
import { editDosage, getAllDosages } from '../../utils/apiService';
import { Box } from '@mui/system';

export default function AgendaMedicamento() {
  const [medicamentosAgenda, setMedicamentosAgenda] = useState<MedicamentoAgendaType[]>([]);

  const formatTimestamp = (timestamp: string) => {
    return timestamp ? new Date(timestamp).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).substring(0, 17).replace(',', '') : undefined
  }

  const fetchAllDosages = async () => {
    return getAllDosages()
      .then((dosages: any) => {
        const medicines = dosages.map((dosage: any) => ({
          id: dosage.id,
          medicineId: dosage.idMedicine,
          frequency: dosage.frequency,
          quantity: dosage.quantity,
          nome: dosage.medicineName,
          usoContinuo: dosage.finalDate === null,
          dataFinal: dosage.finalDate,
          ultimaDataConsumida: formatTimestamp(dosage.lastConsumedDate)
        }))
        medicines.sort((a: MedicamentoAgendaType, b: MedicamentoAgendaType) => a.nome.localeCompare(b.nome))
        setMedicamentosAgenda(medicines)
        return true
      })
  }

  useEffect(() => {
    fetchAllDosages()
  }, [])

  const handleInfoClick = (medicamentoId: string) => {
    console.log("Informações do medicamento com ID:", medicamentoId);
  };

  const handleAdministrate = (medicamento: MedicamentoAgendaType) => {
    const dosageToUpdate = {
      dosageId: medicamento.id,
      medicineId: medicamento.medicineId,
      quantity: medicamento.quantity,
      frequency: medicamento.frequency,
      finalDate: medicamento.dataFinal,
      lastConsumedDate: new Date().toISOString()
    }
    return editDosage(dosageToUpdate)
      .then(fetchAllDosages)
  }


  return (
    <>
      <HeaderHome title="Agenda" type="headerPage" />
      <div className="meus-remedios-container">
        <Box style={{ minHeight: '450px', maxHeight: '450px' }}>
          {medicamentosAgenda.map((medicamento) => (
            <MedicamentoAgenda
              key={medicamento.id}
              title={medicamento.nome.length > 18 ? medicamento.nome.substring(0, 15) + "..." : medicamento.nome}
              content={medicamento}
              onInfoClick={() => handleInfoClick(medicamento.id)}
              onAdministrate={(medicamento) => handleAdministrate(medicamento)}
            />
          ))}
        </Box>
      </div>
      <Footer user="patient" />
    </>
  );
}
