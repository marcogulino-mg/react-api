import { useState, useEffect } from "react";
import axios from "axios";
// IMPORT Post.jsx
import Post from "./Post";

export default function Postslist() {
  //Empty new post
  const initialPost = {
    title: "",
    content: "",
    image: "",
    tags: [],
  };

  // Variabile di stato per contenere la risposta dell'API
  const [post, setPost] = useState([]);
  // Variabile di stato per contenere i dati del form
  const [newPost, setNewPost] = useState(initialPost);

  // Funzione che svolge la chiamata AJAX tramite la libreria Axios
  // Stampa Elenco Posts (GET)
  function showsPosts() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }

  // Funzione che svolge la chiamata AJAX tramite la libreria Axios
  // Aggiunta Post (POST)
  function addPost(e) {
    //Prevengo il refresh della pagina a causa del submit del form
    e.preventDefault();

    //Invio dati all'API con Method POST
    axios
      .post("http://localhost:3000/posts", newPost)
      .then((res) => {
        setPost((currentPost) => [...currentPost, res.data]);
      })
      .catch((err) => console.log(err));

    // Reset del form
    setNewPost(initialPost);
  }

  // Funzione che cambierà i values degli elementi del form
  // sfruttando l'evento onChange
  function handleFormData(e) {
    // In caso di value del campo tags
    const value =
      e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

    setNewPost((currentNewPost) => ({
      ...currentNewPost,
      [e.target.name]: value,
    }));
  }

  // Render the list of posts requested by the API when the page is loaded
  useEffect(showsPosts, [post]);

  return (
    <div>
      <form action="#" className="add-post" onSubmit={addPost}>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          onChange={handleFormData}
          value={newPost.title}
          name="title"
          id="title"
        />
        <label htmlFor="content">Content </label>
        <textarea
          name="content"
          onChange={handleFormData}
          value={newPost.content}
          id="content"
        ></textarea>
        <label htmlFor="image">Image </label>
        <input
          type="text"
          onChange={handleFormData}
          value={newPost.image}
          name="image"
          id="image"
        />
        <label htmlFor="tags">Tags </label>
        <input
          type="text"
          onChange={handleFormData}
          value={newPost.tags}
          name="tags"
          id="tags"
        />
        <button className="addpost-btn">Crea Post</button>
      </form>
      <Post postList={post} />
    </div>
  );
}
