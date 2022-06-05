import "./views.scss";
import InputField from "./input_field";
import { FormEvent, ChangeEvent, useState } from "react";
import { useDiaries } from "../hooks/useDiaries";

interface CreateViewProps {
  diary: string;
}

export default function CreateView() {
  const [inputValues, setInputValues] = useState<CreateViewProps>({
    diary: "",
  });
  const { createDiary, diaries } = useDiaries();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    createDiary(inputValues.diary);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name !== "diary") return;
    setInputValues({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="create-view-form" onSubmit={handleSubmit}>
        <InputField
          title="Diary Name"
          name="diary"
          placeholder="Diary Name"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
