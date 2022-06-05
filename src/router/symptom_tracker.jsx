import { Routes, Route } from "react-router-dom";
import SymptomTrackerMain from "../symptom_tracker/main";

export default function SymptomTrackerRoute() {
    return (
        <Routes>
            <Route path="/symptom-tracker" element={<SymptomTrackerMain />} />
        </Routes>
    )
}