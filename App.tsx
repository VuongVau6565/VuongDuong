import React, { useState } from 'react';
import { AppState } from './types';
import Background from './components/Background';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import Celebration from './components/Celebration';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.CLOSED);

  const handleOpenLetter = () => {
    setAppState(AppState.OPEN);
  };

  const handleForgive = () => {
    setAppState(AppState.FORGIVEN);
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden flex flex-col items-center">
      <Background />
      
      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen">
        {appState === AppState.CLOSED && (
          <Envelope onClick={handleOpenLetter} />
        )}

        {appState === AppState.OPEN && (
          <Letter onForgive={handleForgive} />
        )}

        {appState === AppState.FORGIVEN && (
          <Celebration />
        )}
      </div>

      {/* Footer/Signature */}
      <div className="fixed bottom-4 text-rose-300 text-xs z-0 opacity-50">
        Made with ❤️ for you
      </div>
    </div>
  );
};

export default App;