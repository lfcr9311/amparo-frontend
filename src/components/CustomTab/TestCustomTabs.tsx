// TestCustomTabs.tsx
import React from 'react';
import CustomTabs from './CustomTabs';
import './TestCustomTabs.css'

const TestCustomTabs: React.FC = () => {
  return (
    <div className="TestCustomTabs" style={{ padding: '50px' }}>
      <CustomTabs 
        tabs={[
          { label: "Pendentes", content: <div></div> },
          { label: "Realizados", content: <div></div> }
        ]}
      />
    </div>
  );
};

export default TestCustomTabs;
