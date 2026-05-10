function SectionCard({ title, subtitle, action, icon, children, className = "" }) {
  return (
    <section
      className={`rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md ${className}`}
    >
      {(title || subtitle || action || icon) && (
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            {icon && (
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                {icon}
              </div>
            )}

            <div>
              {title && (
                <h3 className="text-lg font-black tracking-tight text-slate-950">
                  {title}
                </h3>
              )}

              {subtitle && (
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {action && <div>{action}</div>}
        </div>
      )}

      {children}
    </section>
  );
}

export default SectionCard;