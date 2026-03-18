import React, { useEffect, useRef } from "react";
import "./Star.css";

export default function Star({ id, destroyStar, x, y }) {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;
    star.focus();
  }, []);

  function handleClick() {
    destroyStar(id);
  }
  return (
    <div
      ref={starRef}
      className="star"
      onClick={handleClick}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
      tabIndex="0"
    >
      ⭐
    </div>
  );
}
