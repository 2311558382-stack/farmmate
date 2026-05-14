export const seasonStats = [
  {
    title: "Mùa vụ đang hoạt động",
    value: "5",
    note: "+ 1 mùa vụ so với tuần trước",
    icon: "🌱",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Sắp thu hoạch",
    value: "2",
    note: "Trong 7-14 ngày tới",
    icon: "🌾",
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Việc cần làm hôm nay",
    value: "6",
    note: "Cần hoàn thành trong ngày",
    icon: "🧺",
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Tỷ lệ phát triển tốt",
    value: "84%",
    note: "+ 6% so với tuần trước",
    icon: "📈",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export const seasons = [
  {
    id: 1,
    name: "Vụ Đông Xuân 2024 - 2025",
    crop: "Lúa ST25",
    field: "Ruộng Bắc 01",
    stage: "Phát triển",
    progress: 65,
    status: "Đang tốt",
    statusType: "good",
    harvestDate: "05/06/2025",
    currentStageDays: "18 ngày",
    nextStageDate: "06/06/2025",
    image: "🌾",
  },
  {
    id: 2,
    name: "Vụ Hè Thu 2025",
    crop: "Ngô ngọt",
    field: "Ruộng Tây 02",
    stage: "Nảy mầm",
    progress: 35,
    status: "Cần theo dõi",
    statusType: "warning",
    harvestDate: "18/06/2025",
    currentStageDays: "9 ngày",
    nextStageDate: "28/05/2025",
    image: "🌽",
  },
  {
    id: 3,
    name: "Vụ Rau màu 2025",
    crop: "Cà chua",
    field: "Ruộng Nam 03",
    stage: "Ra hoa",
    progress: 70,
    status: "Sắp thu hoạch",
    statusType: "good",
    harvestDate: "12/06/2025",
    currentStageDays: "12 ngày",
    nextStageDate: "30/05/2025",
    image: "🍅",
  },
  {
    id: 4,
    name: "Vụ Dưa leo 2025",
    crop: "Dưa leo",
    field: "Ruộng Đông 01",
    stage: "Phát triển",
    progress: 55,
    status: "Cần chăm sóc",
    statusType: "warning",
    harvestDate: "22/06/2025",
    currentStageDays: "14 ngày",
    nextStageDate: "02/06/2025",
    image: "🥒",
  },
];

export const growthStages = [
  { label: "Gieo hạt", icon: "🌱", done: true },
  { label: "Nảy mầm", icon: "🌿", done: true },
  { label: "Phát triển", icon: "🌾", active: true },
  { label: "Ra hoa", icon: "🌼", done: false },
  { label: "Thu hoạch", icon: "🧺", done: false },
];

export const todayTasks = [
  {
    title: "Tưới nước - Ruộng Bắc 01",
    crop: "Lúa ST25",
    date: "22/05",
    icon: "💧",
    color: "bg-sky-100",
  },
  {
    title: "Bón phân - Ruộng Nam 03",
    crop: "Cà chua",
    date: "22/05",
    icon: "🧺",
    color: "bg-amber-100",
  },
  {
    title: "Kiểm tra sâu bệnh - Ruộng Tây 02",
    crop: "Ngô ngọt",
    date: "22/05",
    icon: "🐛",
    color: "bg-emerald-100",
  },
  {
    title: "Ghi chép nhật ký - Ruộng Bắc 01",
    crop: "Lúa ST25",
    date: "22/05",
    icon: "📝",
    color: "bg-lime-100",
  },
];

export const weeklySchedule = [
  { day: "T2", date: "19/05", tasks: ["Tưới nước"] },
  { day: "T3", date: "20/05", tasks: ["Kiểm tra", "Phun thuốc"] },
  { day: "T4", date: "21/05", tasks: ["Tưới nước"] },
  { day: "T5", date: "22/05", tasks: ["Tưới nước", "Bón phân"] },
  { day: "T6", date: "23/05", tasks: ["Kiểm tra"] },
  { day: "T7", date: "24/05", tasks: ["Tưới nước"] },
  { day: "CN", date: "25/05", tasks: ["Nghỉ ngơi"] },
];

export const seasonAlerts = [
  {
    title: "Ruộng Nam 03 cần bón phân",
    description: "Cà chua đang thiếu dinh dưỡng, cần bổ sung phân NPK.",
    level: "Cần xử lý",
    type: "warning",
    icon: "⚠️",
  },
  {
    title: "Ruộng Tây 02 có nguy cơ sâu bệnh nhẹ",
    description: "Phát hiện sâu ăn lá ở mức nhẹ, nên theo dõi thêm.",
    level: "Theo dõi",
    type: "good",
    icon: "🐛",
  },
];