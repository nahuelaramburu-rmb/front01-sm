const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);
const InputField2 = ({ label, name, value, onChange, options }) => (
  <div className="form-group">
    <label>{label}</label>
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export { InputField, InputField2 };
