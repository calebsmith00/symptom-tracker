import { DiaryTypes } from "../hooks/useDiaries";
import "./views.scss";
import React from "react";

interface DiaryCardProps {
  diary: DiaryTypes;
  handleDiarySelect: Function;
}

export default function DiaryCard({
  diary,
  handleDiarySelect,
}: DiaryCardProps) {
  return (
    <div
      className="diary-card"
      onClick={() => {
        handleDiarySelect(diary);
      }}
    >
      <p>{diary.diary}</p>
    </div>
  );
}
