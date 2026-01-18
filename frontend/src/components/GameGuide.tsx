// src/pages/GameGuide.tsx
import {
  AlertCircle,
  ArrowRight,
  BookOpenText,
  HeartHandshake,
  Scale,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GameGuide() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-red-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background mờ chân dung Bác Hồ hoặc cờ Đảng */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/hcm-background.jpg')" }} // Thay bằng ảnh thực tế của bạn
      />

      <div className="relative container mx-auto px-4 py-12 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Tiêu đề */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-red-800 drop-shadow-lg mb-6">
              Trò Chơi Giáo Dục
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-red-700 mb-4">
              Xây Dựng Đảng Trong Sạch, Vững Mạnh
            </h2>
            <p className="text-2xl text-yellow-700 font-semibold italic">
              Giữ Vững Niềm Tin Nhân Dân Theo Tư Tưởng Hồ Chí Minh
            </p>
            <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto leading-relaxed">
              Hồ Chí Minh từng cảnh báo: Đảng cầm quyền có thể “hỏng” nếu sa vào quan liêu, tham nhũng, xa rời nhân dân. 
              Qua 16 tình huống thực tiễn, bạn sẽ vận dụng tư tưởng của Người để đưa ra quyết định đúng đắn, 
              giữ vững niềm tin của nhân dân vào Đảng.
            </p>
          </div>

          {/* Card hướng dẫn chính */}
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-red-600 overflow-hidden">
            <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-8 text-center">
              <BookOpenText className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">Hướng Dẫn Tham Gia</h3>
            </div>

            <div className="p-8 md:p-12 space-y-12">
              {/* Mục tiêu */}
              <section>
                <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 mr-4 text-red-600" />
                  Mục Tiêu Của Trò Chơi
                </h2>
                <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-8 rounded-2xl border-2 border-yellow-400 shadow-lg">
                  <p className="text-xl text-gray-800 text-center leading-relaxed">
                    Bạn sẽ đóng vai một cán bộ lãnh đạo Đảng, đối mặt với <strong>16 tình huống thực tiễn</strong> trong 4 năm nhiệm kỳ.
                  </p>
                  <p className="text-2xl font-bold text-red-700 mt-6 text-center">
                    Nhiệm vụ: Giữ <span className="text-green-600">Niềm Tin Nhân Dân trên 0</span> và đạt điểm chỉnh đốn Đảng cao nhất!
                  </p>
                  <p className="text-lg italic text-gray-600 mt-4 text-center">
                    "Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân." 
                    <br />— <strong>Hồ Chí Minh</strong>
                  </p>
                </div>
              </section>

              {/* 4 Chỉ số */}
              <section>
                <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
                  Bốn Chỉ Số Cốt Lõi Theo Tư Tưởng Hồ Chí Minh
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { name: 'Niềm Tin Nhân Dân', icon: UsersRound, color: 'text-blue-700', desc: 'Yếu tố quyết định sự tồn vong của Đảng. Mất lòng dân là mất tất cả.' },
                    { name: 'Độ Trong Sạch Đảng', icon: ShieldCheck, color: 'text-green-700', desc: 'Chống tham nhũng, quan liêu, suy thoái – "giặc nội xâm".' },
                    { name: 'Gắn Bó Với Dân', icon: HeartHandshake, color: 'text-red-700', desc: 'Lấy dân làm gốc, gần dân, lắng nghe dân, vì dân phục vụ.' },
                    { name: 'Hiệu Quả Chỉnh Đốn', icon: Scale, color: 'text-yellow-700', desc: 'Tự phê bình, phê bình, nêu gương, dân chủ trong Đảng.' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all hover:border-red-500">
                      <div className="flex flex-col items-center text-center">
                        <stat.icon className={`w-20 h-20 ${stat.color} mb-4`} />
                        <h3 className="text-2xl font-bold text-red-800 mb-3">{stat.name}</h3>
                        <p className="text-gray-700 leading-relaxed">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cách chơi */}
              <section>
                <h2 className="text-3xl font-bold text-red-800 mb-8 flex items-center justify-center">
                  <AlertCircle className="w-12 h-12 mr-4 text-orange-600" />
                  Cách Chơi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Đọc kỹ tình huống thực tiễn về xây dựng Đảng",
                    "Chọn 1 trong 4 giải pháp phù hợp với tư tưởng Hồ Chí Minh",
                    "Xem kết quả tác động đến 4 chỉ số và trích dẫn của Bác",
                    "Hoàn thành 16 tình huống để nhận đánh giá cuối cùng",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-red-50 rounded-xl border border-red-300">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-lg font-medium text-gray-800">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mẹo từ Bác */}
              <section className="bg-gradient-to-r from-yellow-100 to-red-100 p-10 rounded-2xl border-4 border-yellow-500 shadow-2xl">
                <h3 className="text-3xl font-bold text-red-800 mb-6 text-center">
                  Lời Dạy Của Bác – Mẹo Để Thành Công
                </h3>
                <div className="space-y-5 text-lg text-gray-800">
                  {[
                    "Luôn lấy dân làm gốc, gần dân, lắng nghe dân thật sự.",
                    "Tự phê bình và phê bình nghiêm túc, không che giấu khuyết điểm.",
                    "Cán bộ phải nêu gương, chí công vô tư, cần kiệm liêm chính.",
                    "Chống tham nhũng quyết liệt – đó là 'giặc nội xâm' nguy hiểm.",
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-3 h-3 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <p><strong>{tip}</strong></p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nút bắt đầu */}
              <div className="text-center pt-8">
                <Link
                  to="/game"
                  className="inline-flex items-center px-12 py-6 text-3xl font-extrabold text-white bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 rounded-2xl shadow-2xl transition-all transform hover:scale-105"
                >
                  Bắt Đầu Rèn Luyện Theo Tư Tưởng Bác
                  <ArrowRight className="w-10 h-10 ml-4" />
                </Link>
                <p className="mt-6 text-lg text-gray-600">
                  Sau khi hoàn thành, bạn có thể gửi điểm lên <strong>Bảng Xếp Hạng</strong> để so sánh với các bạn khác
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}