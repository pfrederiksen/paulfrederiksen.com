export interface Photo {
  src: ImageMetadata;
  alt: string;
  title: string;
  location?: string;
  year?: string;
}

// Import images so Astro can optimize them
import desertHighway from "../assets/photos/01-desert-highway.jpg";

export const photos: Photo[] = [
  {
    src: desertHighway,
    alt: "Desert highway stretching toward distant mountains under open sky",
    title: "Desert Highway",
    location: "Nevada",
    year: "2024",
  },
];
