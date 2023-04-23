/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";

import "./MovingItems.css";

import { skills } from "../../assets/Data";

const LinkLine = ({ position1, position2, color, activeType }) => {
  const [fromX1, setFromX1] = useState(position1.x.get());
  const [fromY1, setFromY1] = useState(position1.y.get());
  const [fromX2, setFromX2] = useState(position2.x.get());
  const [fromY2, setFromY2] = useState(position2.y.get());
  useEffect(() => {
    const unsubX1 = position1.x.on("change", () =>
      setFromX1(position1.x.get())
    );
    const unsubY1 = position1.y.on("change", () =>
      setFromY1(position1.y.get())
    );
    const unsubX2 = position2.x.on("change", () =>
      setFromX2(position2.x.get())
    );
    const unsubY2 = position2.y.on("change", () =>
      setFromY2(position2.y.get())
    );
    return () => {
      unsubX1();
      unsubY1();
      unsubX2();
      unsubY2();
    };
  }, [position1, position2]);

  const path = `M${fromX1 + position1.width / 2},${
    fromY1 + position1.height / 2
  } L${fromX2 + position2.width / 2},${fromY2 + position2.height / 2}`;

  return (
    <svg
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
        filter:
          activeType !== null
            ? activeType === position1.type
              ? ""
              : "grayscale(1)"
            : "",
      }}
    >
      <path
        d={path}
        stroke={color || "#fff"}
        strokeWidth={
          activeType !== null
            ? activeType === position1.type
              ? "1"
              : "0.5"
            : "0.5"
        }
        fill="none"
        opacity={0.4}
      />
    </svg>
  );
};

const getNewDirection = (direction, position, containerSize, itemSize) => {
  let newDirection = { ...direction };
  if (position.x <= 0 || position.x >= containerSize.width - itemSize.width) {
    newDirection.x *= -1;
  }
  if (position.y <= 65) {
    newDirection.y = 1.5;
  } else if (position.y >= containerSize.height - itemSize.height) {
    newDirection.y = -1.5;
  }
  return newDirection;
};

const MovingItem = ({
  label,
  position,
  containerSize,
  containerRef,
  gradient,
  fontSize,
  borderRadius,
  value,
  setActiveType,
  activeType,
  setSpeed,
  speed,
}) => {
  let x = position.x;
  let y = position.y;
  const [direction, setDirection] = useState(position.initialDir);
  useEffect(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const itemSize = {
      width: position.width,
      height: position.height,
    };

    const updatePosition = () => {
      let newX = x.get() - direction.x * speed;
      let newY = y.get() + direction.y * speed;
      position.x.set(newX);
      position.y.set(newY);

      if (newX <= 0 || newX >= containerSize.width - itemSize.width) {
        newX = Math.max(
          0,
          Math.min(newX, containerSize.width - itemSize.width)
        );
        position.x.set(newX);
      }

      const newDirection = getNewDirection(
        direction,
        { x: newX, y: newY },
        containerRect,
        itemSize
      );
      setDirection(newDirection);
    };

    const interval = setInterval(updatePosition, 1000 / 60);
    return () => clearInterval(interval);
  }, [containerRef, position, x, y, speed, direction, containerSize]);
  return (
    <motion.div
      transition={{ duration: 5 }}
      onHoverStart={() => {
        setActiveType(position.type);
        setSpeed(0.04);
      }}
      onHoverEnd={() => {
        setActiveType(null);
        setSpeed(0.22);
      }}
      drag
      dragElastic={0}
      dragMomentum={false}
      className="moving-item"
      dragConstraints={{
        left: 0,
        right: containerSize.width - position.width,
        top: 0,
        bottom: containerSize.height - position.height,
      }}
      style={{
        x,
        y,
        width: position.width,
        height: position.height,
        color:
          activeType !== null
            ? activeType === position.type
              ? "white"
              : "var(--gray3)"
            : "",
        zIndex:
          activeType !== null
            ? activeType === position.type
              ? 10000
              : value
            : value,
        fontSize: fontSize,
        borderRadius: borderRadius,
        background:
          activeType !== null
            ? activeType === position.type
              ? gradient
              : gradient
            : gradient,
        filter:
          activeType !== null
            ? activeType === position.type
              ? "grayScale(0)"
              : "grayscale(1)"
            : "grayScale(0)",
        opacity:
          activeType !== null ? (activeType === position.type ? 1 : 0.4) : 1,
      }}
    >
      {label}
    </motion.div>
  );
};

const MovingItemsGroup = ({
  skills,
  type,
  containerSize,
  containerRef,
  gradient,
  cornerIndex,
  color,
  setActiveType,
  activeType,
  setSpeed,
  speed,
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

  const positions = skills.map((skill, index) => {
    const width = 70 + (50 * skill.value) / 100;
    const height = 30 + (30 * skill.value) / 100;
    const fontSize = 0.5 + (0.7 * skill.value) / 100 + "em";
    const borderRadius = 15 + (6 * skill.value) / 100;
    let x = 1 + Math.random() * 2;
    x = index % 2 === 0 ? x : -x;
    let y = 1 + Math.random() * 2;
    y = index % 2 === 0 ? y : -y;
    let initialDir = { x: x, y: y };
    const position = {
      x: useMotionValue(Math.random() * offset + cin.x),
      y: useMotionValue(Math.random() * offset + cin.y),
      width,
      height,
      fontSize,
      borderRadius,
      initialDir,
      type: type,
    };
    return position;
  });

  return (
    <div>
      {positions.map((position, index) => (
        <MovingItem
          key={index}
          label={skills[index].name}
          position={position}
          containerSize={containerSize}
          gradient={gradient}
          fontSize={position.fontSize}
          borderRadius={position.borderRadius}
          value={skills[index].value}
          containerRef={containerRef}
          setActiveType={setActiveType}
          activeType={activeType}
          setSpeed={setSpeed}
          speed={speed}
        />
      ))}
      {positions.map((position1, index1) =>
        positions
          .slice(index1)
          .map((position2, index2) => (
            <LinkLine
              key={index1 * 1000 + index2}
              position1={position1}
              position2={position2}
              color={color}
              setActiveType={setActiveType}
              activeType={activeType}
            />
          ))
      )}
    </div>
  );
};

const MovingItems = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [speed, setSpeed] = useState(0.22);
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

  let types = skills.map((skill) => skill.type);

  return (
    <div className="moving-items-container" ref={containerRef}>
      <AnimatePresence mode="wait">
        <motion.div className="activeType" key={activeType}>
          {activeType !== null
            ? types.map((type) =>
                type === activeType ? (
                  <motion.div
                    key={type}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeType}
                  </motion.div>
                ) : (
                  ""
                )
              )
            : ""}
        </motion.div>
      </AnimatePresence>
      {containerSize &&
        skills.map((group, index) => (
          <MovingItemsGroup
            key={index}
            type={group.type}
            skills={group.skills}
            containerSize={containerSize}
            gradient={group.gradient}
            cornerIndex={index}
            color={group.stroke}
            containerRef={containerRef}
            setActiveType={setActiveType}
            activeType={activeType}
            setSpeed={setSpeed}
            speed={speed}
          />
        ))}
    </div>
  );
};

export default MovingItems;
