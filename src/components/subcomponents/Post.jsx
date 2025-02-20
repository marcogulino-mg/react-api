export default function Post(props) {
  return (
    <ul>
      {props.postList.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <img src={post.image} alt={post.title} />
          <p>{post.tags}</p>
        </li>
      ))}
    </ul>
  );
}
