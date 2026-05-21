import {
  Bell,
  CalendarDays,
  ChevronDown,
  Plus,
  Search,
  Wallet,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import {
  costCategories,
  costHeroInfo,
  costStats,
  costSuggestions,
  recentCosts,
  seasonCosts,
} from "../data/costsData";

function Topbar() {
  return (
    <header className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex w-full max-w-[560px] items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          placeholder="Tìm chi phí, mùa vụ, ruộng..."
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="relative flex h-[52px] w-[52px] items-center justify-center rounded-[20px] border border-slate-200 bg-white shadow-sm">
          <Bell size={18} className="text-slate-700" />
          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
        </button>

        <button className="flex h-[52px] items-center gap-2 rounded-[20px] border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
          <CalendarDays size={17} className="text-emerald-600" />
          22 tháng 5, 2025
          <ChevronDown size={16} />
        </button>

        <div className="flex h-[52px] items-center gap-3 rounded-[20px] border border-slate-200 bg-white px-4 shadow-sm">
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
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative mb-5 overflow-hidden rounded-[30px] border border-emerald-100 bg-white shadow-sm">
      <img
        src="/images/cost-hero.png"
        alt="Quản lý chi phí FarmMate"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: "78% 64%",
          transform: "scale(1.04)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 29%, rgba(255,255,255,0.68) 48%, rgba(255,255,255,0.18) 72%, rgba(255,255,255,0.03) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(244,248,241,0.02) 58%, rgba(244,248,241,0.10) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[270px] flex-col justify-between gap-6 p-7 xl:flex-row xl:items-center">
        <div className="max-w-[760px]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
            <Wallet size={16} />
            Chi phí
          </div>

          <h1 className="text-4xl font-black tracking-tight text-emerald-950">
            Quản lý chi phí
          </h1>

          <p className="mt-2 max-w-[680px] text-slate-700">
            Ghi lại tiền giống, phân bón, thuốc, công lao động và máy móc.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {costHeroInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-[20px] border border-slate-100 bg-white/95 px-5 py-4 shadow-sm backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-xl font-black text-emerald-600">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mr-3 flex w-fit items-center gap-2 self-start rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 xl:self-center">
          <Plus size={18} />
          Thêm chi phí
        </button>
      </div>
    </section>
  );
}
function StatCard({ item }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl ${item.color}`}
        >
          {item.icon}
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">{item.title}</p>
          <h3 className="mt-1 text-3xl font-black text-slate-950">
            {item.value}
          </h3>
          <p
            className={`mt-1 text-sm font-bold ${
              item.note === "Cần chú ý" || item.note === "Cao nhất"
                ? "text-orange-500"
                : "text-emerald-600"
            }`}
          >
            {item.note}
          </p>
        </div>
      </div>
    </div>
  );
}

function CostBreakdownCard() {
  return (
    <div className="min-h-[350px] rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-slate-950">
        Tốn nhiều nhất ở đâu?
      </h3>

      <div className="mt-6 grid gap-6 xl:grid-cols-[230px_1fr] xl:items-center">
        <div className="relative mx-auto flex h-[210px] w-[210px] items-center justify-center rounded-full bg-[conic-gradient(#16a34a_0_31%,#f59e0b_31%_53%,#3b82f6_53%_71%,#8b5cf6_71%_86%,#f97316_86%_100%)]">
          <div className="flex h-[128px] w-[128px] flex-col items-center justify-center rounded-full bg-white shadow-inner">
            <p className="text-2xl font-black text-slate-950">48.35 tr</p>
            <p className="text-sm text-slate-500">Tổng chi</p>
          </div>
        </div>

        <div className="space-y-4">
          {costCategories.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-[120px_1fr_48px] items-center gap-3"
            >
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${item.dot}`} />
                <p className="text-sm font-bold text-slate-700">{item.name}</p>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>

              <p className="text-right text-sm font-black text-slate-950">
                {item.percent}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecentCostsCard() {
  return (
    <div className="min-h-[350px] rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-black text-slate-950">Chi phí gần đây</h3>
        <button className="text-sm font-bold text-emerald-600">
          Xem tất cả →
        </button>
      </div>

      <div className="space-y-3">
        {recentCosts.map((cost) => (
          <div
            key={cost.title}
            className="flex items-center gap-4 rounded-[22px] border border-slate-100 bg-white p-4 transition hover:bg-slate-50"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${cost.color}`}
            >
              {cost.icon}
            </div>

            <div className="flex-1">
              <p className="text-lg font-black text-slate-950">{cost.title}</p>
              <p className="mt-1 text-sm text-slate-500">{cost.field}</p>
            </div>

            <div className="text-right">
              <p className="text-xl font-black text-slate-950">
                {cost.amount}
              </p>
              <p className="mt-1 text-sm font-medium text-emerald-600">
                {cost.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SeasonCostsCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-black text-slate-950">
          Chi phí theo mùa vụ
        </h3>
        <button className="text-sm font-bold text-emerald-600">
          Xem tất cả →
        </button>
      </div>

      <div className="space-y-4">
        {seasonCosts.map((season) => (
          <div
            key={season.name}
            className="grid gap-4 rounded-[22px] bg-slate-50 p-4 md:grid-cols-[70px_1fr_130px_60px] md:items-center"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${season.color}`}
            >
              {season.icon}
            </div>

            <div>
              <p className="font-black text-slate-950">{season.name}</p>
              <p className="mt-1 text-sm text-slate-500">{season.crop}</p>
            </div>

            <div>
              <p className="text-right font-black text-slate-950">
                {season.amount}
              </p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{ width: `${season.percent}%` }}
                />
              </div>
            </div>

            <p className="text-right text-lg font-black text-emerald-600">
              {season.percent}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuggestionCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-xl font-black text-slate-950">Gợi ý cho bác</h3>

      <div className="space-y-4">
        {costSuggestions.map((item) => (
          <div
            key={item.title}
            className={`rounded-[22px] p-5 ${
              item.type === "warning" ? "bg-amber-50" : "bg-emerald-50"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{item.icon}</div>

              <div className="flex-1">
                <p
                  className={`font-black ${
                    item.type === "warning"
                      ? "text-orange-600"
                      : "text-emerald-700"
                  }`}
                >
                  {item.title}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-xs font-black ${
                  item.type === "warning"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Costs() {
  return (
    <div className="min-h-screen bg-[#f4f8f1] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <main className="px-6 py-5 xl:px-7">
          <Topbar />

          <HeroSection />

          <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {costStats.map((item) => (
              <StatCard key={item.title} item={item} />
            ))}
          </section>

          <section className="mb-5 grid gap-4 xl:grid-cols-[1fr_1.05fr]">
            <CostBreakdownCard />
            <RecentCostsCard />
          </section>

          <section className="grid gap-4 xl:grid-cols-[1fr_1.05fr]">
            <SeasonCostsCard />
            <SuggestionCard />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Costs;