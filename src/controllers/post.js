const router = require('express').Router();
const { post } = require('../services');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');
const postValidMiddle = require('../validators/middlewares/postValidMiddle');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

const createPostsCategories = async (createdPost, categories) => {
  createdPost.addCategories(categories);
};

router.get('/', tokenValidMiddle, async (_req, res, next) => {
  try {
    const result = await post.getAll();
  
    res.status(STATUS_OK).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', tokenValidMiddle, postValidMiddle, async (req, res, next) => {
    const { body, user, categories } = req;
    
    try {
      const result = await post.createIt({ body, user });
      createPostsCategories(result, categories);
 
      res.status(STATUS_CREATED).json(result);
    } catch (error) {
      next(error);
    }
});

router.get('/:id', tokenValidMiddle, async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await post.getById(id);
    if (result.message) return next(result);
    res.status(STATUS_OK).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;