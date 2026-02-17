export interface Social {
  name: string;
  url: string;
  icon: string; // SVG path data
}

export const socials: Social[] = [
  {
    name: "Flickr",
    url: "https://flickr.com/photos/paul-frederiksen/",
    icon: `<circle cx="12" cy="12" r="3.5" fill="currentColor"/><circle cx="6" cy="12" r="3.5" fill="currentColor"/>`,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/iamdesertpaul",
    icon: `<rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/>`,
  },
  {
    name: "Threads",
    url: "https://threads.net/@iamdesertpaul",
    icon: `<path d="M16.7 11.1c-.1-.04-.2-.08-.31-.11a7.3 7.3 0 0 0-2.87-5.07 5.26 5.26 0 0 0-3.3-.92c-1.75.08-3.08.82-3.96 2.2l1.42.94c.63-.99 1.58-1.49 2.64-1.54a3.66 3.66 0 0 1 2.28.6 5.36 5.36 0 0 1 1.87 3.21c-.83-.15-1.72-.2-2.64-.14-2.6.15-4.27 1.58-4.17 3.57.05 1.01.53 1.88 1.37 2.44.71.47 1.62.7 2.57.65 1.25-.07 2.23-.5 2.93-1.28.53-.6.87-1.37 1.04-2.34.62.37 1.08.87 1.3 1.5.38 1.05.4 2.78-.88 4.06-1.13 1.13-2.48 1.62-4.14 1.63-1.85-.01-3.25-.6-4.17-1.77-.85-1.08-1.3-2.66-1.32-4.69.02-2.03.47-3.61 1.32-4.69.92-1.16 2.32-1.76 4.17-1.77 1.87.01 3.3.61 4.24 1.77.45.56.8 1.26 1.04 2.07l1.6-.43a8.3 8.3 0 0 0-1.33-2.62C14.96 4.56 13.27 3.83 11.06 3.82c-2.23.01-3.96.76-5.12 2.23C4.87 7.42 4.32 9.34 4.3 11.73c.02 2.39.57 4.31 1.64 5.68 1.16 1.47 2.89 2.22 5.12 2.23 2.04-.02 3.77-.67 5.17-2.07 1.78-1.78 1.73-4.08 1.18-5.59a4.25 4.25 0 0 0-1.91-2.19Zm-3.21 4.4c-.1 1.82-1.41 2.69-2.8 2.77-.68.04-1.33-.12-1.82-.45-.48-.32-.74-.77-.77-1.27-.07-1.24 1.01-2.06 2.83-2.17.35-.02.7-.02 1.04 0 .52.04 1.01.12 1.47.22-.1.34-.2.64-.33.9Z" fill="currentColor"/>`,
  },
  {
    name: "X",
    url: "https://x.com/iamdesertpaul",
    icon: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>`,
  },
];

export const email = "paul@paulfrederiksen.com";
