import React from 'react';
import { Heart } from 'lucide-react';

const Celebration: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-20 p-6 text-center animate-fade-in">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-full shadow-2xl mb-8 animate-bounce">
        <Heart size={80} className="text-rose-500" fill="#f43f5e" />
      </div>
      <h1 className="font-handwriting text-5xl md:text-6xl text-rose-600 mb-6 drop-shadow-md">Cảm ơn Trâm Anh!</h1>
      <p className="text-xl md:text-2xl text-rose-800 font-semibold max-w-lg mb-8">
        Anh hứa sẽ trân trọng cơ hội này. <br/>
        Giờ em xuống nhận cóc matcha latte và để anh chở đi thi cho may mắn nhé?
      </p>
      
      {/* 
        IMPORTANT: Please save your photo as 'celebration-photo.jpg' 
        and place it in the same directory as index.html
      */}
      <div className="w-72 h-72 md:w-96 md:h-96 relative group">
        <div className="absolute inset-0 bg-white p-3 rotate-3 rounded-xl shadow-xl transition-transform group-hover:rotate-0">
            <div className="w-full h-full overflow-hidden rounded-lg bg-gray-200">
                <img 
                    src="./celebration-photo.jpg" 
                    alt="Vương và Mèo Hoa Hồng" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/598745226_868907632732651_1216868913696540306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WDe7Iuj3aFUQ7kNvwFZ8fT8&_nc_oc=AdmPSuHkNTc5Q_qpxxru30czqWl-NsFiGvM_vheWPWz7QUv1RSO5x8iyYq_TayFwlsL5aIyfl54dOZQUAkcQhU64&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=FAfNube8r2ugLS8zE0xerw&oh=00_Afn0N0BvMth1wD64-f-LMFs4vAalaOQR2BNkOPxPccrdWw&oe=6946AA43";
                    }}
                />
            </div>
        </div>
        <div className="absolute -bottom-8 -right-8 animate-float">
            <span className="text-6xl">🌹</span>
        </div>
      </div>
    </div>
  );
};

export default Celebration;