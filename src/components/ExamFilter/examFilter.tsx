import React from 'react';
import { Tabs, Tab, AppBar, Box } from '@mui/material';
import { styled } from '@mui/system';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface ExamFilterProps {
  tabs: TabItem[];
  initialTab?: number;
  value: number;
  setValue: (value: number) => void;
}

// @ts-ignore
const ExamFilterTab = styled(Tab)(({ theme }) => ({
  minWidth: '101px',
  height: '23px',
  zIndex: 3,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  color: '#E76553',
  textAlign: 'center',
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  '&.Mui-selected': {
    color: '#FBF8F8',
  },
}));

const ExamFilter: React.FC<ExamFilterProps> = ({ tabs, value, setValue }) => {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '322px',
        height: '34px',
        borderRadius: '100px',
        background: '#FFF',
        padding: '0px 6px', // ajustar espacamento
        gap: '3px',
        flexShrink: 0,
        marginTop: '7px'
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#E76553',
              height: '28px',
              borderRadius: '100px',
              bottom: '13px', // mover a parte vermelha
            },
            className: 'tab-indicator',
          }}
        >
          {tabs.map((tab, index) => (
            <ExamFilterTab
              key={index}
              label={tab.label}
              disableRipple
              style={{ marginTop: '10px' }} // mover os textos
            />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((tab, index) => (
        <Box key={index} hidden={value !== index}>
          {tab.content}
        </Box>
      ))}
    </Box>
  );
};

export default ExamFilter;
