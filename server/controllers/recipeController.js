// import user model
const { Recipe } = require('../models/index');


module.exports = {
  // get a single recipe by either their id or their username
  async getSingleRecipe({ recipe = null, params }, res) {
    const foundRecipe = await Recipe.findOne({
      $or: [{ _id: recipe ? recipe._id : params.id }, { recipeName: params.recipeName }],
    });

    if (!foundRecipe) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }
    console.log(foundRecipe);
    res.json(foundRecipe);
  },

  async getAllRecipes(req, res) {
    const recipes = await Recipe.find();

    if (!recipes) return res.status(400).json({ message: "No recipes found."});

    console.log(recipes);
    res.json(recipes);
  },

  async createRecipe({ body }, res) {
    const recipe = await Recipe.create(body);

    if (!recipe) return res.status(400).json({ message: "Unable to create new recipe." });

    console.log(recipe);
    res.json(recipe);
  },

  async updateRecipe({ body, params } , res) {
    console.log('body', body);
    console.log('id', params.id);
    const id = params.id
    const updated = {
      title: body.title,
      description: body.description,
      directions: body.directions,
      notes: body.notes,
      image: body.image,
      link: body.link
    };

    const recipe = await Recipe.findOneAndUpdate(id, updated, {
      new: true
    });


    if (!recipe) return res.status(400).json({ message: "Could not update recipe"});

    console.log(recipe);
    res.json(recipe);
  },

  async deleteRecipe({ id }, res) {
    const recipe = await Recipe.findOneAndDelete(id);

    if (!recipe) return res.status(400).json({ message: "Could not delete recipe"});

    console.log(recipe);
    res.json(recipe);
  }

};
