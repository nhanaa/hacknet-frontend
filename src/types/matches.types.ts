import { User } from "./user.types";

export interface PossibleMatchesResponse {
  dataScience: User[];
  backend: User[];
  frontend: User[];
  business: User[];
}
