import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ComponentTextFieldForum.css';

interface MultilineTextFieldsProps {
    tituloDoTextField: string;
    quantidadeLinhas: number;
    mensagemQuadroEmBranco: string;
}


export const MultilineTextFields: React.FC<MultilineTextFieldsProps> = ({ quantidadeLinhas, tituloDoTextField, mensagemQuadroEmBranco  }) => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '320px', },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='div-forum-style'>
                <TextField
                    id="outlined-multiline-static"
                    label={<span className='textfield-forum-title-style'>{tituloDoTextField}
                    </span>
                    }
                    multiline
                    defaultValue={mensagemQuadroEmBranco}
                    rows={quantidadeLinhas}
                    className='textfield-forum-style'
                    color="error" focused
                />
                </div>
        </Box>
    );
};


