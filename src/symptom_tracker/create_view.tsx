import "./views.scss";
import InputField from "./input_field";
import React, { FormEvent, ChangeEvent, useState } from "react";
import { useDiaries } from "../hooks/useDiaries";

interface CreateViewStateProps {
  diary: string;
}

interface CreateViewComponentProps {
  updateView: Function;
}

export default function CreateView({ updateView }: CreateViewComponentProps) {
  const [inputValues, setInputValues] = useState<CreateViewStateProps>({
    diary: "",
  });
  const [created, setCreated] = useState<boolean>(false);
  const { createDiary, diaries } = useDiaries();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    createDiary(inputValues.diary);
    setCreated(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name !== "diary") return;
    setInputValues({
      [e.target.name]: e.target.value,
    });
  };

  const createAnother = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setCreated(false);
  };

  return created ? (
    <>
      <p>
        Sweet! You have added a diary to your entries. Decide what to do next.
      </p>
      <button onClick={createAnother}>Create Another</button>
      <button
        onClick={() => {
          updateView("view");
        }}
      >
        View Diaries
      </button>
    </>
  ) : (
    <form className="create-view-form" onSubmit={handleSubmit}>
      <InputField
        title="Diary Name"
        name="diary"
        placeholder="Diary Name"
        onChange={handleChange}
        required={true}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
