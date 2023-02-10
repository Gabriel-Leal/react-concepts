import { Post } from "./Post";
export function App() {
  return (
    <div>
      <Post
        author="Gabriel Leal"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, magnam at accusantium, voluptatibus libero similique necessitatibus tenetur magni ipsum eaque officia ut, eum laboriosam aspernatur odio neque reiciendis. Quis, nihil."
      />
      <Post author="Gabriel Buzzi" content="A new nice post" />
    </div>
  );
}

// export default App;
