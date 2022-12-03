import { Sections } from "./Sections";

export type News = {
    url: string;
    title: string;
    section: Sections;
    img: {
      src: string;
      alt: string;
      height?: string;
    };
    description: string;
    publishedAt: string;
  };

