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

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
