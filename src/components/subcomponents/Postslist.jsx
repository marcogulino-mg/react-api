import { useState, useEffect } from "react";
import axios from "axios";
// IMPORT Post.jsx
import Post from "./Post";

export default function Postslist() {
  // Variabile di stato per contenere la risposta dell'API
  const [post, setPost] = useState([]);

  // Funzione che svolge la chiamata AJAX tramite la libreria Axios
  function showsPosts() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(showsPosts, [post]);

  return (
    <div>
      <form action="#" className="add-post">
        <label htmlFor="title">Title </label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">Content </label>
        <textarea name="content" id="content"></textarea>
        <label htmlFor="image">Image </label>
        <input type="text" name="image" id="image" />
        <label htmlFor="tags">Tags </label>
        <input type="text" name="tags" id="tags" />
        <button className="addpost-btn">Crea Post</button>
      </form>
      <Post postList={post} />
    </div>
  );
}
