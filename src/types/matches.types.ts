import { User } from "./user.types";

export interface PossibleMatchesResponse {
  dataScience: User[];
  backend: User[];
  frontend: User[];
  business: User[];
};

export interface MatchRequest {
  user2Id: string;
  matchType: boolean;
};

export interface MatchResponse {
  user1Id: string;
  user2Id: string;
  confirmed: boolean;
};
