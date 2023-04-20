/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./MovingItems.css";

import { skills } from "../../assets/Data";

const LinkLines = ({ positions, color }) => {
  const lines = [];

  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const from = positions[i];
      const to = positions[j];
      const path = `M${from.x + 50},${from.y + 25} L${to.x + 50},${to.y + 25}`;

      lines.push(
        <path
          key={`${i}-${j}`}
          d={path}
          stroke={color || "#fff"}
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      );
    }
  }

  return (
    <svg
      className="link-lines"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    >
      {lines.map((line) => line)}
    </svg>
  );
};

const MovingItem = ({ label, gradient, x, y, value }) => (
  <motion.div
    className="moving-item"
    style={{
      background: gradient,
      x,
      y,
      width: 70 + (50 * value) / 100,
      height: 30 + (30 * value) / 100,
      fontSize: 0.8 + (0.5 * value) / 100 + "em",
    }}
  >
    {label}
  </motion.div>
);

const getNewDirection = (direction, position, containerSize, itemSize) => {
  let newDirection = { ...direction };
  if (position.x <= 1 || position.x >= containerSize.width - itemSize.width) {
    newDirection.x *= -1;
  }
  if (
    position.y <= 61 / 2 ||
    position.y >= containerSize.height - itemSize.height
  ) {
    newDirection.y *= -1;
  }
  return newDirection;
};
const useRandomPosition = (
  containerRef,
  initialPosition,
  initialDirection,
  speed
) => {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(initialDirection);
  useEffect(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const itemSize = { width: 120, height: 60 };

    const updatePosition = () => {
      let newPosition = {
        x: position.x + direction.x * speed,
        y: position.y + direction.y * speed,
      };

      const newDirection = getNewDirection(
        direction,
        newPosition,
        containerRect,
        itemSize
      );
      setDirection(newDirection);

      setPosition(newPosition);
    };

    const interval = setInterval(updatePosition, 12);
    return () => clearInterval(interval);
  }, [containerRef, position, direction, speed]);

  return position;
};

const MovingItemsGroup = ({
  type,
  skills,
  gradient,
  containerRef,
  cornerIndex,
  color,
  containerSize,
}) => {
  let offset = 100;
  const cornerPositions = [
    { x: offset, y: offset },
    { x: containerSize.width - offset - 135, y: offset },
    {
      x: containerSize.width - offset - 135,
      y: containerSize.height - offset - 65,
    },
    {
      x: offset,
      y: containerSize.height - offset - 65,
    },
  ];
  let cin = cornerPositions[cornerIndex];
  const positions = skills.map((_, index) => {
    let x = 1 + Math.random() * 2;
    x = index % 2 === 0 ? x : -x;
    let y = 1 + Math.random() * 2;
    y = index % 2 === 0 ? y : -y;
    return useRandomPosition(
      containerRef,
      {
        x: Math.random() * offset + cin.x,
        y: Math.random() * offset + cin.y,
      },
      { x: x, y: y },
      0.4
    );
  });

  return (
    <div className={`moving-items-group ${type}`}>
      <LinkLines positions={positions} color={color} />
      {positions.map((item, index) => (
        <MovingItem
          key={index}
          label={skills[index].name}
          value={skills[index].value}
          gradient={gradient}
          x={item.x}
          y={item.y}
        />
      ))}
    </div>
  );
};

const MovingItems = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="moving-items-container" ref={containerRef}>
      {containerSize &&
        skills.map((group, index) => (
          <MovingItemsGroup
            containerRef={containerRef}
            key={index}
            cornerIndex={index}
            color={group.stroke}
            type={group.type}
            skills={group.skills}
            gradient={group.gradient}
            containerSize={containerSize}
          />
        ))}
    </div>
  );
};

export default MovingItems;
