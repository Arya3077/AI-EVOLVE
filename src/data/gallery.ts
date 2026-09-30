


export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryEvent {
  id: string;
  title: string;
  coverImage: string;
  photos: GalleryPhoto[];
}

export const GALLERY_EVENTS: GalleryEvent[] = [
  {
    id: "Edition-1",
    title: "INSIDE THE NETRA A2000 SDK",
    coverImage: "/gallery/edition-1/img2.png",
    photos: [
      {
        id: "ms-1",
        src: "/gallery/edition-1/img2.png",
        alt: "edition 1 — group photo",
        width: 1080,
        height: 1350,
      },
      {
        id: "ms-2",
        src: "/gallery/edition-1/img2.png",
        alt: "edition 1",
        width: 1026,
        height: 669,
      },
      {
        id: "ms-3",
        src: "/gallery/edition-1/img3.png",
        alt: "edition 1",
        width: 1080,
        height: 1350,
      },
      {
        id: "ms-4",
        src: "/gallery/edition-1/img4.png",
        alt: "INSIDE THE NETRA A2000 SDK",
        width: 1080,
        height: 1350,
      },
    ],
  },
  {
    id: "Edition-2",
    title: "The Netra A2000 SDK",
    coverImage: "/gallery/edition-2/img1.png",
    photos: [
      {
        id: "e2-1",
        src: "/gallery/edition-2/img1.png",
        alt: "Edition 2",
        width: 1384,
        height: 2460,
      },
      {
        id: "e2-2",
        src: "/gallery/edition-2/img2.png",
        alt: "Edition 2",
        width: 2304,
        height: 3072,
      },
      {
        id: "e2-3",
        src: "/gallery/edition-2/img3.png",
        alt: "Edition 2",
        width: 1440,
        height: 2560,
      },
      {
        id: "e2-4",
        src: "/gallery/edition-2/img4.png",
        alt: "Edition 2",
        width: 1440,
        height: 2560,
      },
      {
        id: "e2-5",
        src: "/gallery/edition-2/img5.png",
        alt: "Edition 2",
        width: 1440,
        height: 2560,
      },
      {
        id: "e2-6",
        src: "/gallery/edition-2/img6.png",
        alt: "Edition 2",
        width: 1440,
        height: 2560,
      },
    ],
  },
];
