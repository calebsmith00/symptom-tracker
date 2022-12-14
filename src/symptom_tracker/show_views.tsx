import { DiaryTypes, useDiaries } from "../hooks/useDiaries";
import DiaryCard from "./diary_card";
import React, { useState } from "react";
import "./views.scss";
import Diary from "./diary";

interface ShowViewProps {
  updateView: Function;
}

export default function ShowViews({ updateView }: ShowViewProps): JSX.Element {
  const { diaries } = useDiaries();
  const [diarySelected, setDiarySelected] = useState<boolean>(false);
  const [activeDiary, setActiveDiary] = useState<DiaryTypes>({
    id: 0,
    diary: "",
    symptoms: [],
  });

  const handleDiarySelect = (diary: DiaryTypes) => {
    setDiarySelected(true);
    setActiveDiary(diary);
  };

  return diarySelected ? (
    <Diary
      backButtonPressed={() => setDiarySelected(false)}
      id={activeDiary.id}
    />
  ) : (
    <div className="views">
      <h2>Select a diary: </h2>

      <div className="diaries">
        {diaries.map((diary: DiaryTypes) => {
          return (
            <DiaryCard
              key={diary.id}
              diary={diary}
              handleDiarySelect={handleDiarySelect}
            />
          );
        })}
        <div className="diary-card" onClick={() => updateView("undecided")}>
          <p>Go Back</p>
        </div>
      </div>
    </div>
  );
}
