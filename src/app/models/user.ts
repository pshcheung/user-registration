export interface User {
  id?: number;
  name: string;
  email: string;
  bio?: string;
}

export function generateUser(): User {
  return {
    id: 0,
    name: '',
    email: '',
    bio: ''
  };
}
