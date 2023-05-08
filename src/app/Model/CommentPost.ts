import { Post } from "./Post";
import { User } from "./User";

export class CommentPost {
    idComment!: number;
    dateCreationComment!: Date;
    descriptionComment!: string;
    nbLiked!: number;
    nbDisliked!: number;
    post!: Post;
    userComment!: User;
    isEditing!: boolean;
  }