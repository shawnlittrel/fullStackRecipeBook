const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const recipeSchema = new Schema({
  title:
  {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
    required: true,
  },
  notes: {
    type: String
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = {Recipe, recipeSchema};