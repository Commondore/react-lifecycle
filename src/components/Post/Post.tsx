import { memo } from "react";

interface PostProps {
  name: string;
  author: string;
  onSelect: () => void;
}

const Post = ({ name, author, onSelect }: PostProps) => {
  // useEffect(() => {
  //   console.log("[Post] mount");
  // });

  // console.log("[Post] render");

  return (
    <div className="post" onClick={onSelect}>
      <h3>{name}</h3>
      <p>Author: {author}</p>
    </div>
  );
};
const PostMemo = memo(Post);
export default PostMemo;
