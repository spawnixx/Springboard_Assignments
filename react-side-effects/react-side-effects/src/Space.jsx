import React, { useState, useEffect } from "react";
import Star from "./Star";
import "./Space.css";
export default function Space() {
  const [stars, setStars] = useState([]);
  const STAR_SIZE = 25;

  function destroyStar(id) {
    setStars((stars) => stars.filter((star) => star.id !== id));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        x: Math.random() * (window.innerWidth - STAR_SIZE),
        y: Math.random() * (window.innerHeight - STAR_SIZE),
      };
      setStars((prevStars) => [...prevStars, newStar]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space">
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          x={star.x}
          y={star.y}
          destroyStar={destroyStar}
        />
      ))}
    </div>
  );
}
