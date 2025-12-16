import React, { useState } from 'react';
import { Heart, Stars, Frown, ThumbsUp, RefreshCcw } from 'lucide-react';
import { generateLovePoem } from '../services/geminiService';

interface LetterProps {
  onForgive: () => void;
}

const Letter: React.FC<LetterProps> = ({ onForgive }) => {
  const [poem, setPoem] = useState<string>('');
  const [loadingPoem, setLoadingPoem] = useState<boolean>(false);
  const [showPoem, setShowPoem] = useState<boolean>(false);

  const handleGeneratePoem = async () => {
    setLoadingPoem(true);
    const result = await generateLovePoem();
    setPoem(result);
    setLoadingPoem(false);
    setShowPoem(true);
  };

  return (
    <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-6 md:p-10 my-8 mx-4 z-10 border border-white relative animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-handwriting text-5xl text-rose-600 mb-2">Gửi Trâm Anh</h1>
        <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full"></div>
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed font-medium text-lg">
        <p>
          <span className="font-bold text-rose-600 text-xl">Trâm Anh à,</span> anh xin lỗi em vì đã dỗi em chiều qua. Biết em đã mua đồ ăn để dỗ anh, vậy mà anh vẫn giận — đó là lỗi khiến anh rất hối hận. 
          <span className="block mt-2 text-rose-700 italic border-l-4 border-rose-300 pl-4 bg-rose-50 p-2 rounded-r-lg">
            Anh xin lỗi vì lúc tâm lý chán nản đã nảy sinh suy nghĩ tìm niềm vui trên Facebook Dating mà không để tâm đến cảm xúc của em, làm em bị tổn thương.
          </span>
        </p>

        <p>
          Nhìn lại quãng thời gian vừa qua, em không hề làm điều gì quá lớn khiến anh phải ghét. Tất cả đều là những chuyện anh có thể chấp nhận. 
          Ngược lại, em còn làm rất nhiều điều tốt cho anh, khiến anh bất ngờ và trân trọng. Vậy mà anh vẫn đôi lúc cáu gắt, dỗi hờn, trách em — tất cả vì anh chưa đủ trưởng thành.
        </p>

        <p>
          Anh đang nhận ra và cố gắng thay đổi từng ngày. Thật lòng mà nói, những lần cãi nhau hầu hết đều do anh sai. Em không thể chấp nhận những lúc anh cư xử chưa đúng, và anh hiểu điều đó. 
          <strong className="text-rose-600 ml-1">Sai là ở anh.</strong>
        </p>

        <p>
           Vì vậy anh sẽ tiếp tục thay đổi để không làm em buồn, không làm em tổn thương. Anh luôn muốn ở lại, luôn cần em, và sẵn sàng nhận lỗi, đối mặt, sửa mình.
        </p>

        <div className="font-handwriting text-center text-rose-600 pt-8 mt-4 border-t border-rose-100">
          <p className="text-3xl">Anh thương em.</p>
          <p className="text-2xl mt-2 text-rose-400">- Vương -</p>
        </div>
      </div>

      {/* Interactive AI Poem Section */}
      <div className="mt-10 border-t border-dashed border-rose-200 pt-6">
        {!showPoem ? (
            <div className="text-center">
                <p className="text-gray-500 mb-4 text-sm">Anh muốn gửi tặng em thêm một điều nhỏ nhoi...</p>
                <button 
                    onClick={handleGeneratePoem}
                    disabled={loadingPoem}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all disabled:opacity-50"
                >
                    {loadingPoem ? <RefreshCcw className="animate-spin" size={20}/> : <Stars size={20}/>}
                    {loadingPoem ? 'Đang viết thơ...' : 'Viết thơ tặng em'}
                </button>
            </div>
        ) : (
            <div className="bg-rose-50 rounded-xl p-6 text-center border border-rose-100">
                <Stars className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
                <p className="font-handwriting text-2xl text-rose-800 whitespace-pre-line leading-relaxed">
                    {poem}
                </p>
                <button 
                  onClick={() => handleGeneratePoem()}
                  className="mt-4 text-xs text-rose-400 hover:text-rose-600 underline"
                >
                  Viết bài khác
                </button>
            </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
        <button 
          className="group relative px-8 py-4 bg-gray-200 text-gray-500 rounded-2xl font-bold transition-all hover:bg-gray-300 w-full md:w-auto overflow-hidden"
          onClick={() => alert("Anh sẽ đợi đến khi em hết giận. Anh yêu em.")}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                <Frown size={20}/> Vẫn còn giận
            </span>
        </button>

        <button 
          onClick={onForgive}
          className="group relative px-8 py-4 bg-rose-600 text-white rounded-2xl font-bold shadow-xl transition-all hover:bg-rose-500 hover:scale-105 active:scale-95 w-full md:w-auto"
        >
            <span className="flex items-center justify-center gap-2">
                <Heart fill="currentColor" className="group-hover:animate-ping absolute opacity-50"/> 
                <Heart fill="currentColor" /> 
                Tha lỗi cho anh
            </span>
        </button>
      </div>
    </div>
  );
};

export default Letter;