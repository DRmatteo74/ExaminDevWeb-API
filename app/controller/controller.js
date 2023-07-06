// Renvoie tousl les posts
exports.getPosts = (req, res, next) => {
    res.status(200).json({
      posts: [{ title: 'Get post', content: 'This is the first post!' }]
    });
};
  
// Créer un post
exports.createPost = (req, res, next) => {
    // Récupération des données de la requête
    const title = req.body.title;
    const content = req.body.content;

    // Envoi d'une réponse indiquant que le post a été créé avec succès
    res.status(201).json({
      message: 'Post created successfully!',
      // Retourne l'article nouvellement créé
      post: { id: new Date().toISOString(), title: title, content: content }
    });
};
  