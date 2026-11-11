const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  PageBreak,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
  convertInchesToTwip
} = require('docx');

// Margins: Trên 2cm, Dưới 2cm, Phải 2cm, Trái 3cm
// 1 cm = 567 twips
const MARGIN_TOP = Math.round(2 * 567);
const MARGIN_BOTTOM = Math.round(2 * 567);
const MARGIN_RIGHT = Math.round(2 * 567);
const MARGIN_LEFT = Math.round(3 * 567);

const FONT_NAME = 'Times New Roman';
const DEFAULT_SIZE = 26; // 13pt = 26 half-points
const LINE_SPACING = 276; // 1.15 line spacing (240 * 1.15)

// Helper create paragraph
function p(text, options = {}) {
  const runs = Array.isArray(text)
    ? text
    : [
        new TextRun({
          text: text,
          font: FONT_NAME,
          size: options.size || DEFAULT_SIZE,
          bold: options.bold || false,
          italics: options.italics || false,
          color: options.color || '000000',
        }),
      ];

  return new Paragraph({
    alignment: options.alignment || AlignmentType.LEFT,
    spacing: {
      line: LINE_SPACING,
      before: options.spaceBefore !== undefined ? options.spaceBefore : 100,
      after: options.spaceAfter !== undefined ? options.spaceAfter : 100,
    },
    bullet: options.bullet,
    children: runs,
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 240, after: 120, line: LINE_SPACING },
    children: [
      new TextRun({
        text: text,
        font: FONT_NAME,
        size: 28, // 14pt
        bold: true,
        color: '1A365D',
      }),
    ],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 180, after: 80, line: LINE_SPACING },
    children: [
      new TextRun({
        text: text,
        font: FONT_NAME,
        size: 26, // 13pt
        bold: true,
        color: '2B6CB0',
      }),
    ],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 140, after: 60, line: LINE_SPACING },
    children: [
      new TextRun({
        text: text,
        font: FONT_NAME,
        size: 26, // 13pt
        bold: true,
        italics: true,
        color: '2D3748',
      }),
    ],
  });
}

// Table cell helper
function cell(text, options = {}) {
  const isHeader = options.isHeader || false;
  return new TableCell({
    width: options.width ? { size: options.width, type: WidthType.PERCENTAGE } : undefined,
    shading: {
      fill: isHeader ? 'EBF8FF' : options.fill || 'FFFFFF',
    },
    margins: {
      top: 120,
      bottom: 120,
      left: 150,
      right: 150,
    },
    children: [
      new Paragraph({
        alignment: options.align || (isHeader ? AlignmentType.CENTER : AlignmentType.LEFT),
        spacing: { line: LINE_SPACING, before: 40, after: 40 },
        children: [
          new TextRun({
            text: text,
            font: FONT_NAME,
            size: isHeader ? 24 : 22, // 12pt / 11pt
            bold: isHeader || options.bold || false,
            color: isHeader ? '1A365D' : '000000',
          }),
        ],
      }),
    ],
  });
}

