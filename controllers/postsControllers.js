const posts = require('../immagini_e_post/posts');

//index route
const index = (req, res) => {
  res.send('elenco dei posts')
};

//show route
const show = (req, res) => {
  res.send("visualizzo un post in base all'id" + req.params.id) 
};

//destroy route
const destroy = (req, res) => {
  res.send("elimino un post in base all'id" + req.params.id) 
};

module.exports = {
  index, 
  show,
  destroy
}