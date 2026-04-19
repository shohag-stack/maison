export default function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="form-label">
        {label}{required && <span className="text-brand ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}