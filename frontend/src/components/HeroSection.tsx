// src/components/HeroSection.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroHeader } from './header';
import LeaderboardModal from './LeaderboardModal';
import { Button } from './ui/button';

export default function HeroSection() {
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-lenin-yellow-light/20 to-white">
          <div className="w-full max-w-6xl mx-auto px-6 py-16">
            <div className="flex flex-col items-center text-center space-y-10">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-extrabold md:text-6xl xl:text-7xl text-balance leading-tight text-gray-900">
                  Xây Dựng Đảng Cầm Quyền —{' '}
                  <span className="text-marx-red">Giữ Vững Niềm Tin Nhân Dân</span>
                </h1>

                <p className="mt-8 text-lg md:text-xl text-pretty max-w-3xl mx-auto text-gray-700 leading-relaxed">
                  Hồ Chí Minh từng cảnh báo: Đảng cầm quyền có thể “hỏng” nếu rơi vào
                  <strong> quan liêu, tham nhũng, xa rời quần chúng</strong>.
                  Trong bối cảnh hiện nay, niềm tin của nhân dân là yếu tố quyết định
                  sự tồn tại và vai trò lãnh đạo của Đảng. Nội dung này tập trung
                  làm rõ <strong>tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch,
                  vững mạnh</strong>, đồng thời phân tích các <strong>nguy cơ hiện hữu</strong>
                  và <strong>giải pháp thực tiễn</strong> nhằm củng cố uy tín,
                  giữ trọn niềm tin của Đảng trong lòng dân.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  {/* Nút chính: Vào hướng dẫn */}
                  <Button
                    asChild
                    size="lg"
                    className="px-8 py-6 text-lg font-bold bg-marx-red hover:bg-marx-red-hover text-white rounded-xl shadow-xl transition-all hover:shadow-2xl"
                  >
                    <Link to="/presentations">
                      Khám Phá Nội Dung
                    </Link>
                  </Button>

                  {/* Nút phụ: Mở modal */}
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tư Tưởng Hồ Chí Minh Về Xây Dựng Đảng
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Làm rõ các nguyên tắc xây dựng Đảng cầm quyền: lấy dân làm gốc,
              giữ vững đạo đức cách mạng, chống chủ nghĩa cá nhân,
              tăng cường kiểm tra, giám sát và gắn bó mật thiết với nhân dân.
            </p>
          </div>
        </section>
      </main>

      <LeaderboardModal
        isOpen={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
      />
    </>
  );
}
