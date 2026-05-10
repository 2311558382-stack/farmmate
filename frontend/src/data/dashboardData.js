import {
  CloudRain,
  Home,
  Sprout,
  TrendingUp,
  Wallet,
} from "lucide-react";

export const summaryCards = [
  {
    title: "Tổng số ruộng",
    value: "12",
    note: "+ 2 ruộng trong tháng này",
    icon: Home,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Mùa vụ đang hoạt động",
    value: "5",
    note: "+ 1 mùa vụ mới",
    icon: Sprout,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Tổng chi phí",
    value: "48,35 triệu đ",
    note: "▲ 8,4% so với tháng trước",
    icon: Wallet,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Lợi nhuận dự kiến",
    value: "96,72 triệu đ",
    note: "▲ 15,7% so với tháng trước",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export const weatherAlert = {
  icon: CloudRain,
  title: "Dự báo mưa lớn",
  description:
    "Khu vực của bác có mưa lớn từ 24/5 - 25/5. Nên kiểm tra hệ thống thoát nước và hạn chế bón phân trước mưa.",
};

export const weatherMetrics = [
  { label: "Độ ẩm", value: "78%" },
  { label: "Gió", value: "18 km/h" },
  { label: "Lượng mưa", value: "45-65 mm" },
];

export const priceList = [
  { crop: "Sắn", price: "1.291.000 đ/tấn", change: "+ 3,2%" },
  { crop: "Bắp", price: "1.242.000 đ/tấn", change: "+ 1,7%" },
  { crop: "Đậu nành", price: "14.460.000 đ/tấn", change: "- 0,6%" },
  { crop: "Lúa", price: "6.687.000 đ/tấn", change: "+ 2,5%" },
];

export const priceChartData = [
  { day: "16/5", san: 24, bap: 19, dau: 12, lua: 8 },
  { day: "18/5", san: 29, bap: 24, dau: 17, lua: 13 },
  { day: "20/5", san: 26, bap: 23, dau: 19, lua: 15 },
  { day: "22/5", san: 32, bap: 27, dau: 22, lua: 18 },
];

export const trendData = [
  { month: "T1", cost: 36, revenue: 52 },
  { month: "T2", cost: 44, revenue: 62 },
  { month: "T3", cost: 58, revenue: 84 },
  { month: "T4", cost: 52, revenue: 86 },
  { month: "T5", cost: 64, revenue: 98 },
  { month: "T6", cost: 60, revenue: 94 },
  { month: "T7", cost: 68, revenue: 102 },
  { month: "T8", cost: 84, revenue: 121 },
  { month: "T9", cost: 63, revenue: 96 },
  { month: "T10", cost: 66, revenue: 97 },
  { month: "T11", cost: 50, revenue: 80 },
  { month: "T12", cost: 54, revenue: 86 },
];

export const activities = [
  { title: "Thửa 3 - Bắt đầu tưới", time: "2 giờ trước", icon: "💧" },
  { title: "Bón phân - Thửa 7", time: "5 giờ trước", icon: "🌱" },
  { title: "Theo dõi sâu bệnh - Thửa 2", time: "Hôm qua", icon: "🔍" },
  { title: "Lên lịch thu hoạch - Thửa 5", time: "2 ngày trước", icon: "🌽" },
  { title: "Kiểm tra hệ thống tưới - Thửa 1", time: "2 ngày trước", icon: "🛠️" },
];