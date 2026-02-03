export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}