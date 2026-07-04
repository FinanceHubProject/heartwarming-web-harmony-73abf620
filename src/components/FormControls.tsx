import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

/**
 * Presentational form controls. Forms are uncontrolled — pages read
 * values from FormData on submit. See join.tsx / contact.tsx.
 */

const baseControl =
  "w-full rounded-xl border border-plum-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 transition focus:border-plum-500 focus:outline-none focus:ring-2 focus:ring-plum-200";

interface FieldShellProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}

function FieldShell({ label, htmlFor, required, children }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-plum-900">
        {label}
        {required && <span className="text-plum-500"> *</span>}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export function TextInput({ label, name, type = "text", required, placeholder }: TextInputProps) {
  return (
    <FieldShell label={label} htmlFor={name} required={required}>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={baseControl}
      />
    </FieldShell>
  );
}

interface TextAreaProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export function TextArea({ label, name, required, placeholder, rows = 4 }: TextAreaProps) {
  return (
    <FieldShell label={label} htmlFor={name} required={required}>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`${baseControl} resize-y`}
      />
    </FieldShell>
  );
}

interface SelectInputProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

export function SelectInput({ label, name, options, required }: SelectInputProps) {
  return (
    <FieldShell label={label} htmlFor={name} required={required}>
      <select id={name} name={name} required={required} defaultValue="" className={baseControl}>
        <option value="" disabled>
          Select an option…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

/** Confirmation card shown after a form is submitted. */
export function FormSuccess({ message }: { message: string }) {
  return (
    <div className="rounded-2xl bg-plum-50 p-8 text-center ring-1 ring-plum-100">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-plum-600 shadow-card">
        <CheckCircle2 className="h-7 w-7" />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-plum-900">Thank you!</h3>
      <p className="mt-2 text-sm text-ink/70">{message}</p>
    </div>
  );
}
