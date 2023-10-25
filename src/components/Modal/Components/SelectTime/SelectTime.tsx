import './SelectTime.css';

export default function SelectTime() {

    return (
        <div className='componente-time'>
            <label className='horario'>
                Horário de Adminitstração:
                <input className='hora-minuto' type='time' required/>
            </label>
        </div>
    )
}