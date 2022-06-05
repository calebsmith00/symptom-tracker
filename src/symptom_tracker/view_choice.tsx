import "./symptom-tracker.scss";
import { useState } from "react";
import UndecidedView from "./undecided_view";
import CreateView from "./create_view";
import ShowViews from "./show_views";

export default function ViewChoice(): JSX.Element | JSX.Element[] {
  const [view, setView] = useState<string>("undecided");
  const updateView = (view: string): void => {
    setView(view);
  };

  return (
    <>
      {view === "undecided" && <UndecidedView updateView={updateView} />}
      {view === "create" && <CreateView updateView={updateView} />}
      {view === "view" && <ShowViews />}
    </>
  );
}
