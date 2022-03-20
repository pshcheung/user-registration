export interface Profile {
  id?: number;
  name: string;
  email: string;
  bio?: string;
}

export function generateProfile(): Profile {
  return {
    id: 0,
    name: '',
    email: '',
    bio: ''
  };
}
