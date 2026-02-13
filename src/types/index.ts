export interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}