import { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import FullPost from "./components/FullPost/FullPost";
import { IPost } from "./interfaces/posts";

interface IBlog {
  id: number | string;
  title: string;
  author: string;
}

function App() {
  const [posts, setPosts] = useState<IBlog[]>([]);
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   // componentDidMount
  //   console.log("[App] mount");
  // }, []);

  // useEffect(() => {
  //   console.log("[App] update");
  // }, [visible]);

  // console.log("[App] render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(() => {
          return posts.map((post: IPost) => {
            return {
              ...post,
              author: "Mike Johnson",
            };
          });
        });
      });
  }, []);

  return (
    <div className="wrap">
      <h1>Просто блог новостей</h1>
      <div className="list">
        {posts.map((post) => {
          return <Post key={post.id} name={post.title} author={post.author} />;
        })}
      </div>

      <button onClick={() => setVisible((v) => !v)}>toggle</button>
      {visible && <FullPost />}
    </div>
  );
}

export default App;
