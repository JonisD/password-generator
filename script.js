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
  const eachCriteriaLength = Math.round(
    passwordLength / passwordCriteria.length
  );

  // get random characters that make up the password
  const random_characters = getRandomCharacters(
    passwordCriteria,
    eachCriteriaLength
  );

  // trim the password down to the specified length if applicable + convert array to string
  const random_password =
    random_characters.length > passwordLength
      ? random_characters.slice(0, passwordLength).join("")
      : random_characters.join("");

  return random_password;
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
