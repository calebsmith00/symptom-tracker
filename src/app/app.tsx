import Navbar from '../navigation/navbar'
import SymptomTrackerRoute from '../router/symptom_tracker';
import "./app.scss";

export default function App() {
    return (
        <div className="app">
            <Navbar />

            <SymptomTrackerRoute />
        </div>
    )
}