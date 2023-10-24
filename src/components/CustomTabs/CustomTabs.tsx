import React from 'react';
import { useState } from 'react';
import { Tabs, Tab, AppBar, Box } from '@mui/material';
import { styled } from '@mui/system';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  initialTab?: number;
  setValue?: (value: number) => void;
  value?: number;
}
// @ts-ignore
const CustomTab = styled(Tab)(({ theme }) => ({
  minWidth: '100px',
  height: '30px', // Ajuste na altura para corresponder ao design do Figma
  borderRadius: '100px',
  color: '#BD1E08',
  transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  textAlign: 'center',
  zIndex: 2,
  '&.Mui-selected': {
    color: '#FBF8F8',
  },
}));

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, setValue, value }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (setValue) {
      setValue(newValue);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '286px',
        height: '44px',
        borderRadius: '100px',
        background: '#FFF',
        padding: '2px',
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#BD1E08',
              height: '39px',
              borderRadius: '100px',
              transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              bottom: '5px',
            },
          }}
        >
          {tabs.map((tab, index) => (
            <CustomTab key={index} label={tab.label} disableRipple />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((tab, index) => (
        <Box key={index} hidden={value !== index}>
          {tab.content}
        </Box>
      ))}
      {value}
    </Box>
  );
};

export default CustomTabs;
