import {
  Bot,
  CloudSun,
  FileText,
  Home,
  Leaf,
  LineChart,
  Settings,
  Sprout,
  Tractor,
  Wallet,
  Wheat,
} from "lucide-react";

const menuItems = [
  { label: "Tổng quan", icon: Home, active: true },
  { label: "Ruộng", icon: Wheat },
  { label: "Mùa vụ", icon: Sprout },
  { label: "Chi phí", icon: Wallet },
  { label: "Thu hoạch", icon: Tractor },
  { label: "Chẩn đoán AI", icon: Bot },
  { label: "Thời tiết", icon: CloudSun },
  { label: "Giá nông sản", icon: LineChart },
  { label: "Báo cáo", icon: FileText },
  { label: "Cài đặt", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen border-r border-slate-100 bg-white px-5 py-6 lg:flex lg:flex-col">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <Leaf size={28} />
        </div>

        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">
            FarmMate
          </h1>
          <p className="text-xs font-medium text-slate-400">
            Nông nghiệp thông minh
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                item.active
                  ? "bg-emerald-50 text-emerald-700 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="rounded-[1.7rem] bg-gradient-to-br from-emerald-500 to-lime-500 p-5 text-white shadow-xl shadow-emerald-200">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl backdrop-blur">
            🚜
          </div>

          <h3 className="text-lg font-black">Nâng cấp Pro</h3>

          <p className="mt-2 text-sm leading-6 text-white/90">
            Mở khóa phân tích nâng cao, không giới hạn số ruộng và hỗ trợ ưu tiên.
          </p>

          <button className="mt-5 rounded-2xl bg-white px-4 py-2 text-sm font-black text-emerald-700 transition hover:bg-emerald-50">
            Nâng cấp ngay →
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-[1.5rem] bg-slate-50 p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
            👨‍🌾
          </div>

          <div>
            <p className="text-sm font-black text-slate-950">Nguyễn Văn Nam</p>
            <p className="text-xs text-slate-400">Chủ nông trại</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;