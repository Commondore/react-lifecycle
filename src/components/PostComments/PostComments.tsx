import { useEffect, useState } from "react";
import { fetchPostComments } from "../../api/request";
import { IComment } from "../../interfaces/comments";

interface PostCommentsProps {
  selectedID: number | null;
}

const PostComments = ({ selectedID }: PostCommentsProps) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (selectedID) {
      fetchPostComments(selectedID).then((comments) => {
        setComments(comments);
      });
    }
  }, [selectedID]);

  if (comments.length) {
    return (
      <ul>
        {comments.map((item) => {
          return (
            <li key={item.id}>
              <h4>{item.email}</h4>
              <p>{item.body}</p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <h2>Выберите пост</h2>;
  }

  // if (currentPost) {
  //   const { title, body } = currentPost;
  //   return (
  //     <section>
  //       <h3>{title}</h3>
  //       <p>{body}</p>
  //     </section>
  //   );
  // } else {
  //   return <h2>Выберите пост</h2>;
  // }
};

export default PostComments;
