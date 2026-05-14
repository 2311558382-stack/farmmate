import { useState } from "react";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  Plus,
  Search,
  Sprout,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import {
  growthStages,
  seasonAlerts,
  seasons,
  seasonStats,
  todayTasks,
  weeklySchedule,
} from "../data/seasonsData";

function Topbar() {
  return (
    <header className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex w-full max-w-[560px] items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          placeholder="Tìm mùa vụ, cây trồng, ruộng..."
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
      <div className="absolute inset-0">
        <img
          src="/images/season-hero.png"
          alt="Mùa vụ FarmMate"
          className="h-full w-full object-cover"
          style={{
            objectPosition: "72% 75%",
            transform: "scale(1.18)",
          }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 34%, rgba(255,255,255,0.52) 58%, rgba(255,255,255,0.12) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(244,248,241,0.05) 0%, rgba(244,248,241,0.02) 55%, rgba(244,248,241,0.18) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[250px] flex-col justify-between gap-6 p-7 xl:flex-row xl:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
            <Sprout size={16} />
            Mùa vụ
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-950">
            Quản lý mùa vụ
          </h1>

          <p className="mt-2 max-w-[680px] text-slate-600">
            Theo dõi cây đang ở giai đoạn nào, hôm nay cần làm gì và khi nào thu hoạch.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700">
          <Plus size={18} />
          Thêm mùa vụ mới
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
          <h3 className="mt-1 text-2xl font-black text-slate-950">
            {item.value}
          </h3>
          <p className="mt-1 text-xs font-bold text-emerald-600">
            {item.note}
          </p>
        </div>
      </div>
    </div>
  );
}

function SeasonProgressList({ selectedSeason, onSelectSeason }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-black text-slate-950">Tiến độ mùa vụ</h3>
        <p className="mt-1 text-sm text-slate-400">
          Bác chọn một mùa vụ để xem chi tiết bên cạnh.
        </p>
      </div>

      <div className="space-y-3">
        {seasons.map((season) => {
          const isActive = selectedSeason.id === season.id;

          return (
            <button
              key={season.id}
              onClick={() => onSelectSeason(season)}
              className={`w-full rounded-[22px] border p-4 text-left transition ${
                isActive
                  ? "border-emerald-400 bg-emerald-50/70"
                  : "border-slate-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/40"
              }`}
            >
              <div className="grid gap-4 md:grid-cols-[80px_1fr_1.1fr] md:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-4xl">
                  {season.image}
                </div>

                <div>
                  <p className="font-black text-slate-950">{season.crop}</p>
                  <p className="mt-1 text-sm text-slate-500">{season.field}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                      Giai đoạn:{" "}
                      <span className="font-black text-slate-950">
                        {season.stage}
                      </span>
                    </p>

                    <p className="text-sm font-black text-slate-950">
                      {season.progress}%
                    </p>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div
                      className={`h-2 rounded-full ${
                        season.statusType === "warning"
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                      }`}
                      style={{ width: `${season.progress}%` }}
                    />
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Thu hoạch dự kiến:{" "}
                    <span className="font-bold text-slate-900">
                      {season.harvestDate}
                    </span>
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button className="mt-5 w-full rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-700">
        Xem tất cả mùa vụ →
      </button>
    </div>
  );
}

function GrowthStageCard({ season }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-black text-slate-950">
          Cây đang ở giai đoạn nào?
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          {season.crop} - {season.field}
        </p>
      </div>

      <div className="flex items-start justify-between gap-2">
        {growthStages.map((stage) => (
          <div key={stage.label} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border text-2xl ${
                stage.active
                  ? "border-emerald-300 bg-emerald-100 ring-4 ring-emerald-50"
                  : stage.done
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-slate-200 bg-white grayscale"
              }`}
            >
              {stage.icon}
            </div>

            <p
              className={`mt-3 text-center text-sm font-bold ${
                stage.active ? "text-emerald-700" : "text-slate-600"
              }`}
            >
              {stage.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 border-t border-slate-100 pt-5 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-400">Đã ở giai đoạn này</p>
          <p className="mt-1 text-2xl font-black text-slate-950">
            {season.currentStageDays}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Chuyển giai đoạn tiếp theo vào
          </p>
          <p className="mt-1 text-2xl font-black text-emerald-600">
            {season.nextStageDate}
          </p>
        </div>
      </div>
    </div>
  );
}

function TodayTasksCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-black text-slate-950">
          Hôm nay cần làm gì?
        </h3>

        <button className="text-sm font-bold text-emerald-600">
          Xem tất cả →
        </button>
      </div>

      <div className="space-y-3">
        {todayTasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-3 rounded-[22px] bg-slate-50 p-4"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${task.color}`}
            >
              {task.icon}
            </div>

            <div className="flex-1">
              <p className="font-black text-slate-950">{task.title}</p>
              <p className="mt-1 text-sm text-slate-500">{task.crop}</p>
            </div>

            <p className="text-sm font-medium text-slate-400">{task.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeeklyScheduleCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-black text-slate-950">
          Lịch chăm sóc tuần này
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Nhìn nhanh để biết ngày nào cần tưới, bón phân hoặc kiểm tra.
        </p>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weeklySchedule.map((day) => (
          <div
            key={day.day}
            className={`rounded-[18px] p-3 text-center ${
              day.day === "T5"
                ? "bg-emerald-100 ring-2 ring-emerald-200"
                : "bg-slate-50"
            }`}
          >
            <p className="text-sm font-black text-slate-950">{day.day}</p>
            <p className="mt-1 text-xs text-slate-400">{day.date}</p>

            <div className="mt-3 space-y-2">
              {day.tasks.map((task) => (
                <div
                  key={task}
                  className="rounded-xl bg-white px-2 py-2 text-[11px] font-bold text-slate-600 shadow-sm"
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full rounded-2xl bg-sky-50 px-4 py-3 text-sm font-black text-sky-600">
        Xem lịch đầy đủ →
      </button>
    </div>
  );
}

function AlertCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-black text-slate-950">Cảnh báo mùa vụ</h3>

        <button className="text-sm font-bold text-emerald-600">
          Xem tất cả →
        </button>
      </div>

      <div className="space-y-3">
        {seasonAlerts.map((alert) => (
          <div
            key={alert.title}
            className={`rounded-[22px] p-4 ${
              alert.type === "warning" ? "bg-amber-50" : "bg-emerald-50"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{alert.icon}</div>

              <div className="flex-1">
                <p className="font-black text-slate-950">{alert.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {alert.description}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  alert.type === "warning"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {alert.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Seasons() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  return (
    <div className="min-h-screen bg-[#f4f8f1] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <main className="px-6 py-5 xl:px-7">
          <Topbar />

          <HeroSection />

          <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {seasonStats.map((item) => (
              <StatCard key={item.title} item={item} />
            ))}
          </section>

          <section className="mb-5 grid gap-4 xl:grid-cols-[1.05fr_0.95fr_0.85fr]">
            <SeasonProgressList
              selectedSeason={selectedSeason}
              onSelectSeason={setSelectedSeason}
            />

            <div className="space-y-4">
              <GrowthStageCard season={selectedSeason} />
              <WeeklyScheduleCard />
            </div>

            <div className="space-y-4">
              <TodayTasksCard />
              <AlertCard />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Seasons;