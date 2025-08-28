export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  stats: {
    followers: number;
    following: number;
    posts: number;
  };
};

export type Post = {
  id: string;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
};

export type Comment = {
  id: string;
  author: User;
  content: string;
  timestamp: string;
};

export type ChatContact = {
  id: string;
  user: User;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
};

export type ChatMessage = {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
};

export type Chat = {
  id: string;
  contact: ChatContact;
  messages: ChatMessage[];
};

export type Stream = {
  id: string;
  title: string;
  description: string;
  author: User;
  thumbnailUrl: string;
  viewers: number;
  tags: string[];
};

export type Course = {
    id: string;
    title: string;
    description: string;
    instructor: User;
    imageUrl: string;
    category: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    rating: number;
    students: number;
    hasLab: boolean;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  seller: User;
  rating: number;
  reviews: number;
  category: string;
};
