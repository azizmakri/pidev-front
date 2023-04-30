import { CommentPost } from "./CommentPost";

export class Post {
    idPost!: number;
    topicPost!: string;
    descriptionPost!: string;
    imagePost!: any;
    dateCreationPost!: Date;
    idUser!: string;
    idCategory!: number;
    commentList?: CommentPost[]; // optional because it is a one-to-many relationship
  }
  