const { User } = require('../models');

const STATUS_NOT_FOUND = 404;
const MSG_USER_NOT_FOUND = 'User does not exist';

const getAll = async () => {
  try {
    const result = await User.findAll();

    return result;
  } catch (error) {
    return error.message;
  }
};

const createIt = async (userData) => {
  try {
    const result = await User.create(userData);

    return result;
  } catch (error) {
    return error.message;
  }
};

const getById = async (id) => {
  try {
    const result = await User.findByPk(id);
    if (result === null) {
      return { 
        status: STATUS_NOT_FOUND, 
        message: MSG_USER_NOT_FOUND,
      };
    }

    return result;
  } catch (error) {
    return error;
  }
};

const deleteIt = async (userId) => {
  try {
    await User.destroy({ where: { id: userId } });
  } catch (error) {
    return error;
  }
};

module.exports = { getAll, createIt, getById, deleteIt };