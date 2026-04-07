import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Dịch vụ",
    url: "#how-to-use",
  },
  {
    id: "1",
    title: "Gói dịch vụ",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Portfolio",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Liên hệ",
    url: "#contact",
  },
  {
    id: "4",
    title: "Zalo",
    url: "https://zalo.me/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Thiết kế giao diện chuyên nghiệp",
  "Tối ưu SEO đầy đủ",
  "Hỗ trợ đa thiết bị",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Website bán cafe",
    text: "Thiết kế website bán cafe với menu sản phẩm, combo ưu đãi, đặt hàng nhanh và giao diện tối ưu chuyển đổi.",
    date: "2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Website pet shop",
    text: "Xây dựng website pet shop với danh mục thú cưng và phụ kiện, bộ lọc sản phẩm, giỏ hàng và trang tư vấn chăm sóc.",
    date: "2025",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Website buôn bán bất động sản",
    text: "Phát triển website bất động sản với danh sách dự án, lọc theo khu vực - mức giá, form đăng ký tư vấn và bản đồ vị trí.",
    date: "2026",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "POS order cafe",
    text: "Xây dựng hệ thống POS order cafe với gọi món tại quầy, quản lý bàn, in hóa đơn và theo dõi doanh thu theo ca.",
    date: "2026",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Chúng tôi cung cấp giải pháp website toàn diện, từ thiết kế đến phát triển, bảo mật và hỗ trợ kỹ thuật. Đủ để giúp doanh nghiệp của bạn phát triển mạnh mẽ.";

export const collabContent = [
  {
    id: "0",
    title: "Thiết kế chuyên nghiệp",
    text: "Giao diện đẹp, hút mắt, phù hợp với thương hiệu của bạn.",
  },
  {
    id: "1",
    title: "Tối ưu SEO",
  },
  {
    id: "2",
    title: "Bảo mật tối đa",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Gói Cơ bản",
    description: "Website tĩnh, thiết kế responsive + tên miền",
    price: "599k",
    features: [
      "Thiết kế responsive trên mọi thiết bị",
      "Tặng tên miền .site/.online dùng 1 năm",
      "Tối ưu hình ảnh và tốc độ tải",
      "Bảo mật cơ bản (SSL)",
      "Miễn phí hỗ trợ 3 tháng",
    ],
  },
  {
    id: "1",
    title: "Gói Chuyên Nghiệp",
    description: "Website động, CMS, tối ưu SEO + tên miền",
    price: "1999k",
    features: [
      "Website động với hệ thống quản lý nội dung",
      "Tặng tên miền .com/.net dùng 1 năm",
      "Tối ưu SEO chuẩn Google",
      "Tích hợp form liên hệ, chat tư vấn",
      "Hỗ trợ 6 tháng miễn phí",
      "Backup dữ liệu hàng tháng",
    ],
  },
  {
    id: "2",
    title: "Gói Enterprise",
    description: "Website thương mại điện tử, API tích hợp + tên miền cao cấp",
    price: null,
    features: [
      "Website ecommerce đầy đủ (sản phẩm, giỏ hàng, thanh toán)",
      "Tư vấn và cấu hình tên miền thương hiệu (.com/.vn)",
      "Tối ưu SEO cấp cao + Analytics",
      "Hệ thống khách hàng, marketing",
      "Hỗ trợ 12 tháng + cộng tác viên dành riêng",
      "Backup hàng tuần, BDS bảo vệ",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Thiết kế Responsive",
    text: "Website của bạn sẽ hoạt động hoàn hảo trên mọi thiết bị, từ điện thoại đến desktop. Trải nghiệm người dùng tuyệt vời trên tất cả các nền tảng.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Tối ưu SEO",
    text: "Website được tối ưu hóa hoàn toàn cho các công cụ tìm kiếm, giúp bạn xếp hạng cao trên Google và thu hút khách hàng tiềm năng.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Bảo mật Cao",
    text: "Dữ liệu khách hàng của bạn được bảo vệ bằng mã hóa SSL hiện đại. Tuân thủ các tiêu chuẩn bảo mật quốc tế.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Tốc độ Nhanh",
    text: "Website tải nhanh chóng, giảm độ trễ và tăng tỷ lệ chuyển đổi của bạn. Tối ưu hóa hình ảnh và code.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Hỗ trợ 24/7",
    text: "Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn. Nhanh chóng giải quyết các vấn đề kỹ thuật.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Dễ Quản lý",
    text: "Giao diện quản trị trực quan, dễ sử dụng. Cập nhật nội dung mà không cần kiến thức lập trình.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
