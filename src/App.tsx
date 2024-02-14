import { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import PostComments from "./components/PostComments/PostComments";
import { fetchPosts, fetchUserById } from "./api/request";

export interface IBlog {
  id: number;
  title: string;
  author: string;
  body: string;
}

let author = "";

function App() {
  const [posts, setPosts] = useState<IBlog[]>([]);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedID, setSelectedPost] = useState<number | null>(null);

  // useEffect(() => {
  //   // componentDidMount
  //   console.log("[App] mount");
  // }, []);

  // useEffect(() => {
  //   console.log("[App] update");
  // }, [visible]);

  // console.log("[App] render");

  // useEffect(() => {
  //   fetchPosts(6)
  //     .then((posts) => {
  //       const reqPost = posts.map((post: IPost) => {
  //         return fetchUserById(post.userId).then((user) => {
  //           return {
  //             ...post,
  //             author: user.name,
  //           };
  //         });
  //       });
  //       return Promise.all(reqPost);
  //     })
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, []);

  useEffect(() => {
    (async () => {
      const posts = await fetchPosts(6);
      let userID: number | null = null;
      const reqUsers = posts.map(async (post) => {
        if (userID !== post.userId) {
          userID = post.userId;
          const user = await fetchUserById(post.userId);
          author = user.name;
        }
        console.log(author);

        return {
          ...post,
          author,
        };
      });

      const postsAuthor = await Promise.all(reqUsers);
      setPosts(postsAuthor);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="wrap">
      <h1>Просто блог новостей</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="list">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                onSelect={() => setSelectedPost(post.id)}
                name={post.title}
                author={post.author}
              />
            );
          })}
        </div>
      )}

      <button onClick={() => setVisible((v) => !v)}>toggle</button>
      {visible && <PostComments selectedID={selectedID} />}
    </div>
  );
}

export default App;
