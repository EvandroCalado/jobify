import { FC, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="form-row">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input className="form-input" {...rest} />
    </div>
  );
};
