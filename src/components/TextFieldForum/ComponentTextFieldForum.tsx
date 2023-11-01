import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ComponentTextFieldForum.css';

interface MultilineTextFieldsProps {
    tituloDoTextField: string;
    quantidadeLinhas: number;
}


export const MultilineTextFields: React.FC<MultilineTextFieldsProps> = ({ quantidadeLinhas, tituloDoTextField }) => {


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                borderColor: 'red',
            }}
            noValidate
            autoComplete="off"
        >
            <div>


                <TextField
                    id="outlined-multiline-static"
                    label={tituloDoTextField}
                    multiline
                    rows={quantidadeLinhas}
                    defaultValue="Default Value"
                    className='textfield-forum-style'
                />
            </div>
        </Box>
    );


};


