import ky from "ky";
import { IPost } from "../interfaces/posts";
import { IUser } from "../interfaces/users";

const request = ky.create({ prefixUrl: "https://jsonplaceholder.typicode.com/" });

export const fetchPosts = (limit: number): Promise<IPost[]> => {
  return request.get(`posts${limit ? "?_limit=" + limit : ""}`).json();
};

export const fetchUserById = (id: number): Promise<IUser> => {
  return request.get(`users/${id}`).json();
};
