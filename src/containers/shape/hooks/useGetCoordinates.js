const useGetCoordinates = (size, number) => {
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

export default useGetCoordinates;
