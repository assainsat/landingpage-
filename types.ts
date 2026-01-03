
export interface NavItem {
  label: string;
  href: string;
}

export interface CommunityItem {
  id: string;
  type: 'story' | 'photo' | 'idea';
  author: string;
  content: string;
  imageUrl?: string;
  timestamp: Date;
}

export interface SubmissionForm {
  author: string;
  type: 'story' | 'photo' | 'idea';
  text: string;
  image?: string;
}
