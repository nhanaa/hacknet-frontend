export interface User {
  id: string;
  userId: string;
  name: string;
  experienceLevel: string;
  role1: string;
  role2: string;
  primaryLanguages: string[];
  secondaryLanguages: string[];
  school: string;
  goal: string;
  note: string;
  trait: string;
  discordLink: string;
  imageLink: string;
  pronouns: string;
};

export interface UserAuth {
  username: string;
  password: string;
};

export interface UserSignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
