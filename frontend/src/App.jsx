import { useEffect, useState } from "react";
import { checkBackendHealth } from "./services/api";

function App() {
  const [backendStatus, setBackendStatus] = useState("Đang kiểm tra...");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadBackendStatus() {
      try {
        const data = await checkBackendHealth();
        setBackendStatus("Đang hoạt động");
        setMessage(data.message);
      } catch (error) {
        setBackendStatus("Không kết nối được");
        setMessage(error.message);
      }
    }

    loadBackendStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50 p-8 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              🌾
            </div>

            <div>
              <h1 className="text-3xl font-bold text-green-700">FarmMate</h1>
              <p className="text-slate-500">
                Hệ thống quản lý mùa vụ và hỗ trợ nông dân Việt Nam
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
              <p className="text-sm text-slate-500">Frontend</p>
              <h2 className="mt-2 text-xl font-bold text-green-700">
                Đang chạy
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                React + Vite + Tailwind CSS
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm text-slate-500">Backend</p>
              <h2 className="mt-2 text-xl font-bold text-blue-700">
                {backendStatus}
              </h2>
              <p className="mt-2 text-sm text-slate-500">{message}</p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <p className="text-sm text-slate-500">Trạng thái hệ thống</p>
              <h2 className="mt-2 text-xl font-bold text-amber-700">
                Fullstack bước đầu
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Frontend đã gọi được API backend.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold">Bước tiếp theo</h3>
            <p className="mt-2 text-slate-600">
              Sau khi kết nối frontend và backend thành công, mình sẽ bắt đầu
              dựng Dashboard FarmMate tiếng Việt hiện đại giống bản mockup đã
              chốt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;