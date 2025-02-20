import { useState } from "react";
import axios from "axios";
// IMPORT Post.jsx
import Post from "./Post";

export default function Postslist() {
  // Variabile di stato per contenere la risposta dell'API
  const [post, setPost] = useState([]);

  // Funzione che svolge la chiamata AJAX tramite la libreria Axios
  function fetchPost() {
    axios.get("http://localhost:3000/posts").then((res) => setPost(res.data));
  }

  return (
    <div>
      <ul>
        <Post />
      </ul>
    </div>
  );
}
