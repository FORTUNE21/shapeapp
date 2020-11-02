import React, { useState } from "react";

import "../styles/shape.css";

const Shape = () => {
  const [shapeAndInput, setShapeAndInput] = useState({
    showInputHideShape: true,
    showShapeHideInput: false
  });

  const [shapeSize, setShapeSize] = useState(0);

  const [shapeType, setShapeType] = useState(3); //set initial to triangle

  const [throwError, setThrowError] = useState("");

  const [shapeProperties, setShapeProperties] = useState({
    shapeSize: 0,
    shapeType: "Triangle",
    coordinates: "",
    shapeColor: "black",
    isPolygon: true,
    isCircle: false
  });

  const GetCoordinates = (size, number) => {
    var X, Y, angle, i;

    var coords = "";

    const radius = size;

    const centreX = 140;

    const centreY = 130;

    for (i = 0; i < number; i++) {
      angle = (2 * Math.PI) / number;

      X = centreX + radius * Math.cos(i * angle);

      Y = centreY + radius * Math.sin(i * angle);

      coords = coords + X + "," + Y + " ";
    }

    return coords;
  };

  const CreateShape = () => {
    if (shapeSize >= 5 && shapeSize <= 130) {
      setThrowError("");

      if (shapeAndInput.showInputHideShape === true) {
        setShapeAndInput({
          showInputHideShape: false,

          showShapeHideInput: true
        });

        if (shapeType === "Circle") {
          setShapeProperties({
            shapeSize: shapeSize,

            shapeCoords: shapeSize,

            shapeType: "Circle",

            shapeColor: "black",

            isPolygon: false,

            isCircle: true
          });
        } else {
          const coordinates = GetCoordinates(
            Number.parseFloat(shapeSize),

            Number.parseFloat(shapeType)
          );

          setShapeProperties({
            shapeSize: shapeSize,

            shapeCoords: coordinates,

            shapeType: shapeType,

            shapeColor: "black",

            isPolygon: true,

            isCircle: false
          });
        }
      } else {
        setShapeAndInput({
          showInputHideShape: true,

          showShapeHideInput: false
        });
        setShapeSize(0);
        setShapeType(3);
      }
    } else {
      setThrowError("Ops! The shape length must be between 5 and 130");
    }
  };

  const UpdateColor = color => {
    setShapeProperties({
      shapeSize: shapeProperties.shapeSize,

      shapeCoords: shapeProperties.shapeCoords,

      shapeType: shapeProperties.shapeType,

      shapeColor: color,

      isPolygon: shapeProperties.isPolygon,

      isCircle: shapeProperties.isCircle
    });
  };

  const RedChoose = () => {
    UpdateColor("red");
  };
  const GreenChoose = () => {
    UpdateColor("green");
  };
  const YellowChoose = () => {
    UpdateColor("yellow");
  };
  const BlueChoose = () => {
    UpdateColor("blue");
  };
  const WhiteChoose = () => {
    UpdateColor("white");
  };
  const BlackChoose = () => {
    UpdateColor("black");
  };
  return (
    <>
      {shapeAndInput.showInputHideShape && (
        <div className="shapeBody">
          <h3 className="welcome">Hi there!</h3>
          <h5 className="welcome__text">
            Welcome to this simple shape drawing app
          </h5>
          <h6 className="error">{throwError}</h6>
          <div className="shape__input__container">
            <h5 className="shape__input__text">
              Length of the shape (5 - 130)
            </h5>

            <input
              type="text"
              className="shape__input"
              placeholder="Enter the length of the shape"
              onChange={event => setShapeSize(event.target.value)}
            />
          </div>

          <div className="shape__input__container">
            <h5 className="shape__input__text">Choose shape</h5>

            <select
              className="shape__select"
              onChange={event => setShapeType(event.target.value)}
            >
              <option value="3" defaultValue>
                Triangle
              </option>

              <option value="Circle">Circle</option>

              <option value="4">Rectangle</option>

              <option value="5">Pentagon</option>

              <option value="6">Hexagon</option>

              <option value="7">Heptagon</option>

              <option value="8">Octagon</option>

              <option value="9">Nonagon</option>

              <option value="10">Decagon</option>
            </select>
          </div>

          <div className="shape__create__btn__container">
            <button className="shape__create__btn" onClick={CreateShape}>
              CREATE
            </button>
          </div>
        </div>
      )}

      {shapeAndInput.showShapeHideInput && (
        <div className="shapeBody shapeBody--fix">
          <h3 className="welcome">Voila!</h3>

          <h4 className="cancelIcon" onClick={CreateShape}>
            Cancel
          </h4>

          <h5 className="welcome__text">Your shape is ready.</h5>

          <div className="shape__result">
            <svg className="the__shape">
              {shapeProperties.isPolygon && (
                <polygon
                  points={shapeProperties.shapeCoords}
                  className="shape"
                  fill={shapeProperties.shapeColor}
                />
              )}
              {/* shapeProperties.shapeSize */}
              {shapeProperties.isCircle && (
                <circle
                  cx="140"
                  cy="130"
                  r={shapeProperties.shapeSize}
                  className="shape"
                  fill={shapeProperties.shapeColor}
                />
              )}
            </svg>
          </div>

          <div className="chooseColor">
            <h5>Change shape color</h5>

            <h6 className="redChoose" onClick={RedChoose}>
              RED
            </h6>

            <h6 className="greenChoose" onClick={GreenChoose}>
              GREEN
            </h6>

            <h6 className="yellowChoose" onClick={YellowChoose}>
              YELLOW
            </h6>

            <h6 className="blueChoose" onClick={BlueChoose}>
              BLUE
            </h6>
            <h6 className="whiteChoose" onClick={WhiteChoose}>
              White
            </h6>
            <h6 className="blackChoose" onClick={BlackChoose}>
              Black
            </h6>
          </div>
        </div>
      )}
    </>
  );
};

export default Shape;
