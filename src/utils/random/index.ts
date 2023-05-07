export const generateRandomId = () => {
  const arrayNumbers = Array.from(
    { length: 4 },
    () => generateRandomInteger(1000, 10000),
  );

  return arrayNumbers.join('-');
};

export const generateRandomInteger = (min: number, max: number) => Math.floor(
  min + Math.random() * (max - min + 1),
);
