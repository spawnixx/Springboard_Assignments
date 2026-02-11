function MissionFilter({ setFilter }) {
  const STATUSES = ["All", "Planned", "Active", "Completed"];

  return (
    <>
      {STATUSES.map((status, index) => (
        <button key={index} onClick={() => setFilter(status)}>
          {status}
        </button>
      ))}
    </>
  );
}

export default MissionFilter;
