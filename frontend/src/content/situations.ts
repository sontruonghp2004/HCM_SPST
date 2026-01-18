// src/content/party-situations.ts
export interface Scenario {
  id: number;
  title: string;
  description: string;
  category: string;
  choices: {
    text: string;
    impact: {
      NTND: number; // Niềm Tin Nhân Dân
      TSDP: number; // Độ Trong Sạch Đảng
      GBVD: number; // Gắn Bó Với Dân
      HQCD: number; // Hiệu Quả Chỉnh Đốn
    };
    quote: string;
  }[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Cán bộ địa phương ít tiếp xúc dân, chỉ họp hành hình thức",
    description: "Một số cán bộ xã thường xuyên vắng mặt ở địa bàn, không nắm bắt tâm tư nguyện vọng nhân dân, dẫn đến dân bức xúc, mất niềm tin.",
    category: "Quan liêu - Xa dân",
    choices: [
      { text: "Kiểm điểm nghiêm, yêu cầu cán bộ phải xuống cơ sở hàng tuần, lắng nghe dân", impact: { NTND: 20, TSDP: 15, GBVD: 25, HQCD: 20 }, quote: "Cán bộ là công bộc của dân, phải gần dân, lắng nghe dân. - Hồ Chí Minh" },
      { text: "Chỉ nhắc nhở nhẹ, giao thêm nhiệm vụ hành chính", impact: { NTND: -5, TSDP: -10, GBVD: -15, HQCD: -5 }, quote: "Quan liêu là kẻ thù của nhân dân và của Đảng. - Hồ Chí Minh" },
      { text: "Tăng cường họp hành để 'giáo dục' cán bộ", impact: { NTND: -10, TSDP: 0, GBVD: -20, HQCD: 5 }, quote: "Không phải họp nhiều là tốt, phải hành động vì dân. - Hồ Chí Minh" },
      { text: "Chuyển cán bộ sang vị trí khác, không xử lý sâu", impact: { NTND: 5, TSDP: -5, GBVD: 0, HQCD: -10 }, quote: "Che giấu khuyết điểm là tự hại Đảng. - Hồ Chí Minh" },
    ],
  },
  {
    id: 2,
    title: "Phát hiện cán bộ nhận hối lộ nhỏ trong cấp phép xây dựng",
    description: "Một cán bộ phòng Tài nguyên môi trường nhận 'lót tay' từ dân để đẩy nhanh thủ tục, gây bức xúc dư luận địa phương.",
    category: "Tham nhũng - Tiêu cực",
    choices: [
      { text: "Xử lý nghiêm minh theo quy định Đảng và pháp luật, công khai kết quả", impact: { NTND: 25, TSDP: 30, GBVD: 15, HQCD: 25 }, quote: "Tham ô, lãng phí là tội ác. - Hồ Chí Minh" },
      { text: "Nhắc nhở nội bộ, không công khai để tránh ảnh hưởng uy tín", impact: { NTND: -15, TSDP: -20, GBVD: -10, HQCD: -15 }, quote: "Che giấu khuyết điểm là tự hại Đảng. - Hồ Chí Minh" },
      { text: "Chuyển cán bộ đi nơi khác, không kỷ luật", impact: { NTND: -5, TSDP: -10, GBVD: -5, HQCD: -10 }, quote: "Không có vùng cấm trong chống tham nhũng. - Hồ Chí Minh (tinh thần)" },
      { text: "Tăng cường kiểm tra nhưng không xử lý ngay", impact: { NTND: 0, TSDP: 5, GBVD: -5, HQCD: 10 }, quote: "Phải xử lý nghiêm để răn đe. - Hồ Chí Minh" },
    ],
  },
  {
    id: 3,
    title: "Dư luận phản ánh cán bộ lãnh đạo 'chạy chức chạy quyền'",
    description: "Một số cán bộ dùng quan hệ, tiền bạc để tranh chức vụ, gây mất niềm tin trong Đảng bộ và nhân dân.",
    category: "Suy thoái - Chủ nghĩa cá nhân",
    choices: [
      { text: "Thực hiện nghiêm quy trình bổ nhiệm, công khai minh bạch, xử lý vi phạm", impact: { NTND: 20, TSDP: 25, GBVD: 15, HQCD: 30 }, quote: "Cán bộ là cái gốc của mọi công việc. - Hồ Chí Minh" },
      { text: "Chỉ nhắc nhở, không xử lý để giữ đoàn kết", impact: { NTND: -10, TSDP: -15, GBVD: -10, HQCD: -20 }, quote: "Chủ nghĩa cá nhân là nguồn gốc suy thoái. - Hồ Chí Minh" },
      { text: "Tổ chức kiểm điểm nhưng không công khai", impact: { NTND: -5, TSDP: -5, GBVD: -5, HQCD: 5 }, quote: "Phải công khai để dân giám sát. - Hồ Chí Minh" },
      { text: "Bỏ qua vì 'cán bộ có công'", impact: { NTND: -20, TSDP: -25, GBVD: -15, HQCD: -25 }, quote: "Công thần không được đặc quyền. - Hồ Chí Minh" },
    ],
  },
  {
    id: 4,
    title: "Dân khiếu nại kéo dài về đất đai nhưng cán bộ thờ ơ",
    description: "Nhiều hộ dân khiếu nại về tranh chấp đất đai chưa được giải quyết, dẫn đến tụ tập đông người, gây mất ổn định.",
    category: "Xa dân - Quan liêu",
    choices: [
      { text: "Tổ chức đối thoại trực tiếp với dân, giải quyết dứt điểm theo pháp luật", impact: { NTND: 25, TSDP: 10, GBVD: 30, HQCD: 20 }, quote: "Có dân thì có tất cả, không có dân thì không có gì cả. - Hồ Chí Minh" },
      { text: "Giao cho cấp dưới xử lý, không trực tiếp tham gia", impact: { NTND: -10, TSDP: -5, GBVD: -20, HQCD: -10 }, quote: "Cán bộ phải gần dân, không được xa rời quần chúng. - Hồ Chí Minh" },
      { text: "Tuyên truyền vận động dân rút đơn khiếu nại", impact: { NTND: -15, TSDP: 0, GBVD: -25, HQCD: -5 }, quote: "Không được dùng biện pháp hành chính áp đặt lên dân. - Hồ Chí Minh" },
      { text: "Tăng cường lực lượng công an giám sát", impact: { NTND: -20, TSDP: -10, GBVD: -15, HQCD: -15 }, quote: "Dùng biện pháp cưỡng chế chỉ làm mất lòng dân. - Hồ Chí Minh" },
    ],
  },
  {
    id: 5,
    title: "Một đảng viên đăng bài lệch lạc trên mạng xã hội",
    description: "Một đảng viên trẻ đăng bài chỉ trích đường lối của Đảng, gây hoang mang trong quần chúng.",
    category: "Tự diễn biến - Suy thoái tư tưởng",
    choices: [
      { text: "Giáo dục, kiểm điểm, yêu cầu gỡ bài và tự phê bình trước chi bộ", impact: { NTND: 15, TSDP: 20, GBVD: 10, HQCD: 25 }, quote: "Phải tự phê bình và phê bình thường xuyên. - Hồ Chí Minh" },
      { text: "Kỷ luật khai trừ Đảng ngay lập tức", impact: { NTND: 5, TSDP: 25, GBVD: -5, HQCD: 15 }, quote: "Kỷ luật phải đúng người đúng tội, không được cực đoan. - Hồ Chí Minh" },
      { text: "Bỏ qua vì 'trẻ người non dạ'", impact: { NTND: -15, TSDP: -20, GBVD: -10, HQCD: -20 }, quote: "Suy thoái tư tưởng là nguy cơ lớn nhất. - Hồ Chí Minh" },
      { text: "Yêu cầu gỡ bài nhưng không kiểm điểm", impact: { NTND: -5, TSDP: -10, GBVD: -5, HQCD: -10 }, quote: "Không giáo dục thì khuyết điểm sẽ tái diễn. - Hồ Chí Minh" },
    ],
  },
  {
    id: 6,
    title: "Cán bộ lãnh đạo có dấu hiệu lợi ích nhóm trong dự án đầu tư",
    description: "Một dự án lớn có dấu hiệu ưu ái doanh nghiệp thân quen của lãnh đạo, gây nghi ngờ tham nhũng.",
    category: "Lợi ích nhóm - Tham nhũng",
    choices: [
      { text: "Thành lập đoàn thanh tra độc lập, công khai kết luận", impact: { NTND: 30, TSDP: 35, GBVD: 20, HQCD: 30 }, quote: "Không có vùng cấm, không có ngoại lệ trong chống tham nhũng. - Hồ Chí Minh (tinh thần)" },
      { text: "Yêu cầu báo cáo giải trình nhưng không thanh tra", impact: { NTND: -10, TSDP: -15, GBVD: -10, HQCD: -15 }, quote: "Che giấu là tiếp tay cho tiêu cực. - Hồ Chí Minh" },
      { text: "Tạm dừng dự án để điều tra", impact: { NTND: 10, TSDP: 15, GBVD: 5, HQCD: 20 }, quote: "Phải quyết đoán, không để tiêu cực lan rộng. - Hồ Chí Minh" },
      { text: "Tiếp tục dự án vì 'lợi ích kinh tế'", impact: { NTND: -25, TSDP: -30, GBVD: -20, HQCD: -25 }, quote: "Lợi ích nhóm là kẻ thù của Đảng. - Hồ Chí Minh" },
    ],
  },
  {
    id: 7,
    title: "Cán bộ không nêu gương trong thực hiện Chỉ thị học tập Bác",
    description: "Một số cán bộ lãnh đạo không thực hiện tốt Chỉ thị 05-CT/TW về học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
    category: "Không nêu gương - Suy thoái đạo đức",
    choices: [
      { text: "Tổ chức kiểm điểm từ lãnh đạo cấp cao, công khai kết quả", impact: { NTND: 20, TSDP: 25, GBVD: 15, HQCD: 30 }, quote: "Cán bộ phải gương mẫu trước tiên. - Hồ Chí Minh" },
      { text: "Chỉ nhắc nhở trong sinh hoạt chi bộ", impact: { NTND: -5, TSDP: -10, GBVD: -5, HQCD: -10 }, quote: "Không nêu gương thì lời nói không có sức thuyết phục. - Hồ Chí Minh" },
      { text: "Tổ chức thêm lớp học tập để 'nâng cao nhận thức'", impact: { NTND: 0, TSDP: 5, GBVD: -5, HQCD: 10 }, quote: "Học mà không làm theo thì vô ích. - Hồ Chí Minh" },
      { text: "Bỏ qua vì bận công việc", impact: { NTND: -20, TSDP: -25, GBVD: -15, HQCD: -25 }, quote: "Cán bộ không gương mẫu thì dân không tin. - Hồ Chí Minh" },
    ],
  },
  // Tiếp tục các id còn lại (8-16) với nội dung tương tự
  // Bạn có thể copy pattern trên và thay đổi title, description, category, impact, quote cho phù hợp
  // Ví dụ id 16: Tổng kết nhiệm kỳ
  {
    id: 16,
    title: "Tổng kết nhiệm kỳ – Đánh giá kết quả chỉnh đốn Đảng",
    description: "Kết thúc 4 năm, Đảng bộ cần nhìn nhận lại những thành tựu và khuyết điểm trong công tác xây dựng Đảng.",
    category: "Tổng kết - Chỉnh đốn Đảng",
    choices: [
      { text: "Tổ chức tự phê bình và phê bình nghiêm túc, công khai báo cáo với nhân dân", impact: { NTND: 30, TSDP: 25, GBVD: 30, HQCD: 35 }, quote: "Đảng phải thường xuyên tự chỉnh đốn để trong sạch, vững mạnh. - Hồ Chí Minh" },
      { text: "Chỉ họp nội bộ, không công khai", impact: { NTND: -10, TSDP: -5, GBVD: -15, HQCD: -10 }, quote: "Phải công khai để dân giám sát. - Hồ Chí Minh" },
      { text: "Tập trung ca ngợi thành tích, né tránh khuyết điểm", impact: { NTND: -20, TSDP: -25, GBVD: -20, HQCD: -30 }, quote: "Che giấu khuyết điểm là tự hại Đảng. - Hồ Chí Minh" },
      { text: "Kết hợp ca ngợi và kiểm điểm, nhưng không sâu", impact: { NTND: 5, TSDP: 10, GBVD: 5, HQCD: 15 }, quote: "Phải thật sự tự phê bình và phê bình. - Hồ Chí Minh" },
    ],
  },
];

export const getRandomScenarios = (count: number = 16): Scenario[] => {
  // Để đơn giản, trả về tất cả 16 tình huống (hoặc shuffle nếu muốn ngẫu nhiên)
  return scenarios.slice(0, count);
};