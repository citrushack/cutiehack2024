import "next-auth";

declare module "next-auth" {
  export interface User {
    id: string;
    email: string;
    name: string;
    image: string;
    roles: {
      [key: string]: Number;
    };
    team: string;
  }

  export interface Session {
    user: User;
  }
}
