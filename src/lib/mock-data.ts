import type { User, Post, Comment, Chat, ChatContact, ChatMessage, Stream, Course, Product } from './types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Damilare Emmanuel',
    username: 'damilare',
    email: 'damilare@example.com',
    avatar: 'https://placehold.co/100x100.png',
    bio: 'Building Social Spark. Dreamer, creator, and innovator. Exploring the intersection of technology and creativity.',
    stats: { followers: 1250, following: 320, posts: 45 },
  },
  {
    id: 'user-2',
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane.doe@example.com',
    avatar: 'https://placehold.co/100x100.png',
    bio: 'Photographer & Traveler. Capturing moments and exploring new cultures.',
    stats: { followers: 5800, following: 150, posts: 210 },
  },
  {
    id: 'user-3',
    name: 'Alex Smith',
    username: 'alexsmith',
    email: 'alex.smith@example.com',
    avatar: 'https://placehold.co/100x100.png',
    bio: 'Musician and sound engineer. Making waves and creating vibes.',
    stats: { followers: 2300, following: 500, posts: 88 },
  },
    {
    id: 'user-4',
    name: 'TechGuru',
    username: 'techguru',
    email: 'techguru@example.com',
    avatar: 'https://placehold.co/100x100.png',
    bio: 'Live coder and tech enthusiast. Join my streams for fun projects!',
    stats: { followers: 15000, following: 12, posts: 102 },
  },
  {
    id: 'user-5',
    name: 'ArtisanAlly',
    username: 'artisanally',
    email: 'artisanally@example.com',
    avatar: 'https://placehold.co/100x100.png',
    bio: 'Creating art live. Let\'s paint together!',
    stats: { followers: 8900, following: 400, posts: 300 },
  },
  {
    id: 'user-6',
    name: 'Dr. Evelyn Reed',
    username: 'evelynreed',
    email: 'evelyn.reed@example.com',
    avatar: 'https://placehold.co/100x100.png',
    bio: 'Astrophysicist and science communicator. Making complex science accessible to all.',
    stats: { followers: 50000, following: 5, posts: 150 },
  }
];

export const currentUser = mockUsers[0];

const mockComments: Comment[] = [
  {
    id: 'comment-1',
    author: mockUsers[1],
    content: 'This is such an insightful fact! Makes you think.',
    timestamp: '2h ago',
  },
  {
    id: 'comment-2',
    author: mockUsers[2],
    content: 'I never knew that. Thanks for sharing!',
    timestamp: '1h ago',
  },
];

export const mockPosts: Post[] = [
  {
    id: 'post-1',
    author: mockUsers[0],
    content: "Daily Social Fact: The term 'meme' was coined by Richard Dawkins in his 1976 book 'The Selfish Gene'. It's derived from the Greek word 'mimema', meaning 'something imitated'.",
    likes: 152,
    comments: mockComments,
    timestamp: '3h ago',
  },
  {
    id: 'post-2',
    author: mockUsers[1],
    content: "Reflection of the day: How does social media shape our perception of reality? It's fascinating how curated feeds can create echo chambers or open up new worlds.",
    image: 'https://placehold.co/600x400.png',
    likes: 320,
    comments: [],
    timestamp: '5h ago',
  },
  {
    id: 'post-3',
    author: mockUsers[2],
    content: "Let's discuss: What's the future of audio content? From podcasts to interactive music, the possibilities are endless. What are your thoughts?",
    likes: 88,
    comments: [],
    timestamp: '1d ago',
  },
];

const mockChatMessages: Record<string, ChatMessage[]> = {
  'chat-1': [
    { id: 'msg-1-1', senderId: 'user-2', content: 'Hey! Loved your post about memes.', timestamp: '10:30 AM' },
    { id: 'msg-1-2', senderId: 'user-1', content: 'Thanks, Jane! Glad you liked it.', timestamp: '10:31 AM' },
  ],
  'chat-2': [
    { id: 'msg-2-1', senderId: 'user-3', content: 'That was a great point on the future of audio.', timestamp: 'Yesterday' },
  ],
  'stream-1': [
      { id: 's-msg-1', senderId: 'user-2', content: 'This is awesome!', timestamp: '10:35 AM'},
      { id: 's-msg-2', senderId: 'user-3', content: 'What library are you using for this?', timestamp: '10:36 AM'},
      { id: 's-msg-3', senderId: 'user-1', content: 'I am using Next.js with Tailwind!', timestamp: '10:37 AM'}
  ]
};

const mockChatContacts: ChatContact[] = [
  {
    id: 'chat-1',
    user: mockUsers[1],
    lastMessage: 'Thanks, Jane! Glad you liked it.',
    lastMessageTime: '10:31 AM',
    unreadCount: 0,
  },
  {
    id: 'chat-2',
    user: mockUsers[2],
    lastMessage: 'That was a great point on the future of audio.',
    lastMessageTime: 'Yesterday',
    unreadCount: 1,
  },
];


