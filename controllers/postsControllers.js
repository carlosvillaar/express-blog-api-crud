const posts = require('../immagini_e_post/posts');

//index route
const index = (req, res) => {
  let postsList = posts;
  if (req.query.tags){
    postsList = posts.filter(post => post.tags.includes(req.query.tags))
  }
  res.json(postsList)
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

//store route
const store = (req, res) => {
  const id = posts.at(-1).id + 1;
  const newPost = {
    id,
    ...req.body
  };
  posts.push(newPost);
  res.json(posts);
};

//update route
const update = (req, res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id == id);
  if (!post){
    res.status(404);
    return res.json({
      message: "post not found",
      status: 404,
      error: "not found"
    })
  };
  //aggiorno le proprieta del post
  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

res.json(post);
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
  store,
  update,
  destroy
}