import { AddSymptomInput } from "./add_symptom";

interface SymptomProps {
  symptoms: AddSymptomInput[];
}

export default function Symptoms({ symptoms }: SymptomProps): JSX.Element {
  return (
    <>
      {symptoms.map((symptom: AddSymptomInput) => {
        return <span>Symptom: {symptom.symptomName}</span>;
      })}
    </>
  );
}
