import "./views.scss";

interface InputFieldProps {
  title: string;
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputField({
  title,
  placeholder,
  name,
  onChange,
}: InputFieldProps): JSX.Element {
  return (
    <span className="input-field">
      <label htmlFor={name}>{title}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="input-element"
        onChange={onChange}
      />
    </span>
  );
}
