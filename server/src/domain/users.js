import dbClient from '../utils/dbClient.js';

export const findAllUsers = () =>
  dbClient.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findUserById = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });

export const findUserByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
  });

export const findUserByUsername = (username) =>
  dbClient.profile.findUnique({
    where: { username: username },
  });

export const findUsersByRole = (role) =>
  dbClient.user.findMany({
    where: {
      role: role,
    },
  });

export const createUser = (
  lowerCaseEmail,
  hashedPassword,
  lowerCaseFirstName,
  lowerCaseLastName,
  lowerCaseCountry,
  lowerCaseCity,
  lowerCaseUsername,
  gender,
  dob,
  agreedToTerms,
  profileImage,
  bio,
  agreedToNewsletter,
  university,
  profession,
  title
) =>
  dbClient.user.create({
    data: {
      email: lowerCaseEmail,
      password: hashedPassword,
      agreedToTerms: agreedToTerms,
      agreedToNewsletter: agreedToNewsletter,
      profile: {
        create: {
          firstName: lowerCaseFirstName,
          lastName: lowerCaseLastName,
          country: lowerCaseCountry,
          city: lowerCaseCity,
          gender: gender,
          dob: dob,
          profileImage: profileImage,
          bio: bio,
          username: lowerCaseUsername,
          profession: profession,
          university: university,
          title: title,
        },
      },
    },
  });

export const findVerification = (userId) =>
  dbClient.userVerification.findUnique({
    where: {
      userId: userId,
    },
  });

export const findResetRequest = (userId) =>
  dbClient.passwordReset.findUnique({
    where: {
      userId: userId,
    },
  });

export const resetUserPassword = (userId, password) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      password: password,
    },
  });

export const deleteUserById = (userId) =>
  dbClient.user.delete({
    where: {
      id: userId,
    },
  });

export const updateUserById = (userId, email, firstName, lastName, country) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      email,
      firstName,
      lastName,
      country,
    },
  });
