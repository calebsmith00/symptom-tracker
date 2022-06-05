import { useState, useEffect } from "react";
import { AddSymptomInput } from "../symptom_tracker/add_symptom";

export interface DiaryTypes {
  id: number;
  diary: string;
  symptoms: AddSymptomInput[];
}

interface DiaryProps {
  createDiary: Function;
  retrieveDiary: Function;
  addSymptom: Function;
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

  const retrieveDiary = (id: number): DiaryTypes | undefined => {
    if (!diaries) return;

    const foundDiary: DiaryTypes | undefined = diaries.filter(
      (diary) => diary.id === id
    )[0];
    if (!foundDiary) return;

    return foundDiary;
  };

  const addSymptom = (diary: DiaryTypes, symptom: AddSymptomInput) => {
    if (!diaries) return;
    diary.symptoms.push(symptom);

    const updatedDiaries: DiaryTypes[] = diaries.map((currentDiary) => {
      if (currentDiary.id === diary.id) return diary;
      return currentDiary;
    });

    setDiaries(updatedDiaries);
    sessionStorage.setItem("diaries", JSON.stringify(updatedDiaries));
  };

  useEffect(() => {
    const blankJSON = JSON.stringify([]);
    const diarySession: string = sessionStorage.getItem("diaries") || blankJSON;

    const parsedSession: DiaryTypes[] | Array<any> =
      JSON.parse(diarySession) || [];
    if (parsedSession.length < 1) sessionStorage.setItem("diaries", blankJSON);

    setDiaries(parsedSession);
  }, []);

  return { createDiary, diaries, retrieveDiary, addSymptom };
};
