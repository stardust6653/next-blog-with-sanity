export interface User {
  bookmarks: string[];
  email: string;
  id: string;
  image: string;
  name: string;
  owner: boolean;
  username: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface UnregisterImage {
  blurDataURL: string;
  blurHeight: number;
  blurWidth: number;
  height: number;
  src: string;
  width: number;
}

export interface Comment {
  register: boolean;
  name: string;
  password: string | null;
  userId: string | null;
  profileImage: string | UnregisterImage;
  comment: string;
  createdAt: Date;
  id: string;
}

export interface SaveComment extends Comment {
  _key: string;
}

export interface Card {
  comments: SaveComment[];
  commentsCount: number;
  content: string;
  createdAt: string;
  date: string;
  description: string;
  id: string;
  likes: string[];
  thumbnail: string;
  title: string;
  viewCount: number;
}

export interface CardProps {
  thumbnail: string;
  comments: SaveComment[];
  commentsCount: number | null;
  content: string;
  createdAt: string;
  id: string;
  likes: string[];
  title: string;
  description: string;
  viewCount: number;
  date: string;
}
