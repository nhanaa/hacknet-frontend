import { User } from "./user.types";

export interface EvaluationRequest {
  user1: User;
  user2: User;
  user3: User;
}

export interface Evaluation {
  breadth: string,
  depth: string,
  diversity: string,
  chemistry: string,
}
