import ky from "ky";
import { IPost } from "../interfaces/posts";
import { IUser } from "../interfaces/users";
import { IComment } from "../interfaces/comments";

const request = ky.create({ prefixUrl: import.meta.env.VITE_API_URL });

export const fetchPosts = (limit: number): Promise<IPost[]> => {
  return request.get(`posts${limit ? "?_limit=" + limit : ""}`).json();
};

export const fetchUserById = (id: number): Promise<IUser> => {
  return request.get(`users/${id}`).json();
};

export const fetchPostComments = (postID: number): Promise<IComment[]> => {
  return request.get(`comments?postId=${postID}`).json();
};
