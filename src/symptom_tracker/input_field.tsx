import "./views.scss";

interface InputFieldProps {
  title: string;
  placeholder: string;
  name: string;
  required: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputField({
  title,
  placeholder,
  name,
  onChange,
  required,
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
        required
      />
    </span>
  );
}
