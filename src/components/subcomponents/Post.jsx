export default function Post(props) {
  return (
    <ul>
      {props.postList !== "undefined" && props.postList.length > 0 ? (
        props.postList.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} />
            <p>{post.tags.join(", ")}</p>
            <button onClick={() => props.onClick(post.id)}>Remove</button>
          </li>
        ))
      ) : (
        <h2>Lista Posts Vuota</h2>
      )}
    </ul>
  );
}
