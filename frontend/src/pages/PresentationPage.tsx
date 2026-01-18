// pages/PresentationPage.tsx
import reportContent from "@/content/report.md?raw";
import React, { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Modal from "../components/ui/modal";

interface ChapterSection {
  id: number;
  title: string;
  content: string;
}

const PresentationPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<ChapterSection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const chapterSections: ChapterSection[] = useMemo(() => {
    // Parsing logic giữ nguyên như cũ
    const sections: ChapterSection[] = [];
    const lines = reportContent.split("\n");
    let currentTitle = "";
    let currentContent: string[] = [];
    let sectionId = 1;

    lines.forEach((line) => {
      if (line.startsWith("### ")) {
        if (currentTitle) {
          sections.push({
            id: sectionId++,
            title: currentTitle,
            content: currentContent.join("\n"),
          });
        }
        currentTitle = line.replace("### ", "").trim();
        currentContent = [];
      } else if (currentTitle) {
        currentContent.push(line);
      }
    });

    if (currentTitle) {
      sections.push({
        id: sectionId,
        title: currentTitle,
        content: currentContent.join("\n"),
      });
    }
    return sections;
  }, []);

  const inspirationalQuotes = [
    "Đảng ta là đạo đức, là văn minh. — Hồ Chí Minh",
    "Phải giữ gìn Đảng ta thật trong sạch, xứng đáng là người đầy tớ trung thành của nhân dân. — Hồ Chí Minh",
    "Có dân thì có tất cả, không có dân thì không có gì cả. — Hồ Chí Minh",
    "Một dân tộc, một đảng... nếu sa vào chủ nghĩa cá nhân thì sẽ mất lòng tin. — Hồ Chí Minh",
    "Chống tham ô là dân chủ, phải dựa vào lực lượng quần chúng. — Hồ Chí Minh",
  ];

  const hcmOverview = {
    keyThemes: [
      "Xây dựng Đảng trong sạch, vững mạnh, là đạo đức, là văn minh",
      "Gắn bó máu thịt với nhân dân, lấy dân làm gốc",
      "Chống quan liêu, tham nhũng, chủ nghĩa cá nhân – giặc nội xâm",
      "Tự phê bình và phê bình, nêu gương cán bộ đảng viên",
      "Củng cố niềm tin nhân dân – nền tảng sức mạnh của Đảng",
    ],
    coreTheories: [
      "Tư tưởng xây dựng Đảng cầm quyền theo Hồ Chí Minh",
      "Nguyên tắc tập trung dân chủ và tự phê bình, phê bình",
      "Đảng vừa lãnh đạo, vừa là đầy tớ trung thành của nhân dân",
      "Chống suy thoái, 'tự diễn biến', 'tự chuyển hóa'",
      "Niềm tin nhân dân quyết định sự tồn vong của Đảng",
    ],
    application: [
      "Vận dụng trong kinh tế thị trường định hướng XHCN",
      "Đẩy mạnh chống tham nhũng, tiêu cực không vùng cấm",
      "Phát huy dân chủ cơ sở, lắng nghe nhân dân",
      "Nêu gương người đứng đầu, cán bộ đảng viên",
      "Củng cố đại đoàn kết toàn dân tộc",
    ],
    timeline: [
      { year: "1945", note: "Sau Cách mạng Tháng Tám: Đảng phải gần dân, vì dân" },
      { year: "1952", note: "Cảnh báo quan liêu, tham ô trong Đảng cầm quyền" },
      { year: "1969", note: "Di chúc: Đảng phải trong sạch, xứng đáng là đầy tớ nhân dân" },
      { year: "Hiện nay", note: "Chỉnh đốn Đảng, học tập Bác để giữ vững niềm tin nhân dân" },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-section-index") || "0", 10);
            setVisibleSections((prev) => prev.includes(index) ? prev : [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [chapterSections]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (section: ChapterSection) => {
    setSelectedSection(section);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSection(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20 font-sans">
      {/* Hero Section - Trang nghiêm hơn */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tư tưởng Hồ Chí Minh
            <span className="block text-yellow-300 mt-2">Về Xây dựng & Chỉnh đốn Đảng Cầm Quyền</span>
          </h1>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            Đảng phải trong sạch, vững mạnh, gắn bó máu thịt với nhân dân. Niềm tin của nhân dân là yếu tố quyết định sự tồn vong của Đảng.
          </p>

          {/* Hình ảnh minh họa Bác Hồ & cờ Đảng */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
            <img 
              src="/images/timeline/pre1.jpg" 
              alt="Chân dung Hồ Chí Minh" 
              className="w-64 h-80 object-cover rounded-lg shadow-2xl border-4 border-yellow-400"
            />
            <img 
              src="/images/timeline/pre2.webp" 
              alt="Biểu tượng búa liềm Đảng Cộng sản Việt Nam" 
              className="w-64 h-80 object-cover rounded-lg shadow-2xl border-4 border-yellow-400"
            />
          </div>

          {/* Key Themes */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {hcmOverview.keyThemes.map((theme, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-yellow-500 text-red-900 rounded-full text-base font-semibold shadow-md"
              >
                {theme}
              </span>
            ))}
          </div>

          {/* Quote xoay vòng */}
          <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-yellow-400 shadow-xl">
            <p className="text-2xl font-medium italic text-yellow-100">
              "{inspirationalQuotes[currentQuoteIndex]}"
            </p>
            <p className="text-right text-lg text-white mt-4">
              — Hồ Chí Minh
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Nội Dung Cốt Lõi Tư tưởng Hồ Chí Minh
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Theories */}
            <div className="bg-red-50 p-8 rounded-2xl shadow-lg border border-red-200">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                1
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                Nền Tảng Lý Luận
              </h3>
              <ul className="space-y-4 text-gray-800">
                {hcmOverview.coreTheories.map((t, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg border border-yellow-200">
              <div className="w-16 h-16 bg-yellow-500 text-red-900 rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                2
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                Ứng Dụng Thực Tiễn
              </h3>
              <ul className="space-y-4 text-gray-800">
                {hcmOverview.application.map((a, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-yellow-600 mr-3 text-xl">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                Dòng Thời Gian
              </h3>
              <div className="space-y-6 text-gray-800">
                {hcmOverview.timeline.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="font-bold text-red-600 min-w-[80px]">{item.year}:</span>
                    <span>{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-6">
            Các Chương Chi Tiết
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto text-lg">
            Khám phá sâu sắc tư tưởng Hồ Chí Minh về xây dựng, chỉnh đốn Đảng cầm quyền, nhận diện nguy cơ mất lòng tin và giải pháp củng cố niềm tin nhân dân.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapterSections.map((section, index) => (
              <div
                key={section.id}
                data-section-index={index}
                onClick={() => openModal(section)}
                className={`section-card group bg-white rounded-2xl shadow-lg border border-red-200 p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-red-500 hover:-translate-y-2 ${
                  visibleSections.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-red-600">
                    {String(section.id).padStart(2, "0")}
                  </span>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-red-900 mb-4 line-clamp-2 group-hover:text-red-700 transition-colors">
                  {section.title}
                </h3>

                <p className="text-gray-700 text-base line-clamp-4 mb-6 leading-relaxed">
                  {section.content.replace(/[#*>]/g, "").substring(0, 220).trim()}...
                </p>

                <button className="text-red-600 hover:text-red-800 font-semibold text-base flex items-center transition-colors">
                  Đọc chi tiết
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedSection?.title || ""}
      >
        {selectedSection && (
          <div className="prose prose-lg max-w-none text-gray-900 prose-headings:text-red-800 prose-a:text-red-600">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {selectedSection.content}
            </ReactMarkdown>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PresentationPage;