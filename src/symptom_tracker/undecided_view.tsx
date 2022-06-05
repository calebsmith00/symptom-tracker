import React from "react";

interface UndecidedViewProps {
  updateView: Function;
}

export default function UndecidedView({
  updateView,
}: UndecidedViewProps): JSX.Element {
  return (
    <>
      <p className="symptom-choice">
        First off, decide how you want to get started below..
      </p>
      <span>
        <button
          className="btn btn-view-tracker"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            updateView("view");
          }}
        >
          View All
        </button>
        <button
          className="btn btn-create-tracker"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            updateView("create");
          }}
        >
          Add New Entry
        </button>
      </span>
    </>
  );
}
