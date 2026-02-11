import React from "react";

function MissionAction({ missionId, onUpdateMissionStatus }) {
  return (
    <>
      <button onClick={() => onUpdateMissionStatus(missionId, "Active")}>
        Launch
      </button>

      <button onClick={() => onUpdateMissionStatus(missionId, "Completed")}>
        Complete
      </button>
    </>
  );
}

export default MissionAction;
