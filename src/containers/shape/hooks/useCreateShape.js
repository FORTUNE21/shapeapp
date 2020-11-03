import useGetCoordinates from "./useGetCoordinates";

const GetCoordinates = (size, number) => {
  return useGetCoordinates(size, number);
};

const useCreateShape = (
  shapeSize,
  setShapeSize,
  shapeType,
  setShapeType,
  shapeAndInput,
  setShapeAndInput,
  setShapeProperties,
  setThrowError
) => {
  if (shapeSize >= 5 && shapeSize <= 130) {
    setThrowError("");
    var theShape;

    if (shapeAndInput.showInputHideShape === true) {
      setShapeAndInput({
        showInputHideShape: false,

        showShapeHideInput: true
      });

      if (shapeType === "Circle") {
        theShape = {
          shapeSize: shapeSize,

          shapeCoords: shapeSize,

          shapeType: "Circle",

          shapeColor: "black",

          isPolygon: false,

          isCircle: true
        };

        setShapeProperties(theShape);
      } else {
        const coordinates = GetCoordinates(
          Number.parseFloat(shapeSize),

          Number.parseFloat(shapeType)
        );

        theShape = {
          shapeSize: shapeSize,

          shapeCoords: coordinates,

          shapeType: shapeType,

          shapeColor: "black",

          isPolygon: true,

          isCircle: false
        };

        setShapeProperties(theShape);
      }

      localStorage.setItem("LastShape", JSON.stringify(theShape));
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

export default useCreateShape;
