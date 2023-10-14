import style from './SelectModalTime.css';

interface TimeSelectProps {
    onChange: (selectedState: string) => void;
    value: string;
}

const SelectModalTime: React.FC<TimeSelectProps> = ({ onChange, value }) => {
    const hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const minute = [0, 30];
};