const posts = require('../immagini_e_post/posts');

//index route
const index = (req, res) => {
  res.json(posts)
};

//show route
const show = (req, res) => {
  res.json(posts.find(post => post.id == req.params.id)) 
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