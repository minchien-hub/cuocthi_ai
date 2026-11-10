import React from 'react';
import VirtualTryOnApi from '../components/VirtualTryOnApi';
import AiStylistChatbot from '../components/AiStylistChatbot';
import './VirtualTryOnPage.css';

const VirtualTryOnPage = () => {
  return (
    <div className="vton-page" style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '100vh', background: '#f8fafc' }}>
      <VirtualTryOnApi />
      <AiStylistChatbot />
    </div>
  );
};

export default VirtualTryOnPage;
