import React from 'react';
import { Mail, Heart } from 'lucide-react';

interface EnvelopeProps {
  onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-10 relative p-4">
      <div 
        onClick={onClick}
        className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
      >
        <div className="relative bg-white w-72 h-52 md:w-96 md:h-64 shadow-2xl rounded-lg flex items-center justify-center border-t-2 border-pink-100">
            {/* Envelope Flap Effect */}
            <div className="absolute -top-10 left-0 w-full h-0 border-l-[144px] md:border-l-[192px] border-r-[144px] md:border-r-[192px] border-b-[100px] border-l-transparent border-r-transparent border-b-pink-200 rounded-t-lg origin-bottom transition-transform duration-500 group-hover:rotate-x-180 z-20"></div>
            
            {/* Stamp/Sticker */}
            <div className="absolute z-30 bg-rose-500 text-white rounded-full p-3 shadow-lg -mt-10 group-hover:-mt-24 transition-all duration-500">
                <Heart fill="currentColor" size={32} />
            </div>

            <div className="text-center z-10">
                <p className="text-rose-400 font-handwriting text-3xl mb-2">Gửi Trâm Anh</p>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Nhấn để mở</p>
            </div>
        </div>
      </div>
      <p className="mt-12 text-rose-800 font-medium animate-pulse">Vương có điều muốn nói...</p>
    </div>
  );
};

export default Envelope;