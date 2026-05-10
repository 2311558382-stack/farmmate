import {
  Bell,
  CalendarDays,
  ChevronDown,
  CloudRain,
  Droplets,
  Leaf,
  Search,
  Sparkles,
  Tractor,
  UploadCloud,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Sidebar from "../components/layout/Sidebar";
import {
  activities,
  priceChartData,
  priceList,
  summaryCards,
  trendData,
  weatherAlert,
  weatherMetrics,
} from "../data/dashboardData";

const heroStats = [
  {
    label: "Ruộng khỏe mạnh",
    value: "18",
    icon: Leaf,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    label: "Tưới tiêu",
    value: "Đúng tiến độ",
    icon: Droplets,
    color: "text-sky-500",
    bg: "bg-sky-100",
  },
  {
    label: "Hoạt động đồng ruộng",
    value: "3 đang thực hiện",
    icon: Tractor,
    color: "text-lime-600",
    bg: "bg-lime-100",
  },
];

function TopControls() {
  return (
    <div className="absolute left-7 right-7 top-5 z-20 flex items-center justify-between gap-4">
      <div className="flex h-[56px] w-[520px] max-w-full items-center gap-3 rounded-[22px] border border-slate-200 bg-white/95 px-5 shadow-sm backdrop-blur">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          placeholder="Tìm ruộng, thửa, cây trồng..."
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="hidden items-center gap-3 xl:flex">
        <button className="relative flex h-[52px] w-[52px] items-center justify-center rounded-[20px] border border-slate-200 bg-white/95 shadow-sm backdrop-blur">
          <Bell size={18} className="text-slate-700" />
          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
        </button>

        <button className="flex h-[52px] items-center gap-2 rounded-[20px] border border-slate-200 bg-white/95 px-5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
          <CalendarDays size={17} className="text-emerald-600" />
          22 tháng 5, 2025
          <ChevronDown size={16} />
        </button>

        <div className="flex h-[52px] items-center gap-3 rounded-[20px] border border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-lg">
            👨‍🌾
          </div>

          <div>
            <p className="text-sm font-black leading-none text-slate-900">
              Nguyễn Văn Nam
            </p>
            <p className="mt-1 text-xs text-slate-400">Chủ nông trại</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroTop() {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-emerald-100 bg-white shadow-sm">
      <div className="relative h-[420px] overflow-hidden xl:h-[335px]">
        <img
          src="/images/farm-dashboard-hero.png"
          alt="FarmMate Hero"
          className="absolute inset-0 h-full w-full object-cover object-[50%_center]"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.42) 31%, rgba(255,255,255,0.06) 54%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%, rgba(244,248,241,0.12) 100%)",
          }}
        />

        <TopControls />

        <div className="absolute left-7 top-[112px] z-10 max-w-[720px] xl:left-9">
          <h1 className="text-[32px] font-black leading-tight tracking-tight text-slate-950 xl:text-[42px]">
            Chào buổi sáng, chú Ba! 👋
          </h1>

          <p className="mt-3 max-w-[620px] text-[15px] leading-6 text-slate-700">
            Đây là những gì đang diễn ra trên nông trại của bác hôm nay.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-8">
            {heroStats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
                  >
                    <Icon size={25} className={item.color} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      {item.label}
                    </p>
                    <p className="text-base font-black text-slate-950">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute right-9 top-[105px] z-10 hidden w-[235px] rounded-[24px] bg-white/95 p-5 shadow-xl backdrop-blur xl:block">
          <p className="text-sm font-bold text-slate-500">Sức khỏe ruộng</p>
          <p className="mt-2 text-[42px] font-black leading-none text-emerald-600">
            92%
          </p>
          <p className="mt-2 text-sm font-bold text-emerald-600">Tốt</p>

          <svg className="mt-5 h-[58px] w-full" viewBox="0 0 190 58" fill="none">
            <path
              d="M5 44 C 20 42, 29 42, 43 33 C 55 25, 66 34, 82 25 C 97 17, 108 27, 124 18 C 141 7, 156 15, 185 7"
              stroke="#16a34a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M5 56 L5 44 C 20 42, 29 42, 43 33 C 55 25, 66 34, 82 25 C 97 17, 108 27, 124 18 C 141 7, 156 15, 185 7 L185 56 Z"
              fill="url(#healthFill)"
            />
            <defs>
              <linearGradient id="healthFill" x1="95" y1="7" x2="95" y2="56">
                <stop stopColor="#22c55e" stopOpacity="0.28" />
                <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ card }) {
  const Icon = card.icon;
  const cardColor = card.color || "bg-emerald-100 text-emerald-600";

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full ${cardColor}`}
        >
          <Icon size={30} />
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">{card.title}</p>
          <h3 className="mt-1 text-[22px] font-black text-slate-950">
            {card.value}
          </h3>
          <p
            className={`mt-1 text-xs font-bold ${
              card.note?.includes("8,4") ? "text-red-500" : "text-emerald-600"
            }`}
          >
            {card.note}
          </p>
        </div>
      </div>
    </div>
  );
}

function AiDiagnosisCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          ⌂
        </div>

        <div>
          <h3 className="text-[18px] font-black text-slate-950">
            Chẩn đoán bệnh cây bằng AI
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Tải ảnh lá cây lên để phân tích
          </p>
        </div>
      </div>

      <div className="flex h-[118px] items-center justify-center rounded-[22px] border-2 border-dashed border-slate-200 bg-white">
        <div className="text-center">
          <UploadCloud className="mx-auto mb-2 text-slate-700" size={28} />
          <p className="text-sm font-bold text-slate-700">
            Kéo thả hoặc bấm để tải ảnh lên
          </p>
          <p className="mt-1 text-xs text-slate-400">JPG, PNG tối đa 10MB</p>
        </div>
      </div>

      <div className="mt-4 rounded-[22px] bg-slate-50 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-xl bg-emerald-100">
              <div className="flex h-full w-full items-center justify-center text-xl">
                🌽
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400">Chẩn đoán gần nhất</p>
              <p className="mt-1 font-black text-slate-950">Bắp - bệnh đốm lá</p>
              <p className="text-xs text-slate-500">Độ tin cậy: 87%</p>
            </div>
          </div>

          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
            Nguy cơ trung bình
          </span>
        </div>
      </div>
    </div>
  );
}

function WeatherCard() {
  const WeatherIcon = weatherAlert.icon || CloudRain;

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
            ☁
          </div>
          <h3 className="text-[18px] font-black text-slate-950">
            Cảnh báo thời tiết
          </h3>
        </div>

        <button className="text-sm font-bold text-sky-600">Xem dự báo →</button>
      </div>

      <div className="rounded-[22px] bg-amber-50 p-5">
        <div className="mb-3 flex items-center gap-3 text-amber-700">
          <WeatherIcon size={22} />
          <p className="font-black">{weatherAlert.title}</p>
        </div>

        <p className="text-sm leading-6 text-slate-600">
          {weatherAlert.description}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {weatherMetrics.map((item) => (
          <div
            key={item.label}
            className="rounded-[18px] bg-slate-50 px-4 py-4 text-center"
          >
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className="mt-1 text-lg font-black text-slate-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceCard() {
  const colors = [
    "bg-sky-500",
    "bg-amber-500",
    "bg-red-500",
    "bg-violet-500",
  ];

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            ⌁
          </div>
          <h3 className="text-[18px] font-black text-slate-950">Giá nông sản</h3>
        </div>

        <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          Tuần này
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[165px_1fr]">
        <div className="space-y-4 pt-2">
          {priceList.map((item, index) => (
            <div
              key={item.crop}
              className="flex items-start justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    colors[index % colors.length]
                  }`}
                />
                <span className="text-sm font-medium text-slate-700">
                  {item.crop}
                </span>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-slate-950">{item.price}</p>
                <p
                  className={`text-xs font-bold ${
                    item.change.includes("-")
                      ? "text-red-500"
                      : "text-emerald-600"
                  }`}
                >
                  {item.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[170px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={priceChartData}>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                fontSize={11}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="san"
                stroke="#16a34a"
                strokeWidth={3}
                dot
              />
              <Line
                type="monotone"
                dataKey="bap"
                stroke="#0ea5e9"
                strokeWidth={3}
                dot
              />
              <Line
                type="monotone"
                dataKey="dau"
                stroke="#f59e0b"
                strokeWidth={3}
                dot
              />
              <Line
                type="monotone"
                dataKey="lua"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function TrendChart() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-[18px] font-black text-slate-950">
            Xu hướng chi phí & doanh thu
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            So sánh chi phí và doanh thu theo tháng
          </p>
        </div>

        <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          Năm nay
        </button>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="costFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              name="Doanh thu"
              stroke="#16a34a"
              strokeWidth={3}
              fill="url(#revenueFill)"
            />

            <Area
              type="monotone"
              dataKey="cost"
              name="Chi phí"
              stroke="#ef4444"
              strokeWidth={3}
              fill="url(#costFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[18px] font-black text-slate-950">
          Hoạt động nông trại
        </h3>

        <button className="text-sm font-bold text-emerald-600">
          Xem tất cả →
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-[22px] bg-slate-50 p-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
              <span className="text-xl">{item.icon}</span>
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-slate-950">{item.title}</p>
              <p className="mt-1 text-xs text-slate-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f4f8f1] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <main className="px-6 py-5 xl:px-7">
          <HeroTop />

          <section className="relative z-20 -mt-12 mb-5 grid gap-4 px-5 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
              <SummaryCard key={card.title} card={card} />
            ))}
          </section>

          <section className="mb-5 grid gap-4 xl:grid-cols-[1fr_1fr_1.1fr]">
            <AiDiagnosisCard />
            <WeatherCard />
            <PriceCard />
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.6fr_0.95fr]">
            <TrendChart />
            <ActivityCard />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;