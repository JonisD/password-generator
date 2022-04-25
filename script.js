// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  return 10;
};

const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - 1 - (min + 1)) + min);
};

const getRandomCharacters = (passwordCriteria, length) => {
  const characters = passwordCriteria
    .map((availableCharacters) => {
      const random_characters = [];

      for (let i = 0; i < length; i++) {
        const randomIndex = randomIntFromInterval(
          0,
          availableCharacters.length
        );

        const randomCharacter = availableCharacters[randomIndex];

        random_characters.push(randomCharacter);
      }
      return random_characters;
    })
    .flat();

  return characters;
};

const createRandomPassword = (passwordLength, passwordCriteria) => {
  // partition the password length into 4 evenly parts, one for each password criteria.
  const eachCriteriaLength = Math.round(passwordLength / passwordCriteria.length)