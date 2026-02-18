export interface Photo {
  src: ImageMetadata;
  alt: string;
  title: string;
  location?: string;
  year?: string;
  camera?: string;
  film?: string;
}

// Import images so Astro can optimize them
import desertHighway from "../assets/photos/01-desert-highway.jpg";
import roysGas from "../assets/photos/02-roys-gas.jpg";
import desertOverlook from "../assets/photos/03-desert-overlook.jpg";
import desertCrossingBw from "../assets/photos/04-desert-crossing-bw.jpg";
import crossTraffic from "../assets/photos/05-cross-traffic.jpg";
import roysMotelCafe from "../assets/photos/06-roys-motel-cafe.jpg";
import edgeOfVegas from "../assets/photos/07-edge-of-vegas.jpg";
import saltusRoad from "../assets/photos/08-saltus-road.jpg";

export const photos: Photo[] = [
  {
    src: desertHighway,
    alt: "Desert highway stretching toward distant mountains under open sky",
    title: "Desert Highway",
    location: "California",
    year: "2024",
  },
  {
    src: edgeOfVegas,
    alt: "Black and white photograph of an unfinished Las Vegas subdivision with empty roads, streetlights, and the Strip dissolving into haze",
    title: "Edge of Vegas",
    location: "Las Vegas, Nevada",
  },
  {
    src: roysGas,
    alt: "Roy's Gas station with vintage pumps and price sign in the Mojave Desert",
    title: "Roy's Gas",
    location: "Amboy, California",
    year: "2024",
  },
  {
    src: saltusRoad,
    alt: "Two-lane highway vanishing into distant mountains with power lines in the Mojave Desert",
    title: "Saltus Road",
    location: "Saltus, California",
  },
  {
    src: desertCrossingBw,
    alt: "Stop sign and power lines at a desert crossroads in black and white",
    title: "Desert Crossing",
    location: "California",
    year: "2024",
  },
  {
    src: roysMotelCafe,
    alt: "Iconic Roy's Motel and Cafe neon sign against clear blue desert sky",
    title: "Roy's Motel & Cafe",
    location: "Amboy, California",
    year: "2024",
  },
  {
    src: desertOverlook,
    alt: "Interpretive sign overlooking a vast desert basin with distant mountains",
    title: "Desert Overlook",
    location: "Death Valley",
    year: "2024",
  },
  {
    src: crossTraffic,
    alt: "Stop sign with cross traffic warning on a sandy desert highway",
    title: "Cross Traffic",
    location: "California",
    year: "2024",
  },
];
