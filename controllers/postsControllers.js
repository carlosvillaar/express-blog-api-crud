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
  res.send("elimino un post in base all'id" + req.params.id) 
};

module.exports = {
  index, 
  show,
  destroy
}