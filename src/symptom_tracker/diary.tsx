import { useEffect, useState } from "react";
import { useDiaries, DiaryTypes } from "../hooks/useDiaries";
import AddSymptom from "./add_symptom";
import Symptoms from "./symptoms";
import "./diary.scss";

interface DiaryProps {
  id: number;
  backButtonPressed: Function;
}

export default function Diary({
  id,
  backButtonPressed,
}: DiaryProps): JSX.Element {
  const { retrieveDiary, diaries } = useDiaries();
  const [activeDiary, setActiveDiary] = useState<DiaryTypes | undefined>(
    undefined
  );
  const [inProgress, setInProgress] = useState<boolean>(false);

  useEffect(() => {
    setActiveDiary(retrieveDiary(id));
  }, [id, retrieveDiary, diaries]);

  const handleSymptomCreation = (backButtonClicked: boolean) => {
    setInProgress(backButtonClicked);
  };

  return activeDiary ? (
    <>
      <div className="active-diary">Diary: {activeDiary.diary}</div>
      {inProgress ? (
        <AddSymptom
          diary={activeDiary}
          handleSymptomCreation={handleSymptomCreation}
        />
      ) : (
        <>
          <div className="symptoms">
            <Symptoms symptoms={activeDiary.symptoms} />
          </div>
          <span
            className="btn btn-add-symptom"
            onClick={() => handleSymptomCreation(true)}
          >
            Add Symptom
          </span>

          <span className="btn btn-back" onClick={() => backButtonPressed()}>
            Go Back
          </span>
        </>
      )}
    </>
  ) : (
    <p>No</p>
  );
}
