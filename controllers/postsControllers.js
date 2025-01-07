const posts = require('../immagini_e_post/posts');

//index route
const index = (req, res) => {
  res.json(posts)
};

//show route
const show = (req, res) => {
  const post = posts.find(post => post.id == req.params.id);
  if (!post) {
    res.status(404);
    return res.json({
      message: "post not found",
      status: 404,
      error: "not found"
    })
  }
  res.json(post)
};

//destroy route
const destroy = (req, res) => {
  const post = posts.find(partecipante => partecipante.id == req.params.id);
  if (!post) {
    res.status(404)
    return res.json ({
      message: 'post not found',
      status: 404,
      error: "not found"
    })
  }
  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  
  res.sendStatus(204);
};

module.exports = {
  index, 
  show,
  destroy
}