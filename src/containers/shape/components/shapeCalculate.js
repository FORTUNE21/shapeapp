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

const CreateShape = (
  shapeSize,
  shapeType,
  setShapeProperties,
  setThrowError,
  shapeAndInput,
  setShapeAndInput,
  setShapeSize,
  setShapeType
) => {
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
    setThrowError("Ops! The shape length must be between 10 and 100");
  }
};

module.exports.CreateShape = CreateShape;