export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
  }
}
