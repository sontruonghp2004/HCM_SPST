// pages/TimelinePage.tsx
import { useEffect, useState } from 'react';
import TimelineEventDetail from '../components/TimelineEventDetail';
import Modal from '../components/ui/modal';
import timelineEvents from '../data/timeline-events.json';
import { TimelineEvent } from '../types/timeline';

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white pt-20 font-sans">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header - Trang nghiêm */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-red-800 mb-6">
            Dòng Thời Gian Tư Tưởng Hồ Chí Minh
            <span className="block text-yellow-600 mt-2 text-5xl md:text-6xl">
              Xây Dựng Đảng & Giữ Vững Niềm Tin Nhân Dân
            </span>
          </h1>
          <p className="text-gray-800 text-xl max-w-4xl mx-auto leading-relaxed">
            Hồ Chí Minh cảnh báo: Đảng cầm quyền có thể “hỏng” nếu sa vào quan liêu, tham nhũng, xa rời nhân dân. Dòng thời gian này làm rõ tư tưởng của Người về nguy cơ mất lòng tin và giải pháp xây dựng Đảng trong sạch, vững mạnh.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Dòng thời gian trung tâm */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-red-600 via-yellow-500 to-red-600 opacity-40 rounded-full" />

          <div className="space-y-32 md:space-y-40">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center justify-between flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12`}
              >
                {/* Card Event */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <button
                    onClick={() => openModal(event)}
                    className="w-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-red-200 hover:border-red-500 group text-left overflow-hidden"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md">
                        {event.year}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-4 group-hover:text-red-700 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="inline-flex items-center text-red-600 group-hover:text-red-800 font-semibold text-lg transition-colors">
                      Xem Phân Tích Chi Tiết
                      <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Điểm mốc + Hình ảnh minh họa */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full border-8 border-white shadow-2xl flex items-center justify-center mb-4">
                    <span className="text-white text-3xl font-bold">{event.year.slice(2,4)}</span>
                  </div>

                  {/* Render hình ảnh từ search (thay bằng URL thực tế hoặc public folder) */}
                  {/* Ví dụ render một hình đại diện cho event */}
                  {/* <img src={event.image} alt={event.title} className="w-48 h-32 object-cover rounded-lg shadow-lg border-4 border-yellow-400" /> */}
                </div>

                {/* Bên trống để cân đối */}
                <div className="w-full md:w-5/12 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedEvent?.title ?? ''}
      >
        {selectedEvent && <TimelineEventDetail event={selectedEvent} />}
      </Modal>
    </div>
  );
}