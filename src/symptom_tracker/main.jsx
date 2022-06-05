import "./symptom-tracker.scss";
import ViewChoice from "./view_choice";

export default function SymptomTrackerMain() {
  return (
    <div className="symptom-tracker">
      <p className="paragraph-header">Hey! We're glad you could make it. 👋</p>

      <ViewChoice />
    </div>
  );
}