export const mockChats: Chat[] = mockChatContacts.map(contact => ({
  id: contact.id,
  contact: contact,
  messages: mockChatMessages[contact.id] || [],
}));

export const mockStreams: Stream[] = [
  {
    id: 'stream-1',
    title: 'Live Coding a Social Media App',
    description: 'Join me as I build a full-stack social media application from scratch using Next.js, Tailwind CSS, and Genkit. We will explore features like real-time chat, AI-powered content recommendations, and more.',
    author: mockUsers[3],
    thumbnailUrl: 'https://placehold.co/800x450.png',
    viewers: 12500,
    tags: ['Coding', 'Next.js', 'AI'],
  },
  {
    id: 'stream-2',
    title: 'Digital Painting: Mountain Landscapes',
    description: 'A relaxing session of digital painting. Today, we are focusing on capturing the beauty of mountain landscapes. Grab your tablet and let\'s create together.',
    author: mockUsers[4],
    thumbnailUrl: 'https://placehold.co/800x450.png',
    viewers: 8200,
    tags: ['Art', 'Digital Painting', 'Creative'],
  },
  {
    id: 'stream-3',
    title: 'Acoustic Session: Covers & Originals',
    description: 'Chill acoustic vibes. I\'ll be playing some of my favorite covers and a few original songs. Send in your requests!',
    author: mockUsers[2],
    thumbnailUrl: 'https://placehold.co/800x450.png',
    viewers: 5300,
    tags: ['Music', 'Acoustic', 'Live'],
  },
];

export const streamChat: ChatMessage[] = mockChatMessages['stream-1'];

export const mockCourses: Course[] = [
    {
        id: 'course-1',
        title: 'Introduction to Digital Painting',
        description: 'Learn the fundamentals of digital art, from basic sketching to advanced rendering techniques in this comprehensive course.',
        instructor: mockUsers[4],
        imageUrl: 'https://placehold.co/600x400.png',
        category: 'Art & Design',
        level: 'Beginner',
        rating: 4.7,
        students: 12345,
        hasLab: true,
    },
    {
        id: 'course-2',
        title: 'The Secrets of the Cosmos',
        description: 'Explore the wonders of the universe, from black holes to distant galaxies, with renowned astrophysicist Dr. Evelyn Reed.',
        instructor: mockUsers[5],
        imageUrl: 'https://placehold.co/600x400.png',
        category: 'Science & Technology',
        level: 'Beginner',
        rating: 4.9,
        students: 25890,
        hasLab: true,
    },
    {
        id: 'course-3',
        title: 'Advanced UI/UX for Web Apps',
        description: 'Master the art of creating intuitive and beautiful user interfaces. A deep dive into design systems and user psychology.',
        instructor: mockUsers[0],
        imageUrl: 'https://placehold.co/600x400.png',
        category: 'Science & Technology',
        level: 'Advanced',
        rating: 4.8,
        students: 8765,
        hasLab: false,
    },
    {
        id: 'course-4',
        title: 'Character Design Fundamentals',
        description: 'Bring your characters to life! Learn the core principles of character design for animation, games, and illustration.',
        instructor: mockUsers[4],
        imageUrl: 'https://placehold.co/600x400.png',
        category: 'Art & Design',
        level: 'Intermediate',
        rating: 4.6,
        students: 7654,
        hasLab: true,
    },
];

export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Quantum-Enhanced Graphics Tablet',
    description: 'A revolutionary graphics tablet that uses quantum entanglement for near-zero latency. Perfect for professional digital artists who demand precision and speed. Comes with a pressure-sensitive stylus.',
    price: 799.99,
    imageUrl: 'https://placehold.co/400x400.png',
    seller: mockUsers[3],
    rating: 4.9,
    reviews: 1204,
    category: 'Tech Gadgets',
  },
  {
    id: 'prod-2',
    name: 'Bio-luminescent Desk Plant',
    description: 'A genetically engineered plant that glows in the dark. A beautiful, living light source for your desk that requires minimal care. A fusion of nature and technology.',
    price: 149.50,
    imageUrl: 'https://placehold.co/400x400.png',
    seller: mockUsers[5],
    rating: 4.7,
    reviews: 876,
    category: 'Home Decor',
  },
  {
    id: 'prod-3',
    name: 'Vintage Synthesizer T-Shirt',
    description: 'A soft, 100% cotton t-shirt featuring a classic analog synthesizer design. A must-have for music producers and synth enthusiasts. Available in multiple sizes.',
    price: 29.99,
    imageUrl: 'https://placehold.co/400x400.png',
    seller: mockUsers[2],
    rating: 4.8,
    reviews: 234,
    category: 'Apparel',
  },
  {
    id: 'prod-4',
    name: 'Personalized Soundwave Art',
    description: 'Turn your favorite sound—a laugh, a song, a message—into a stunning piece of visual art. Provide an audio file, and we\'ll create a unique print just for you.',
    price: 89.00,
    imageUrl: 'https://placehold.co/400x400.png',
    seller: mockUsers[4],
    rating: 4.9,
    reviews: 567,
    category: 'Art & Collectibles',
  }
];