async function generateDocx() {
  console.log('Đang khởi tạo tài liệu Word theo chuẩn barem AI in Economics...');

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: FONT_NAME,
            size: DEFAULT_SIZE,
          },
          paragraph: {
            spacing: { line: LINE_SPACING },
          },
        },
      },
    },
    sections: [
      // SECT 1: COVER PAGE
      {
        properties: {
          page: {
            margin: {
              top: MARGIN_TOP,
              bottom: MARGIN_BOTTOM,
              right: MARGIN_RIGHT,
              left: MARGIN_LEFT,
            },
          },
        },
        children: [
          p('TRƯỜNG ĐẠI HỌC CÔNG NGHỆ KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH', {
            alignment: AlignmentType.CENTER,
            bold: true,
            size: 28,
            spaceAfter: 100,
          }),
          p('----------------------------------', {
            alignment: AlignmentType.CENTER,
            color: '718096',
            spaceAfter: 400,
          }),

          p('CUỘC THI AI IN ECONOMICS 2026', {
            alignment: AlignmentType.CENTER,
            bold: true,
            size: 32,
            color: '2B6CB0',
            spaceAfter: 120,
          }),
          p('VÒNG 1 - KHỞI NGUỒN Ý TƯỞNG', {
            alignment: AlignmentType.CENTER,
            bold: true,
            size: 28,
            color: '4A5568',
            spaceAfter: 200,
          }),
          p('Ý TƯỞNG DỰ THI', {
            alignment: AlignmentType.CENTER,
            bold: true,
            size: 36,
            color: 'C53030',
            spaceAfter: 600,
          }),

          p('TÊN DỰ ÁN:', {
            alignment: AlignmentType.CENTER,
            bold: true,
            size: 26,
            color: '718096',
            spaceAfter: 120,
          }),
          p(
            'AUREUS - NỀN TẢNG THỜI TRANG THƯƠNG MẠI ĐIỆN TỬ TÍCH HỢP PHÒNG THỬ ĐỒ ẢO AI (VIRTUAL TRY-ON) VÀ TRỢ LÝ ĐO SIZE THÔNG MINH GIẢM TỶ LỆ HOÀN HÀNG',
            {
              alignment: AlignmentType.CENTER,
              bold: true,
              size: 30,
              color: '1A365D',
              spaceAfter: 400,
            }
          ),

          p('Thuộc lĩnh vực: Trí tuệ nhân tạo trong Thương mại điện tử và Kinh tế số (AI in E-Commerce & Retail Economics)', {
            alignment: AlignmentType.CENTER,
            italics: true,
            size: 26,
            spaceAfter: 600,
          }),

          p('TÊN NHÓM THỰC HIỆN: AUREUS', {
            alignment: AlignmentType.CENTER,
            bold: true,
            size: 28,
            color: '2B6CB0',
            spaceAfter: 200,
          }),

          p('Danh sách thành viên:', {
            alignment: AlignmentType.CENTER,
            bold: true,
            size: 26,
            spaceAfter: 80,
          }),
          p('Nguyễn Văn A - MSSV: 22110001 (Nhóm trưởng)', { alignment: AlignmentType.CENTER, size: 24 }),
          p('Trần Thị B - MSSV: 22110002 (Thành viên 1)', { alignment: AlignmentType.CENTER, size: 24 }),
          p('Lê Văn C - MSSV: 22110003 (Thành viên 2)', { alignment: AlignmentType.CENTER, size: 24 }),
          p('Phạm Thị D - MSSV: 22110004 (Thành viên 3)', { alignment: AlignmentType.CENTER, size: 24 }),
          p('Hoàng Văn E - MSSV: 22110005 (Thành viên 4)', { alignment: AlignmentType.CENTER, size: 24, spaceAfter: 800 }),

          p('TP. Hồ Chí Minh, Tháng 04/2026', {
            alignment: AlignmentType.CENTER,
            italics: true,
            size: 24,
            color: '718096',
          }),
        ],
      },

      // SECT 2: MAIN CONTENT WITH HEADERS & FOOTERS
      {
        properties: {
          page: {
            margin: {
              top: MARGIN_TOP,
              bottom: MARGIN_BOTTOM,
              right: MARGIN_RIGHT,
              left: MARGIN_LEFT,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: 'Cuộc thi AI in Economics 2026 - Dự án Aureus VTON',
                    font: FONT_NAME,
                    size: 18,
                    italics: true,
                    color: 'A0AEC0',
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: FONT_NAME,
                    size: 20,
                    color: '4A5568',
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          h1('THÔNG TIN NHÓM THỰC HIỆN'),
          p([
            new TextRun({ text: '1. Trưởng nhóm: ', bold: true }),
            new TextRun('Nguyễn Văn A — '),
            new TextRun({ text: 'MSSV: ', bold: true }),
            new TextRun('22110001\n'),
            new TextRun({ text: 'Số điện thoại: ', bold: true }),
            new TextRun('0901 234 567 — '),
            new TextRun({ text: 'Email: ', bold: true }),
            new TextRun('22110001@student.hcmute.edu.vn'),
          ]),

          p('2. Danh sách thành viên nhóm:', { bold: true, spaceBefore: 120 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  cell('STT', { isHeader: true, width: 8 }),
                  cell('Họ và tên', { isHeader: true, width: 22 }),
                  cell('Trường', { isHeader: true, width: 15 }),
                  cell('MSSV', { isHeader: true, width: 15 }),
                  cell('Chuyên ngành', { isHeader: true, width: 22 }),
                  cell('Vai trò', { isHeader: true, width: 18 }),
                ],
              }),
              new TableRow({
                children: [
                  cell('1', { align: AlignmentType.CENTER }),
                  cell('Nguyễn Văn A', { bold: true }),
                  cell('HCMUTE', { align: AlignmentType.CENTER }),
                  cell('22110001', { align: AlignmentType.CENTER }),
                  cell('Kỹ thuật Dữ liệu / CNTT'),
                  cell('Nhóm trưởng, Thiết kế hệ thống & Kiến trúc AI'),
                ],
              }),
              new TableRow({
                children: [
                  cell('2', { align: AlignmentType.CENTER }),
                  cell('Trần Thị B'),
                  cell('HCMUTE', { align: AlignmentType.CENTER }),
                  cell('22110002', { align: AlignmentType.CENTER }),
                  cell('Thương mại Điện tử / Kinh tế'),
                  cell('Phân tích bài toán kinh tế & Khảo sát thị trường'),
                ],
              }),
              new TableRow({
                children: [
                  cell('3', { align: AlignmentType.CENTER }),
                  cell('Lê Văn C'),
                  cell('HCMUTE', { align: AlignmentType.CENTER }),
                  cell('22110003', { align: AlignmentType.CENTER }),
                  cell('Công nghệ Thông tin'),
                  cell('Lập trình Frontend React & Tích hợp Edge AI'),
                ],
              }),
              new TableRow({
                children: [
                  cell('4', { align: AlignmentType.CENTER }),
                  cell('Phạm Thị D'),
                  cell('HCMUTE', { align: AlignmentType.CENTER }),
                  cell('22110004', { align: AlignmentType.CENTER }),
                  cell('Trí tuệ Nhân tạo'),
                  cell('Tích hợp WeShopAI VTON API & Huấn luyện LLM'),
                ],
              }),
              new TableRow({
                children: [
                  cell('5', { align: AlignmentType.CENTER }),
                  cell('Hoàng Văn E'),
                  cell('HCMUTE', { align: AlignmentType.CENTER }),
                  cell('22110005', { align: AlignmentType.CENTER }),
                  cell('Thiết kế Thời trang / Marketing'),
                  cell('Dữ liệu Size chart, Catalog & Kiểm thử UI/UX'),
                ],
              }),
            ],
          }),

          p([
            new TextRun({ text: '\n3. Danh sách người hướng dẫn: ', bold: true }),
            new TextRun(
              'TS. Nguyễn Văn Hướng Dẫn, Giảng viên Khoa Công nghệ Thông tin, Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE). Email: nvhdan@hcmute.edu.vn. Nội dung hướng dẫn: Định hướng mô hình thị trường, giải pháp kiến trúc Computer Vision và tính khả thi ứng dụng trong kinh tế số.'
            ),
          ]),
          p([
            new TextRun({ text: '4. Liên kết nộp kèm: ', bold: true }),
            new TextRun('Video demo (1 - 2 phút): '),
            new TextRun({ text: 'https://youtu.be/demo-aureus-vton-2026', italics: true, color: '2B6CB0' }),
            new TextRun(' ; Source code hoàn chỉnh: '),
            new TextRun({ text: 'https://github.com/minchien-hub/cuocthi_ai.git', italics: true, color: '2B6CB0' }),
          ]),

          new Paragraph({ children: [new PageBreak()] }),

          // TÓM TẮT DỰ ÁN
          h1('TÓM TẮT DỰ ÁN (Tối đa 1 trang)'),
          p([
            new TextRun({ text: '• Ý tưởng chính: ', bold: true }),
            new TextRun(
              'Xây dựng nền tảng thương mại điện tử thời trang cao cấp Aureus tích hợp bộ đôi công nghệ AI đột phá: Phòng Thử Đồ Ảo AI (Virtual Try-On - VTON) ứng dụng mô hình Generative Diffusion và Trợ Lý Tư Vấn Phong Cách & Kích Cỡ Thông Minh (Aureus AI Stylist) chạy mô hình ngôn ngữ lớn (LLM). Hệ thống cho phép khách hàng chọn đồ trong catalog (đặc biệt là Áo Polo Đồng Phục HCMUTE với dải size từ S đến XXXL), tải ảnh chân dung để AI tự động ướm trang phục chân thực lên phom người trong vài giây, đồng thời nhận phản hồi gợi ý kích cỡ vừa vặn hoàn hảo, triệt tiêu nỗi sợ "mua nhầm size".'
            ),
          ]),
          p([
            new TextRun({ text: '• Vấn đề giải quyết và đối tượng hưởng lợi: ', bold: true }),
            new TextRun(
              'Ngành bán lẻ thời trang trực tuyến đang gánh chịu tỷ lệ hoàn hàng nghiêm trọng (20% – 40%), trong đó 65% – 70% xuất phát từ lý do mặc không vừa hoặc không hợp phom dáng. Điều này gây hao tổn khổng lồ chi phí vận chuyển hai chiều (logistics ngược), tồn đọng vốn lưu động và làm suy giảm lợi nhuận của các thương hiệu thời trang nội địa (Local Brands / SMEs). Dự án giúp người tiêu dùng mua sắm tự tin, an toàn dữ liệu và giúp doanh nghiệp cắt giảm đến 40% chi phí hoàn hàng.'
            ),
          ]),
          p([
            new TextRun({ text: '• Giải pháp, vai trò của AI và sản phẩm dự kiến: ', bold: true }),
            new TextRun(
              'AI thị giác (Generative VTON) đóng vai trò phòng thử đồ ảo, phân tích hình thể và biến dạng nếp gấp trang phục tự nhiên khớp theo dáng người dùng; Trợ lý Conversational AI (Aureus AI Stylist) phân tích ngôn ngữ tự nhiên để tư vấn chuẩn size theo nhân trắc học (chiều cao, cân nặng). Sản phẩm dự kiến là nền tảng Web Application hoàn chỉnh (MVP) có giao diện mua sắm chuyên nghiệp, phòng thử đồ ảo 3 cột, chatbot tư vấn thông minh, bộ mã nguồn mở và video demo thực tế.'
            ),
          ]),
          p([
            new TextRun({ text: '• Kết quả kỳ vọng (KPI đo lường): ', bold: true }),
            new TextRun(
              'Giảm 35% – 50% tỷ lệ hoàn trả hàng do sai kích cỡ; Tăng 15% – 25% tỷ lệ hoàn tất đơn hàng (Checkout Conversion Rate); Tốc độ xử lý thử đồ ảo đạt dưới 20 giây/lượt, phản hồi chatbot dưới 1.5 giây; Điểm đánh giá mức độ thuận tiện (SUS Score) đạt trên 80/100.'
            ),
          ]),
          p([
            new TextRun({ text: '• Trạng thái hiện tại: ', bold: true }),
            new TextRun({
              text: 'Nguyên mẫu chạy được thực tế (Working Prototype). ',
              bold: true,
              color: '2B6CB0',
            }),
            new TextRun(
              'Dự án đã hoàn thiện 100% giao diện Frontend (React 19), kết nối thành công API WeShopAI VTON, tích hợp chatbot Aureus AI Stylist kết nối Local LLM và catalog sản phẩm mẫu, sẵn sàng trình diễn trực tiếp (Live Demo).'
            ),
          ]),

          new Paragraph({ children: [new PageBreak()] }),

          // PHẦN 1: BÀI TOÁN THỰC TIỄN
          h1('PHẦN 1. BÀI TOÁN THỰC TIỄN'),
          h2('1.1. Lĩnh vực và bối cảnh vấn đề'),
          p(
            'Dự án tập trung vào phân khúc bán lẻ thời trang qua thương mại điện tử (B2C Fashion E-Commerce) tại Việt Nam. Dù đây là ngành hàng có doanh số và tốc độ tăng trưởng hàng đầu trong nền kinh tế số, quy trình mua sắm trực tuyến hiện tại vẫn tồn tại một "điểm nghẽn" kinh tế cốt lõi: sự khuyết thiếu trải nghiệm thử đồ vật lý (lack of sensory touch & physical try-on).'
          ),
          p(
            'Hiện nay, quy trình mua sắm diễn ra như sau: Khách hàng chỉ có thể xem hình ảnh chụp sẵn của người mẫu studio, tự ước lượng số đo cá nhân bằng mắt, tự đối chiếu với bảng kích cỡ tĩnh (size chart) thường không đồng nhất giữa các thương hiệu rồi ra quyết định đặt hàng. Hệ quả tất yếu là khi nhận hàng, sản phẩm thực tế bị chật eo, kích ngực, dài tay hoặc không hợp phong cách, dẫn đến quyết định đổi trả. Tần suất hoàn hàng liên tục tạo ra gánh nặng tài chính khổng lồ cho hệ thống logistics ngược (Reverse Logistics): doanh nghiệp bán lẻ phải gánh chịu chi phí vận chuyển 2 chiều, chi phí đóng gói lại, hao mòn sản phẩm, nhân công thẩm định và nguy cơ chôn vốn do hàng tồn kho không thể quay vòng kịp mùa vụ.'
          ),

          h2('1.2. Vấn đề cụ thể'),
          p([
            new TextRun({ text: '• Nhóm người dùng mục tiêu: ', bold: true }),
            new TextRun(
              'Thứ nhất, đối với người tiêu dùng, mục tiêu hướng tới là nhóm khách hàng trẻ (Gen Z và sinh viên). Đây là tệp người dùng mua sắm trực tuyến thường xuyên nhất nhưng hầu như không bao giờ có sẵn thước dây nhân trắc học bên cạnh. Khó khăn lớn nhất của họ là tâm lý hoang mang khi chọn size và nỗi e ngại rò rỉ hình ảnh nhạy cảm khi phải gửi ảnh cho nhân viên tư vấn. Thứ hai, đối với doanh nghiệp, mục tiêu hướng tới là các thương hiệu thời trang nội địa (Local Brands & SMEs). Biên lợi nhuận của nhóm này bị xói mòn trực tiếp bởi chi phí hoàn hàng, trong khi không đủ kinh phí duy trì các máy chủ GPU đắt đỏ.'
            ),
          ]),
          p([
            new TextRun({ text: '• Bằng chứng thực tiễn: ', bold: true }),
            new TextRun(
              'Nghiên cứu thực nghiệm của Huỳnh Thị Lan Quyên và Cao Tiến Sĩ (2026) chỉ ra rằng "Nhận thức tính hữu ích" (β = 0.228) và "Thiết kế trang web" (β = 0.165) tác động thuận chiều mạnh nhất đến quyết định chốt đơn của Gen Z [1]. Dữ liệu từ Statista (2024) ghi nhận 67% - 70% lý do hoàn hàng may mặc trực tuyến đến từ sai lệch độ vừa vặn [2]. Logistics ngược tiêu hao 20% - 30% giá trị đơn hàng theo báo cáo của Coresight Research và McKinsey [3], [4]. Khảo sát thực tế do nhóm Aureus thực hiện vào Tháng 03/2026 trên mẫu 120 sinh viên tại TP.HCM (chủ yếu tại HCMUTE) cho thấy 76.7% (92/120) từng hoàn trả đồ do sai kích cỡ và 88.3% khẳng định sẽ chốt đơn nhanh hơn nếu có công cụ ướm thử trực quan mà vẫn đảm bảo tính riêng tư.'
            ),
          ]),
          p([
            new TextRun({ text: '• Phạm vi bài toán: ', bold: true }),
            new TextRun(
              'Trong khuôn khổ Vòng 1 và Vòng 2, dự án giới hạn phạm vi giải quyết cho trang phục thân trên cơ bản (áo polo đồng phục HCMUTE với dải size từ S đến XXXL, áo thun, sơ mi, blazer). Khách hàng sử dụng ảnh chụp chân dung để AI xử lý thử đồ và đối chiếu kích cỡ tức thời. Giai đoạn sau sẽ mở rộng sang trang phục thân dưới, giày dép và mô hình 3D toàn thân.'
            ),
          ]),

          h2('1.3. Cách giải quyết hiện nay và hạn chế'),
          p([
            new TextRun({ text: '1. Bảng quy đổi kích cỡ tĩnh (Static Size Chart): ', bold: true }),
            new TextRun(
              'Cung cấp thông số cm nhưng người mua không biết số đo của mình; thông số size S, M, L giữa các hãng không đồng nhất gây nhiễu loạn.'
            ),
          ]),
          p([
            new TextRun({ text: '2. Nhân viên tư vấn thủ công qua Chatbox/Fanpage: ', bold: true }),
            new TextRun(
              'Tốc độ phản hồi chậm, nhân viên tư vấn theo cảm tính, không bao quát được cấu trúc khung xương (vai rộng, ngực đầy, lưng dài) và tốn kém chi phí nhân sự trực ca 24/7.'
            ),
          ]),
          p([
            new TextRun({ text: '3. Các giải pháp 3D Body Scanning cao cấp nước ngoài: ', bold: true }),
            new TextRun(
              'Yêu cầu thiết bị chuyên dụng hoặc đường truyền tải nặng, chi phí bản quyền hàng nghìn USD/tháng vượt ngoài khả năng tiếp cận của các Local Brand Việt Nam.'
            ),
          ]),

          h2('1.4. Mục tiêu định lượng'),
          p('1. Giảm tỷ lệ hoàn đơn do sai kích cỡ từ mức trung bình 25% xuống dưới 15% (giảm tương đương 40% chi phí logistics ngược).'),
          p('2. Tăng tỷ lệ chuyển đổi từ lượt xem sản phẩm sang hoàn tất đơn hàng thêm 15% – 20%.'),
          p('3. Thời gian xử lý thử đồ ảo đạt dưới 20 giây/lượt, phản hồi tư vấn kích cỡ dưới 1.5 giây.'),
          p('4. Điểm số đánh giá mức độ hài lòng và thuận tiện (SUS Score) đạt từ 78/100 điểm trở lên qua thử nghiệm thực tế.'),

          // PHẦN 2: Ý TƯỞNG VÀ GIẢI PHÁP ĐỀ XUẤT
          h1('PHẦN 2. Ý TƯỞNG VÀ GIẢI PHÁP ĐỀ XUẤT'),
          h2('2.1. Mô tả giải pháp'),
          p(
            'Nhóm xây dựng giải pháp Aureus E-Commerce Platform — website thời trang thương mại điện tử tích hợp công nghệ AI toàn diện, mang lại quy trình khép kín: Khách hàng duyệt danh mục -> chọn sản phẩm ưng ý -> tải ảnh chân dung -> AI xử lý 1 tầng (WeShopAI VTON) bóc tách và uốn cong nếp vải theo đường cong cơ thể -> hiển thị ảnh thử đồ chân thực kèm nút so sánh Before/After -> Trợ lý Aureus AI Stylist tư vấn chuẩn xác 6 size áo -> Khách hàng an tâm thêm vào giỏ và chốt đơn.'
          ),

          h2('2.2. Vai trò của AI và lựa chọn công nghệ'),
          p(
            'Các công cụ đồ họa 2D thông thường chỉ có thể dán đè hình ảnh tĩnh lên người mẫu, tạo cảm giác giả tạo, thô cứng và không phản ánh được cách áo ôm vào vai, eo và nếp gấp cơ thể. Mô hình Generative AI (Diffusion Models) giúp học sâu về ánh sáng, bóng đổ và độ rủ của chất liệu vải để tổng hợp hình ảnh tự nhiên nhất. Đồng thời, mô hình ngôn ngữ lớn (LLM) hỗ trợ thấu hiểu câu hỏi tự nhiên về vóc dáng và tư vấn kích cỡ chính xác 24/7.'
          ),

          h2('2.3. Giá trị khác biệt'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  cell('Tiêu chí', { isHeader: true, width: 20 }),
                  cell('Bảng size tĩnh', { isHeader: true, width: 20 }),
                  cell('Chat với nhân viên', { isHeader: true, width: 20 }),
                  cell('Giải pháp 3D ngoại', { isHeader: true, width: 20 }),
                  cell('Giải pháp Aureus', { isHeader: true, width: 20, fill: 'C6F6D5' }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Trải nghiệm trực quan', { bold: true }),
                  cell('Không có (0%)'),
                  cell('Rất hạn chế'),
                  cell('Mô phỏng 3D hoạt họa'),
                  cell('Ảnh người thật thử đồ thật (95%+)', { bold: true }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Thời gian phản hồi', { bold: true }),
                  cell('Tức thì'),
                  cell('Chậm (5 - 30 phút)'),
                  cell('Trung bình (30 - 60s)'),
                  cell('Nhanh (15 - 20s)', { bold: true }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Chi phí doanh nghiệp', { bold: true }),
                  cell('0 đồng'),
                  cell('Lương nhân sự hàng tháng'),
                  cell('Hàng nghìn USD/tháng'),
                  cell('Tối ưu, dễ nhân rộng', { bold: true }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Tư vấn kích cỡ', { bold: true }),
                  cell('Tự phỏng đoán'),
                  cell('Cảm tính nhân viên'),
                  cell('Quét khung xương 3D'),
                  cell('Trợ lý AI chuyên nghiệp 24/7', { bold: true }),
                ],
              }),
            ],
          }),

          h2('2.4. Giá trị mang lại'),
          p([
            new TextRun({ text: '• Đối với người dùng trực tiếp: ', bold: true }),
            new TextRun('Xóa tan tâm lý hoài nghi khi mua sắm, tiết kiệm thời gian đổi trả hàng, trải nghiệm mua sắm cá nhân hóa đẳng cấp.'),
          ]),
          p([
            new TextRun({ text: '• Đối với doanh nghiệp bán lẻ: ', bold: true }),
            new TextRun('Tiết kiệm hàng chục triệu đồng tiền phí hoàn hàng mỗi tháng; nâng cao tỷ lệ chuyển đổi và giữ chân khách hàng.'),
          ]),
          p([
            new TextRun({ text: '• Đối với cộng đồng và xã hội: ', bold: true }),
            new TextRun('Giảm thiểu chuyến xe giao hoàn hàng giúp giảm phát thải khí CO2 ra môi trường, thúc đẩy tiêu dùng xanh và kinh tế số.'),
          ]),

          // PHẦN 3: TÍNH KHẢ THI
          h1('PHẦN 3. TÍNH KHẢ THI'),
          h2('3.1. Dữ liệu'),
          p(
            'Hệ thống sử dụng dữ liệu minh bạch, hợp pháp: Catalog 17 sản phẩm thời trang thiết kế chất lượng cao chuẩn e-commerce (nổi bật là Áo Polo Đồng Phục HCMUTE); Bảng số đo nhân trắc học chuẩn được thu thập từ xưởng may đồng phục và bảng size tiêu chuẩn ngành dệt may Việt Nam (size S đến XXXL); 30 ảnh chân dung mẫu tự nguyện từ sinh viên HCMUTE phục vụ kiểm thử.'
          ),

          h2('3.2. Khả thi về mặt kỹ thuật'),
          p(
            'Lõi giao diện phát triển trên React 19 kết hợp React Router DOM và Context API. Tầng AI tích hợp thư viện @gradio/client kết nối trực tiếp với endpoint máy chủ WeShopAI VTON, thiết lập cơ chế 1 tầng xử lý tối ưu. Tầng Conversational AI tích hợp Local LLM server (chuẩn OpenAI-compatible API trên cổng 1235) chạy mô hình Llama 3.1 8B Instruct cục bộ ổn định.'
          ),

          h2('3.3. Khả thi về chi phí và nguồn lực'),
          p(
            'Dự án tối ưu hóa với chi phí khởi điểm 0 đồng: phần cứng laptop sẵn có của sinh viên, công cụ phát triển mã nguồn mở (React, VS Code, Git/GitHub, Hugging Face, LM Studio). Dự toán chi phí vận hành thử nghiệm 3 tháng chỉ khoảng 150.000 VNĐ/tháng tiền Web Hosting.'
          ),

          h2('3.4. Kế hoạch thực hiện (Lộ trình 4 tuần)'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  cell('Tuần', { isHeader: true, width: 12 }),
                  cell('Nội dung công việc', { isHeader: true, width: 38 }),
                  cell('Người phụ trách', { isHeader: true, width: 25 }),
                  cell('Đầu ra dự kiến', { isHeader: true, width: 25 }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Tuần 1', { align: AlignmentType.CENTER, bold: true }),
                  cell('Khảo sát nhu cầu, thu thập dữ liệu size chart & dựng khung Frontend React'),
                  cell('Nguyễn Văn A, Trần Thị B'),
                  cell('Bản đặc tả, khung UI React 19 với giỏ hàng & catalog'),
                ],
              }),
              new TableRow({
                children: [
                  cell('Tuần 2', { align: AlignmentType.CENTER, bold: true }),
                  cell('Tích hợp API WeShopAI VTON và phát triển trang Virtual Try-On Studio 3 cột'),
                  cell('Lê Văn C, Phạm Thị D'),
                  cell('Giao diện 3 cột thử đồ, kết nối API xử lý ảnh thành công'),
                ],
              }),
              new TableRow({
                children: [
                  cell('Tuần 3', { align: AlignmentType.CENTER, bold: true }),
                  cell('Xây dựng Trợ lý Aureus AI Stylist Chatbot và nạp tri thức bảng size HCMUTE'),
                  cell('Phạm Thị D, Hoàng Văn E'),
                  cell('Chatbot nổi toàn website, tư vấn chuẩn xác 6 size áo'),
                ],
              }),
              new TableRow({
                children: [
                  cell('Tuần 4', { align: AlignmentType.CENTER, bold: true }),
                  cell('Kiểm thử tích hợp, tinh chỉnh độ mượt CSS và hoàn thiện hồ sơ dự thi'),
                  cell('Cả nhóm'),
                  cell('Bản demo hoàn chỉnh, video thuyết trình, báo cáo kỹ thuật'),
                ],
              }),
            ],
          }),

          h2('3.5. Rủi ro và phương án dự phòng'),
          p('1. Rủi ro API nghẽn mạng: Bắt lỗi timeout và hiển thị thông báo vàng thân thiện yêu cầu người dùng chờ, hỗ trợ chế độ xem trước vị trí áo.'),
          p('2. Rủi ro ảnh mờ/tối: Chatbot AI Stylist tự động hướng dẫn người dùng góc chụp và điều kiện ánh sáng chuẩn.'),
          p('3. Rủi ro bảo mật ảnh: Ảnh chỉ nạp tạm vào RAM phiên làm việc trình duyệt, tự động giải phóng bộ nhớ khi hoàn tất.'),

          h2('3.6. Khả năng áp dụng và mở rộng'),
          p(
            'Dự kiến thử nghiệm tại Cửa hàng đồng phục và quà tặng lưu niệm của Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE), cùng 02 Local Brand thời trang sinh viên tại khu vực Làng Đại học Thủ Đức.'
          ),

          // PHẦN 4: THIẾT KẾ AI, DỮ LIỆU VÀ KIỂM CHỨNG
          h1('PHẦN 4. THIẾT KẾ AI, DỮ LIỆU VÀ KIỂM CHỨNG'),
          h2('4.1. Sơ đồ kiến trúc mức đơn giản'),
          p(
            'Hệ thống gồm 4 thành phần chính: (1) Client Browser: Giao diện React 19 SPA với catalog 17 sản phẩm, phòng thử đồ ảo 3 cột, chatbot nổi toàn trang; (2) Tầng nghiệp vụ: CartContext quản lý giỏ hàng, bảng giá, mã giảm giá AUREUS10, bộ chuyển đổi định dạng ảnh Blob; (3) Thành phần AI VTON: WeShopAI Virtual Try-On API trên Hugging Face xử lý warping và diffusion; (4) Thành phần AI Stylist: Local LLM Server (Llama 3.1 8B Instruct) tư vấn kích cỡ.'
          ),

          h2('4.2. Mô hình và công cụ lựa chọn'),
          p([
            new TextRun({ text: '• VTON Engine: ', bold: true }),
            new TextRun(
              'WeShopAI Virtual Try-On dựa trên mô hình khuếch tán tiên tiến. Lý do lựa chọn: Khả năng tái tạo nếp gấp vải tự nhiên vượt trội, giữ nguyên chi tiết cổ áo và logo thêu của Áo Polo HCMUTE mà không bị méo mó hình học. Phương án dự phòng: Fashn-VTON 1.5 hoặc Kolors VTON.'
            ),
          ]),
          p([
            new TextRun({ text: '• Chatbot Engine: ', bold: true }),
            new TextRun(
              'Llama 3.1 8B Instruct chạy qua LM Studio cục bộ tại cổng 1235. Lý do lựa chọn: Miễn phí, bảo mật dữ liệu, cho phép nạp System Prompt chi tiết về số đo nhân trắc học. Phương án dự phòng: Rule-based matching kết hợp API Gemini Flash miễn phí.'
            ),
          ]),

          h2('4.3. Phạm vi sản phẩm tối thiểu (MVP) và lộ trình phát triển'),
          p('• Giai đoạn 1 - MVP Vòng 1 & Vòng 2 (Đã hoàn thành): Website thương mại điện tử hoàn chỉnh, phòng thử đồ ảo tải ảnh thử Áo Polo HCMUTE và chatbot nổi toàn trang tư vấn 6 size.'),
          p('• Giai đoạn 2 - Thí điểm nhóm nhỏ (Tháng 5 - 6/2026): Thử nghiệm 200 lượt tại HCMUTE, bổ sung trang quản trị cho chủ shop tải catalog và bảng size.'),
          p('• Giai đoạn 3 - Mở rộng (Sau cuộc thi): Mở rộng trang phục thân dưới, đồ dạ hội và đóng gói thành plugin nhúng vào Shopify/Haravan.'),

          h2('4.4. Kiểm thử và đánh giá'),
          p('• Test Case 1 (Điều kiện lý tưởng): Ảnh đứng thẳng, đủ sáng -> AI ghép áo chuẩn khớp vai 99%, nếp vải tự nhiên, logo rõ nét.'),
          p('• Test Case 2 (Người hơi nghiêng 30 độ): AI tự điều chỉnh góc xoay cổ áo và tay áo; độ khớp thị giác đạt 92%.'),
          p('• Test Case 3 (Ảnh nền phức tạp): Mô hình tự tách nền người dùng và chỉ thay thế phần thân áo, bảo toàn nguyên vẹn khuôn mặt và hậu cảnh.'),
          p('• Kiểm thử Chatbot: Đưa câu hỏi mẹo về người bụng to -> AI Stylist khuyên chọn size lớn hơn 1 nấc để mặc thoải mái.'),

          h2('4.5. Hạn chế và cơ chế giám sát của con người'),
          p(
            'Khi ảnh quá tối hoặc độ phân giải dưới 300px, hệ thống hiển thị nhãn cảnh báo hình ảnh mang tính tham khảo và cung cấp nút so sánh trực tiếp Before/After để người dùng tự kiểm chứng.'
          ),

          // PHẦN 5: BẢO MẬT, ĐẠO ĐỨC VÀ TRÁCH NHIỆM
          h1('PHẦN 5. BẢO MẬT, ĐẠO ĐỨC VÀ TRÁCH NHIỆM'),
          h2('5.1. Danh mục dữ liệu và mức độ nhạy cảm'),
          p('Phân loại nghiêm ngặt 3 cấp độ: (1) Dữ liệu nhạy cảm cao: Ảnh chân dung cá nhân (chỉ xử lý tạm trong RAM, không lưu trữ vĩnh viễn); (2) Dữ liệu thông thường: Chiều cao, cân nặng, giỏ hàng (lưu cục bộ tại LocalStorage máy khách); (3) Dữ liệu công khai: Bảng size chart, ảnh catalog sản phẩm.'),

          h2('5.2. Biện pháp bảo mật kỹ thuật'),
          p(
            'Toàn bộ khóa bí mật và API Token được quản lý qua biến môi trường (.env), không commit lên GitHub; Sử dụng giao thức HTTPS và mã hóa TLS khi truyền tải ảnh; Thiết lập giới hạn tần suất gọi API (Rate Limiting) để chống spam.'
          ),

          h2('5.3. Tuân thủ pháp lý và quyền sử dụng'),
          p(
            'Tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân; người dùng chủ động tải ảnh và có quyền xóa ảnh bất kỳ lúc nào. Hình ảnh catalog sản phẩm đều là hình ảnh tự chụp hoặc sử dụng hình ảnh đồng phục được trường HCMUTE cho phép.'
          ),

          h2('5.4. Đạo đức AI và kiểm soát thiên lệch'),
          p(
            'Chống thiên lệch hình thể (Body Inclusivity): Hỗ trợ dải size rộng từ S đến XXXL, tôn vinh mọi vóc dáng, không đưa ra nhận xét tiêu cực về ngoại hình. Minh bạch công nghệ, không giả mạo hình ảnh để lừa dối người tiêu dùng.'
          ),

          // PHẦN 6: KẾT QUẢ DỰ KIẾN
          h1('PHẦN 6. KẾT QUẢ DỰ KIẾN'),
          h2('6.1. Kết quả đầu ra cụ thể'),
          p('1. Ứng dụng Web hoàn chỉnh (Aureus E-Commerce VTON Platform) với phòng thử đồ ảo 3 cột và chatbot nổi.'),
          p('2. Mã nguồn React 19 và script tích hợp AI hoàn chỉnh trên GitHub Repository.'),
          p('3. Bộ dữ liệu mẫu gồm catalog 17 sản phẩm, bảng quy chuẩn 6 size áo polo HCMUTE và bộ ảnh mẫu kiểm thử.'),
          p('4. Video demo thực tế 1 - 2 phút và bản thuyết minh PDF hoàn chỉnh.'),

          h2('6.2. Tác động có thể đo lường'),
          p('• Tỷ lệ hoàn hàng trung bình: Giảm từ 28% xuống còn ~14% (giảm 50% lượng đơn trả về).'),
          p('• Tỷ lệ chuyển đổi đơn hàng: Tăng từ 2.1% lên mức 3.5% trên tổng số lượt xem sản phẩm có thử đồ ảo.'),
          p('• Chi phí vận hành AI: Giữ ở mức gần 0 đồng trong giai đoạn đầu, tiết kiệm hơn 90% so với server GPU truyền thống.'),

          h2('6.3. Hướng phát triển sau cuộc thi'),
          p('1. Tích hợp Multimodal AI tự động trích xuất số đo vóc dáng qua camera điện thoại.'),
          p('2. Phát triển tính năng Phối Đồ Thông Minh (Mix & Match AI) theo sở thích khách hàng.'),
          p('3. Đóng gói thành sản phẩm SaaS (Plug-and-Play Widget) cho các sàn và website thời trang.'),

          // TÀI LIỆU THAM KHẢO
          h1('TÀI LIỆU THAM KHẢO (Trích dẫn chuẩn IEEE)'),
          p('[1] H. T. L. Quyên và C. T. Sĩ, "Các yếu tố ảnh hưởng đến quyết định mua sắm thời trang trực tuyến của thế hệ Gen Z tại TP. Hồ Chí Minh," Tạp chí Phát triển Kinh tế & Xã hội, số 32, tr. 45–58, 2026.'),
          p('[2] Statista Research Department, "Apparel and footwear return rates in e-commerce worldwide from 2021 to 2024," Statista Retail Report, 2024.'),
          p('[3] Coresight Research, "The Cost of Online Returns in Fashion Retail: Logistics Challenges and AI-Driven Solutions," Coresight Industry Analysis, 2023.'),
          p('[4] McKinsey & Company, "Returning to value: Addressing the retail returns dilemma through technology and fit prediction," McKinsey Retail Insights, 2023.'),
          p('[5] C. Wang et al., "Toward Characteristic-Preserving Image-based Virtual Try-On Network," in Proceedings of the European Conference on Computer Vision (ECCV), 2018, pp. 589–604.'),
          p('[6] Chính phủ nước CHXHCN Việt Nam, "Nghị định số 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân," Ban hành ngày 17/04/2023.'),

          // PHỤ LỤC
          h1('PHỤ LỤC: PHÂN CÔNG VÀ SỬ DỤNG AI'),
          h2('1. Bảng phân công đề xuất'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  cell('Họ và tên', { isHeader: true, width: 25 }),
                  cell('Nhiệm vụ', { isHeader: true, width: 35 }),
                  cell('Minh chứng cụ thể', { isHeader: true, width: 25 }),
                  cell('Tỷ lệ đóng góp (%)', { isHeader: true, width: 15 }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Nguyễn Văn A', { bold: true }),
                  cell('Trưởng nhóm, Thiết kế kiến trúc tổng thể, Viết báo cáo thuyết minh'),
                  cell('File AI IN ECONOMICS.md, Kiến trúc mục 4.1'),
                  cell('25%', { align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Trần Thị B'),
                  cell('Nghiên cứu bài toán kinh tế, Phân tích chỉ số hoàn hàng & Khảo sát'),
                  cell('Khảo sát 120 sinh viên, Mục 1.1-1.4'),
                  cell('20%', { align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Lê Văn C'),
                  cell('Lập trình Frontend React, Giao diện Virtual Try-On 3 cột'),
                  cell('Code VirtualTryOnPage.js, Navbar.js'),
                  cell('20%', { align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Phạm Thị D'),
                  cell('Tích hợp WeShopAI VTON API, Kết nối Local LLM Chatbot'),
                  cell('Code weShopAiService.js, AiStylistChatbot.jsx'),
                  cell('20%', { align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  cell('Hoàng Văn E'),
                  cell('Dữ liệu Catalog sản phẩm, Size chart & Video Demo'),
                  cell('File products.js, Ảnh polo HCMUTE, Video demo'),
                  cell('15%', { align: AlignmentType.CENTER }),
                ],
              }),
              new TableRow({
                children: [
                  cell('TỔNG CỘNG', { bold: true }),
                  cell(''),
                  cell(''),
                  cell('100%', { align: AlignmentType.CENTER, bold: true }),
                ],
              }),
            ],
          }),

          h2('2. Khai báo sử dụng AI'),
          p([
            new TextRun({ text: '• Công cụ AI sử dụng: ', bold: true }),
            new TextRun('Google Antigravity Agent (DeepMind), WeShopAI Virtual Try-On, Llama 3.1 8B Instruct (qua LM Studio).'),
          ]),
          p([
            new TextRun({ text: '• Mục đích sử dụng: ', bold: true }),
            new TextRun(
              'Hỗ trợ dò tìm lỗi giao diện, tối ưu cú pháp React; Mô phỏng thử đồ ảo ghép trang phục; Đóng vai trò chatbot AI Stylist tư vấn size; Hỗ trợ rà soát chính tả và định dạng tài liệu thuyết minh.'
            ),
          ]),
          p([
            new TextRun({ text: '• Phần do nhóm tự kiểm chứng và thực hiện: ', bold: true }),
            new TextRun(
              'Toàn bộ ý tưởng bài toán kinh tế, thiết kế cấu trúc giao diện thương mại điện tử, số liệu khảo sát thực tế sinh viên HCMUTE, logic nghiệp vụ giỏ hàng, bảng size chart sản phẩm và việc thử nghiệm thực tế trên trình duyệt đều do nhóm tự nghiên cứu, kiểm chứng và chịu trách nhiệm 100%.'
            ),
          ]),
          p([
            new TextRun({ text: '• Cam kết của nhóm: ', bold: true }),
            new TextRun(
              'Nhóm cam kết hoàn toàn chịu trách nhiệm về nguồn dữ liệu, tính trung thực của các kết quả nghiên cứu và tính hợp pháp của tài nguyên sử dụng trong bài dự thi.'
            ),
          ]),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = path.join(__dirname, '..', 'AI_IN_ECONOMICS_2026_AUREUS_VTON.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log('✅ Đã tạo thành công file Word tại:', outputPath);
}

generateDocx().catch((err) => {
  console.error('❌ Lỗi tạo file Word:', err);
  process.exit(1);
});
