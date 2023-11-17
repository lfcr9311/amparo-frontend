import './DescriptionInfo.css'

interface DescriptionInfoProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    type?: 'title' | 'text' | 'link';
}

export default function DescriptionInfo({ value, onChange, placeholder, type }: DescriptionInfoProps) {
    const handleValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <textarea
            value={value}
            onChange={handleValue}
            placeholder={placeholder}
            className={`description-info-${type}`}
        />
    );
}


