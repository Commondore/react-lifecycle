import { memo } from "react";

interface PostProps {
  name: string;
  author: string;
}

const Post = ({ name, author }: PostProps) => {
  // useEffect(() => {
  //   console.log("[Post] mount");
  // });

  // console.log("[Post] render");

  return (
    <div className="post">
      <h3>{name}</h3>
      <p>Author: {author}</p>
    </div>
  );
};
const PostMemo = memo(Post);
export default PostMemo;
