import React, { useState } from "react";
import { DiaryTypes, useDiaries } from "../hooks/useDiaries";
import "./diary.scss";
import InputField from "./input_field";

interface AddSymptomProps {
  handleSymptomCreation: Function;
  diary: DiaryTypes;
}

export interface AddSymptomInput {
  symptomName: string;
  symptomDescription: string;
}

export default function AddSymptom({
  handleSymptomCreation,
  diary,
}: AddSymptomProps): JSX.Element {
  const [symptomInput, setSymptomInput] = useState<AddSymptomInput>({
    symptomName: "",
    symptomDescription: "",
  });
  const { addSymptom } = useDiaries();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptomInput({
      ...symptomInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLSpanElement>) => {
    addSymptom(diary, symptomInput);
    handleSymptomCreation(false);
  };

  return (
    <>
      <div className="add-symptom-form">
        <InputField
          title="Symptom Name"
          placeholder="Symptom Name"
          name="symptomName"
          required={true}
          onChange={handleChange}
        />

        <InputField
          title="Symptom Description"
          placeholder="Symptom Description"
          name="symptomDescription"
          required={true}
          onChange={handleChange}
        />

        <div className="buttons">
          <span className="btn btn-submit" onClick={handleSubmit}>
            Submit
          </span>
          <span
            className="btn btn-back"
            onClick={() => handleSymptomCreation(false)}
          >
            Go Back
          </span>
        </div>
      </div>
    </>
  );
}
