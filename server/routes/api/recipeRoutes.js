const router = require('express').Router();

const {
  getSingleRecipe,
  getAllRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe
} = require('../../controllers/recipeController');

router
  .route('/')
  .post(createRecipe)
  .get(getAllRecipes);

router.route('/:id')
  .get(getSingleRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe)

  module.exports = router;