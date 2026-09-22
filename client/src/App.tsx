import React from 'react';
import { ViewType } from './types/camera';
import MainScreen from './components/screens/MainScreen';
import CameraScreen from './components/screens/CameraScreen';
import { useState } from 'react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('main');

  const handleCameraOpen = () => {
    // No se pide acceso a la cámara acá. CameraScreen es dueño exclusivo
    // del ciclo de vida del stream (getUserMedia / stop). Pedir el
    // permiso acá también duplicaba la apertura del dispositivo y
    // colgaba la inicialización en CameraScreen.
    setCurrentView('camera');
  };

  const handleCameraClose = () => {
    setCurrentView('main');
  };

  return (
    <>
      {currentView === 'main' && (
        <MainScreen onCameraClick={handleCameraOpen} />
      )}
      {currentView === 'camera' && (
        <CameraScreen onClose={handleCameraClose} />
      )}
    </>
  );
};

export default App;