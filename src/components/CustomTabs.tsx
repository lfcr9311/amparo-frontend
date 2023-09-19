import React from 'react';
import { Tabs, Tab, AppBar, Box } from '@mui/material';
import { styled } from '@mui/system';

interface TabItem {
 label: string;
 content: React.ReactNode;
}

interface CustomTabsProps {
 tabs: TabItem[];
 initialTab?: number;
}

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

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, initialTab = 0 }) => {
 const [value, setValue] = React.useState(initialTab);

 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
 setValue(newValue);
 };

 return (
 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '286px', borderRadius: '100px', background: '#FFF', padding: '6px' }}>
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
 bottom: '5px', // Ajusta a posição do indicador para que ele fique abaixo dos rótulos
 }
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
 </Box>
 );
};

export default CustomTabs;
