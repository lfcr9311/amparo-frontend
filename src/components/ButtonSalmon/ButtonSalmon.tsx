import React from 'react';
import Button from '@mui/material/Button';


interface CustomButtonSalmonProps {
    label: string;

    icon?: React.ReactElement;  //Testar

    onClick: () => void;




}
interface IconButtonProps {
    icon: React.ReactElement;
    style?: React.CSSProperties;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, style }) => {
    const iconStyle: React.CSSProperties = {

        maxWidth: '26px',
        maxHeight: '26px',
        margin: '0 8px 0 0',
        ...style,
    };
    return <span style={iconStyle}>{icon}</span>;
};




export const ButtonSalmon: React.FC<CustomButtonSalmonProps> = ({ label, icon, onClick, }) => {


    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#E76553",
        display: 'flex',
        margin: '8px',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '19px',
        fontWeight: '500',
        borderRadius: "10px",
        height: "53px",
           width: "164px",


    };




    return (
        <div className="ButtonSalmon">
            <Button variant="contained"
                onClick={onClick}
                style={buttonStyle}>
                {icon && <IconButton icon={icon} />} {/* Usando o IconButton */}
                <span>{label}</span>

            </Button>
        </div>
    );
} 
