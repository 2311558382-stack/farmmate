import {
  Bell,
  CalendarDays,
  ChevronDown,
  Search,
  Settings,
} from "lucide-react";

function Topbar() {
  return (
    <header className="mb-7 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p className="text-sm font-bold text-emerald-600">
          Bảng điều khiển FarmMate
        </p>

        <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">
          Tổng quan nông trại
        </h2>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex w-full items-center gap-3 rounded-3xl border border-slate-100 bg-white px-5 py-4 shadow-sm md:w-[360px]">
          <Search size={20} className="text-slate-400" />

          <input
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            placeholder="Tìm ruộng, mùa vụ, cây trồng..."
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="relative rounded-3xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <Bell size={20} className="text-slate-700" />
            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </button>

          <button className="hidden items-center gap-2 rounded-3xl border border-slate-100 bg-white px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm lg:flex">
            <CalendarDays size={18} className="text-emerald-600" />
            22 tháng 5, 2025
            <ChevronDown size={16} />
          </button>

          <button className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <Settings size={20} className="text-slate-700" />
          </button>

          <div className="flex items-center gap-3 rounded-3xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
              👨‍🌾
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold text-slate-900">
                Nguyễn Văn Nam
              </p>
              <p className="text-xs text-slate-400">Chủ nông trại</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;