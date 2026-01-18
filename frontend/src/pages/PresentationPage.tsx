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
    "Đảng ta là Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng. - Hồ Chí Minh",
    "Một Đảng mà giấu giếm khuyết điểm của mình là một Đảng hỏng. - Hồ Chí Minh",
    "Mất lòng tin của dân là mất tất cả. - Hồ Chí Minh",
    "Cán bộ là cái gốc của mọi công việc. - Hồ Chí Minh",
    "Tham ô, lãng phí, quan liêu là giặc nội xâm. - Hồ Chí Minh",
  ];

  const overview = {
    principles: [
      "Lấy dân làm gốc, mọi đường lối đều vì lợi ích nhân dân",
      "Đảng phải thường xuyên tự chỉnh đốn, tự phê bình",
      "Giữ vững đạo đức cách mạng, chống chủ nghĩa cá nhân",
      "Cán bộ phải gần dân, hiểu dân, trọng dân",
      "Quyền lực phải được kiểm soát chặt chẽ",
    ],
    risks: [
      "Quan liêu, xa rời quần chúng",
      "Tham nhũng, lợi ích nhóm",
      "Suy thoái tư tưởng chính trị",
      "Tha hóa quyền lực",
      "Hình thức, nói không đi đôi với làm",
    ],
    solutions: [
      "Tăng cường kiểm tra, giám sát, kỷ luật Đảng",
      "Đẩy mạnh đấu tranh phòng chống tham nhũng",
      "Phát huy dân chủ, lắng nghe nhân dân",
      "Nêu gương của cán bộ lãnh đạo",
      "Xây dựng Đảng trong sạch, vững mạnh toàn diện",
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-section-index") || "0",
              10
            );
            setVisibleSections((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".section-card")
      .forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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
    <div className="min-h-screen bg-gradient-hero pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Xây Dựng Đảng Cầm Quyền
            <span className="block text-marx-red mt-2">
              Giữ Vững Niềm Tin Nhân Dân
            </span>
          </h1>

          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Vận dụng tư tưởng Hồ Chí Minh để nhận diện <strong>nguy cơ suy thoái</strong>,
            từ đó đề xuất <strong>nguyên tắc và giải pháp</strong> nhằm xây dựng Đảng
            trong sạch, vững mạnh, xứng đáng với niềm tin của nhân dân.
          </p>

          {/* Principles */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {overview.principles.map((p, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-marx-red-light text-marx-red rounded-full text-sm font-semibold border border-marx-red-light"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Quote */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-marx-red-light to-lenin-yellow-light p-8 rounded-2xl border shadow-lg">
            <p className="text-xl md:text-2xl font-medium text-marx-red italic">
              "{inspirationalQuotes[currentQuoteIndex]}"
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gradient-to-b from-lenin-yellow-light to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nguy Cơ & Giải Pháp
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-bold mb-4">Nguyên Tắc</h3>
              <ul className="space-y-2">
                {overview.principles.map((i, idx) => (
                  <li key={idx}>• {i}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-bold mb-4">Nguy Cơ</h3>
              <ul className="space-y-2">
                {overview.risks.map((i, idx) => (
                  <li key={idx}>• {i}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-bold mb-4">Giải Pháp</h3>
              <ul className="space-y-2">
                {overview.solutions.map((i, idx) => (
                  <li key={idx}>• {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nội Dung Phân Tích Chi Tiết
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapterSections.map((section, index) => (
              <div
                key={section.id}
                data-section-index={index}
                onClick={() => openModal(section)}
                className={`section-card bg-white p-6 rounded-2xl shadow-card cursor-pointer transition-all ${
                  visibleSections.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {section.content.substring(0, 120)}...
                </p>
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
          <div className="prose max-w-none">
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
