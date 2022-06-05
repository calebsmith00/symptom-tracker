import { DiaryTypes, useDiaries } from "../hooks/useDiaries";
import DiaryCard from "./diary_card";
import React, { useState } from "react";
import "./views.scss";
import Diary from "./diary";

export default function ShowViews(): JSX.Element {
  const { diaries } = useDiaries();
  const [diarySelected, setDiarySelected] = useState<boolean>(false);

  const handleDiarySelect = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setDiarySelected(true);
  };

  return diarySelected ? (
    <Diary />
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
      </div>
    </div>
  );
}
