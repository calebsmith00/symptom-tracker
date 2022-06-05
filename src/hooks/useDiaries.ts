import { useState, useEffect } from "react";

export interface DiaryTypes {
  id: number;
  diary: string;
  symptoms: string[];
}

interface DiaryProps {
  createDiary: Function;
  diaries: DiaryTypes[] | Array<any>;
}

export const useDiaries = (): DiaryProps => {
  const [diaries, setDiaries] = useState<DiaryTypes[] | Array<any>>([]);

  const createDiary = (title: string): DiaryTypes[] => {
    const updatedDiaries: DiaryTypes[] = [
      ...diaries,
      {
        id: diaries.length,
        diary: title,
        symptoms: [],
      },
    ];

    setDiaries(updatedDiaries);

    sessionStorage.setItem("diaries", JSON.stringify(updatedDiaries));
    return updatedDiaries;
  };

  useEffect(() => {
    const blankJSON = JSON.stringify([]);
    const diarySession: string = sessionStorage.getItem("diaries") || blankJSON;

    const parsedSession: DiaryTypes[] | Array<any> =
      JSON.parse(diarySession) || [];
    if (parsedSession.length < 1) sessionStorage.setItem("diaries", blankJSON);

    setDiaries(parsedSession);
  }, []);

  return { createDiary, diaries };
};
