import { useMemo, useState } from "react";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  Filter,
  MapPin,
  Plus,
  Search,
} from "lucide-react";
import {
  CircleMarker,
  MapContainer,
  Polygon,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Sidebar from "../components/layout/Sidebar";
import { fieldActivities, fields, fieldStats } from "../data/fieldsData";

const statusStyle = {
  good: {
    fill: "#16a34a",
    stroke: "#22c55e",
    badge: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-600",
  },
  warning: {
    fill: "#f59e0b",
    stroke: "#fbbf24",
    badge: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
  },
  danger: {
    fill: "#ef4444",
    stroke: "#f87171",
    badge: "bg-red-100 text-red-700",
    text: "text-red-600",
  },
};

function Topbar() {
  return (
    <header className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex w-full max-w-[560px] items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          placeholder="Tìm ruộng, thửa, cây trồng..."
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

function StatCard({ item }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl ${item.color}`}
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

function FieldMap({ selectedField, onSelectField }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <h3 className="text-lg font-black text-slate-950">Bản đồ ruộng</h3>
          <p className="mt-1 text-sm text-slate-400">
            Hiển thị vị trí và tình trạng từng thửa ruộng
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
            Lớp bản đồ
          </button>
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
            Vệ tinh
          </button>
        </div>
      </div>

      <div className="relative h-[480px]">
        <MapContainer
          center={[11.3145, 106.099]}
          zoom={15}
          scrollWheelZoom
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {fields.map((field) => {
            const style = statusStyle[field.statusType];

            return (
              <Polygon
                key={field.id}
                positions={field.boundary}
                pathOptions={{
                  color: selectedField.id === field.id ? "#047857" : style.stroke,
                  fillColor: style.fill,
                  fillOpacity: selectedField.id === field.id ? 0.5 : 0.28,
                  weight: selectedField.id === field.id ? 4 : 2,
                }}
                eventHandlers={{
                  click: () => onSelectField(field),
                }}
              >
                <Popup>
                  <div className="min-w-[160px]">
                    <b>{field.name}</b>
                    <p>{field.crop}</p>
                    <p>Diện tích: {field.area}</p>
                    <p>Sức khỏe: {field.health}%</p>
                  </div>
                </Popup>
              </Polygon>
            );
          })}

          {fields.map((field) => {
            const style = statusStyle[field.statusType];

            return (
              <CircleMarker
                key={`marker-${field.id}`}
                center={field.location}
                radius={11}
                pathOptions={{
                  color: "#ffffff",
                  fillColor: style.fill,
                  fillOpacity: 1,
                  weight: 3,
                }}
                eventHandlers={{
                  click: () => onSelectField(field),
                }}
              >
                <Popup>
                  <b>{field.code}</b>
                  <br />
                  {field.status}
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>

        <div className="absolute bottom-4 left-4 z-[500] rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
          <p className="mb-3 text-sm font-black text-slate-900">Chú giải</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-emerald-500" />
              <span>Tốt</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-amber-500" />
              <span>Cần kiểm tra</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-red-500" />
              <span>Rủi ro cao</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldList({ selectedField, onSelectField }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-black text-slate-950">
            Danh sách ruộng
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Chọn ruộng để xem chi tiết
          </p>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-slate-600">
          <Filter size={18} />
        </button>
      </div>

      <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
        <Search size={17} className="text-slate-400" />
        <input
          placeholder="Tìm theo tên ruộng..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="space-y-3">
        {fields.map((field) => {
          const style = statusStyle[field.statusType];
          const isActive = selectedField.id === field.id;

          return (
            <button
              key={field.id}
              onClick={() => onSelectField(field)}
              className={`w-full rounded-[22px] border p-4 text-left transition ${
                isActive
                  ? "border-emerald-400 bg-emerald-50/70 shadow-sm"
                  : "border-slate-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/40"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white ${
                      field.statusType === "danger"
                        ? "bg-red-500"
                        : field.statusType === "warning"
                          ? "bg-amber-500"
                          : "bg-emerald-600"
                    }`}
                  >
                    {field.code.split(" ")[1] || field.id}
                  </div>

                  <div>
                    <p className="font-black text-slate-950">{field.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{field.crop}</p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}
                >
                  {field.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-500">
                <span>{field.area}</span>
                <span>Độ ẩm: {field.moisture}%</span>
                <span>Sức khỏe: {field.health}%</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <p className="mt-1 font-black text-slate-900">{value}</p>
    </div>
  );
}

function ProgressItem({ label, value, color }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-600">{label}</p>
        <span className="text-lg font-black text-slate-950">{value}%</span>
      </div>

      <div className="mt-3 h-2 rounded-full bg-slate-200">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function FieldDetail({ field }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-emerald-600">Chi tiết ruộng</p>
          <h3 className="mt-1 text-xl font-black text-slate-950">
            {field.name}
          </h3>
        </div>

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700">
          {field.code}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[220px_1fr]">
        <div className="overflow-hidden rounded-[22px] bg-emerald-100">
          <div className="flex h-full min-h-[190px] items-center justify-center bg-gradient-to-br from-emerald-100 to-lime-100 text-6xl">
            🌾
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <InfoItem label="Cây trồng" value={field.crop} />
          <InfoItem label="Diện tích" value={field.area} />
          <InfoItem label="Ngày gieo" value={field.seededDate} />
          <InfoItem label="Ngày thu hoạch dự kiến" value={field.harvestDate} />
          <InfoItem label="Loại đất" value={field.soil} />
          <InfoItem label="Trạng thái" value={field.status} />
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <ProgressItem
          label="Sức khỏe ruộng"
          value={field.health}
          color="bg-emerald-500"
        />
        <ProgressItem
          label="Độ ẩm đất"
          value={field.moisture}
          color="bg-sky-500"
        />
        <ProgressItem
          label="Tiến độ tưới"
          value={field.irrigation}
          color="bg-lime-500"
        />
      </div>
    </div>
  );
}

function ActivityPanel() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-black text-slate-950">
          Lịch chăm sóc gần đây
        </h3>

        <button className="text-sm font-bold text-emerald-600">
          Xem tất cả →
        </button>
      </div>

      <div className="space-y-3">
        {fieldActivities.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-[22px] bg-slate-50 p-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
              {item.icon}
            </div>

            <div className="flex-1">
              <p className="font-bold text-slate-950">{item.title}</p>
              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </div>

            <p className="text-sm font-medium text-slate-400">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Fields() {
  const [selectedField, setSelectedField] = useState(fields[0]);

  const selectedStyle = useMemo(
    () => statusStyle[selectedField.statusType],
    [selectedField]
  );

  return (
    <div className="min-h-screen bg-[#f4f8f1] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <main className="px-6 py-5 xl:px-7">
          <Topbar />

          <section className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                <MapPin size={16} />
                Bản đồ quản lý thửa ruộng
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950">
                Quản lý ruộng
              </h1>

              <p className="mt-2 text-slate-500">
                Theo dõi vị trí, diện tích, cây trồng và sức khỏe từng thửa ruộng.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700">
              <Plus size={18} />
              Thêm ruộng mới
            </button>
          </section>

          <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {fieldStats.map((item) => (
              <StatCard key={item.title} item={item} />
            ))}
          </section>

          <section className="mb-5 grid gap-4 xl:grid-cols-[1.55fr_0.95fr]">
            <FieldMap
              selectedField={selectedField}
              onSelectField={setSelectedField}
            />

            <FieldList
              selectedField={selectedField}
              onSelectField={setSelectedField}
            />
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.35fr_0.95fr]">
            <FieldDetail field={selectedField} selectedStyle={selectedStyle} />
            <ActivityPanel />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Fields;