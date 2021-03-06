const router = require('express').Router();
const { post } = require('../services');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');
const postValidMiddle = require('../validators/middlewares/postValidMiddle');
const postUpdateValidMiddle = require('../validators/middlewares/postUpdateValidMiddle');

const STATUS_CREATED = 201;
const STATUS_OK = 200;
const STATUS_NO_CONTENT = 204;

const createPostsCategories = async (createdPost, categories) => {
  createdPost.addCategories(categories);
};
/** This block is commented for Future new feature in 'router.put('/:id' feature
const updatePostsCategories = async (updatedPost, categories) => {
  updatedPost.setCategories(categories);
};
*/
router.get('/', tokenValidMiddle, async (_req, res, next) => {
  try {
    const result = await post.getAll();
  
    res.status(STATUS_OK).json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/search', tokenValidMiddle, async (req, res, next) => {
  const { query } = req;
  try {
    const result = await post.getAllFiltered(query);
  
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

router.put('/:id', tokenValidMiddle, postUpdateValidMiddle, async (req, res, next) => {
  const { id: postId } = req.params;
  const { body } = req;
  // const { body, categories } = req; // commented for Future new feature
  try {
    const result = await post.updateIt({ postId, body });
    if (result.message) return next(result);
    // updatePostsCategories(result, categories); commented for Future new feature

    res.status(STATUS_OK).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', tokenValidMiddle, async (req, res, next) => {
  const { id: postId } = req.params;

  try {
    await post.deleteIt({ req, res, next }, postId);
  
    res.status(STATUS_NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;