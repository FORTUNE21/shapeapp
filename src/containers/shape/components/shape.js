import React, { useState } from "react";

import useCreateShape from "../hooks/useCreateShape.js";

import "../styles/shape.css";

const CallShape = (
  shapeSize,

  setShapeSize,

  shapeType,

  setShapeType,

  shapeAndInput,

  setShapeAndInput,

  setShapeProperties,

  setThrowError
) => {
  return useCreateShape(
    shapeSize,

    setShapeSize,

    shapeType,

    setShapeType,

    shapeAndInput,

    setShapeAndInput,

    setShapeProperties,

    setThrowError
  );
};

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

    shapeType: 3,

    coordinates: "",

    shapeColor: "black",

    isPolygon: true,

    isCircle: false
  });

  const CreateShape = () => {
    return CallShape(
      shapeSize,

      setShapeSize,

      shapeType,

      setShapeType,

      shapeAndInput,

      setShapeAndInput,

      setShapeProperties,

      setThrowError
    );
  };

  const ReCreateShape = () => {
    if (localStorage.getItem("LastShape") !== null) {
      const lastShape = JSON.parse(localStorage.getItem("LastShape"));

      return CallShape(
        lastShape.shapeSize,

        setShapeSize,

        lastShape.shapeType,

        setShapeType,

        shapeAndInput,

        setShapeAndInput,

        setShapeProperties,

        setThrowError
      );
    } else {
      setThrowError("Ops! You don't have any recently created shape");
    }
  };

  const CloseShape = () => {
    if (shapeAndInput.showInputHideShape === true) {
      setShapeAndInput({
        showInputHideShape: false,

        showShapeHideInput: true
      });
    }else{
      setShapeAndInput({
        showInputHideShape: true,

        showShapeHideInput: false
      });
    }
  }
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

            {/* <button className="shape__create__btn" onClick={CreateShape}>
              CREATE
            </button> */}
          </div>
          <div className="viewLast__container">
            <span className="viewLast" onClick={ReCreateShape}>
              View Last Shape
            </span>
          </div>
        </div>
      )}

      {shapeAndInput.showShapeHideInput && (
        <div className="shapeBody shapeBody--fix">
          <h3 className="welcome">Voila!</h3>

          <h4 className="cancelIcon" onClick={CloseShape}>
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
