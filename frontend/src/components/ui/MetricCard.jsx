import { motion } from "framer-motion";

function MetricCard({ title, value, note, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-slate-200/70"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-50 transition group-hover:scale-125" />

      <div className="relative z-10">
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-3xl ${color}`}
        >
          {Icon && <Icon size={26} />}
        </div>

        <p className="text-sm font-semibold text-slate-500">{title}</p>

        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
          {value}
        </h3>

        <p className="mt-3 text-xs font-bold text-emerald-600">{note}</p>
      </div>
    </motion.div>
  );
}

export default MetricCard;