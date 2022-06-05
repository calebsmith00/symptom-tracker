import { DiaryTypes } from "../hooks/useDiaries";
import { useState } from "react";
import "./views.scss";
import React from "react";

interface DiaryCardProps {
  diary: DiaryTypes;
  handleDiarySelect: React.MouseEventHandler<HTMLParagraphElement>;
}

export default function DiaryCard({
  diary,
  handleDiarySelect,
}: DiaryCardProps) {
  return (
    <div className="diary-card">
      <p onClick={handleDiarySelect} style={{ width: "100%" }}>
        {diary.diary}
      </p>
    </div>
  );
}
