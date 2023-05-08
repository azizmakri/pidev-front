import { CommentPost } from "./CommentPost";
import { User } from "./User";

export class Post {
    idPost!: number;
    topicPost!: string;
    descriptionPost!: string;
    imagePost!: any;
    dateCreationPost!: Date;
    idUser!: string;
    userPost!:User;
    idCategory!: number;
    commentList!: CommentPost[]; // optional because it is a one-to-many relationship
    isSorted!: boolean;
  }
  