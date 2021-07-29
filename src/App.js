import { useState } from "react";
import "./App.css";

function DragableDiv(props) {
  const [dragging, updateDragging] = useState({
    drag: false,
    location: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 0,
      y: 0,
    },
  });

  // make an on mouse down handler that will start the movable react state
  const onMouseDown = (e) => {
    updateDragging({
      drag: true,
      location: {
        x: dragging.location.x,
        y: dragging.location.y,
      },
      offset: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  };

  // make an on mouse up handler that will stop the movable react state
  const onMouseUp = (e) => {
    updateDragging({
      drag: false,
      location: dragging.location,
      offset: dragging.offset,
    });
  };

  // make an on mouse move handler that will update the movable react state
  const onMouseMove = (e) => {
    if (dragging.drag) {
      updateDragging({
        drag: true,
        location: {
          x: dragging.location.x + e.movementX,
          y: dragging.location.y + e.movementY,
        },
        offset: dragging.offset,
      });
    }
  };

  // make an on mouse leave handler that will stop the movable react state
  const onMouseLeave = (e) => {
    updateDragging({
      drag: false,
      location: dragging.location,
      offset: dragging.offset,
    });
  };

  return (
    <div
      style={{
        width: 300,
        height: 300,
        background: "#444",
        top: dragging.location.y,
        left: dragging.location.x,
        position: "absolute",
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    ></div>
  );
}

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <DragableDiv />
    </div>
  );
}

export default App;
