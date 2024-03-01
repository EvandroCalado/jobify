import { FC } from "react";

interface SelectProps {
  jobData: {
    OPTION1: string;
    OPTION2: string;
    OPTION3: string;
  };
  label: string;
  name: string;
}

export const Select: FC<SelectProps> = ({ jobData, label, name }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={jobData.OPTION1 || ""}
      >
        {Object.values(jobData).map((job) => {
          if (job) {
            return (
              <option key={job} value={job.toString()}>
                {job}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
