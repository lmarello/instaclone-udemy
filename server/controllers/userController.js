const bcryptjs = require("bcryptjs");

const User = require("../models/user");

async function createUser(user) {
  const newUser = { ...user };

  newUser.email = user.email.toLowerCase();
  newUser.username = user.username.toLowerCase();

  const { password, email, username } = newUser;

  const emailAlreadyExists = await User.findOne({
    email,
  });

  const errors = [];

  if (emailAlreadyExists)
    errors.push("El email ingresado ya se encuentra utilizado.");

  const usernameAlreadyExists = await User.findOne({
    username,
  });

  if (usernameAlreadyExists)
    errors.push("El nombre de usuario ingresado ya se encuentra utilizado.");

  if (errors.length) throw new Error(errors.join(" "));

  const saltRounds = 10;
  const salt = await bcryptjs.genSaltSync(saltRounds);

  newUser.password = await bcryptjs.hash(password, salt);

  try {
    const userCreated = new User(newUser);
    userCreated.save();
    return userCreated;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function getUser() {
  console.log("Get User");
  return null;
}

module.exports = {
  createUser,
  getUser,
};
