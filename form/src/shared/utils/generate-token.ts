export const generateToken = (tokenLength: number = 4) => {
  const token = Math.floor(Math.random() * 10 ** tokenLength)
    .toString()
    .padStart(tokenLength, '0');
  return token;
};
