// object {author="", content=""}

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}

// function Post() {
//   return <p>Post</p>;
// }

// export default Post;
