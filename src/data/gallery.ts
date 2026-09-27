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
    id: "gallery-maintainer-summit",
    title: "Maintainer Summit",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    photos: [
      {
        id: "ms-1",
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85",
        alt: "Maintainer Summit — keynote stage",
        width: 1200,
        height: 800,
      },
      {
        id: "ms-2",
        src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=85",
        alt: "Maintainer Summit — panel discussion",
        width: 1200,
        height: 800,
      },
      {
        id: "ms-3",
        src: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1200&q=85",
        alt: "Maintainer Summit — audience",
        width: 1200,
        height: 800,
      },
      {
        id: "ms-4",
        src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=1200&q=85",
        alt: "Maintainer Summit — networking",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "gallery-ai-builders-demo",
    title: "AI Builders Demo Night",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    photos: [
      {
        id: "abd-1",
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=85",
        alt: "AI Builders Demo Night — live demos",
        width: 1200,
        height: 800,
      },
      {
        id: "abd-2",
        src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=85",
        alt: "AI Builders Demo Night — presenter",
        width: 1200,
        height: 800,
      },
      {
        id: "abd-3",
        src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=85",
        alt: "AI Builders Demo Night — team",
        width: 1200,
        height: 800,
      },
      {
        id: "abd-4",
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=85",
        alt: "AI Builders Demo Night — workspace",
        width: 1200,
        height: 800,
      },
      {
        id: "abd-5",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85",
        alt: "AI Builders Demo Night — group",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "gallery-prototype-to-production",
    title: "Prototype to Production",
    coverImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    photos: [
      {
        id: "ptp-1",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=85",
        alt: "Prototype to Production — workshop",
        width: 1200,
        height: 800,
      },
      {
        id: "ptp-2",
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85",
        alt: "Prototype to Production — boardroom",
        width: 1200,
        height: 800,
      },
      {
        id: "ptp-3",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85",
        alt: "Prototype to Production — engineering",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "gallery-autonomous-agents-sprint",
    title: "Autonomous Agents Build Sprint",
    coverImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    photos: [
      {
        id: "aas-1",
        src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=85",
        alt: "Autonomous Agents Build Sprint — hackathon floor",
        width: 1200,
        height: 800,
      },
      {
        id: "aas-2",
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85",
        alt: "Autonomous Agents Build Sprint — coding",
        width: 1200,
        height: 800,
      },
      {
        id: "aas-3",
        src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&q=85",
        alt: "Autonomous Agents Build Sprint — collaboration",
        width: 1200,
        height: 800,
      },
      {
        id: "aas-4",
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=85",
        alt: "Autonomous Agents Build Sprint — team work",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "gallery-netra-sdk-deep-dive",
    title: "NETRA A2000 SDK Deep Dive",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    photos: [
      {
        id: "nsd-1",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
        alt: "NETRA SDK — circuit board",
        width: 1200,
        height: 800,
      },
      {
        id: "nsd-2",
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1200&q=85",
        alt: "NETRA SDK — hardware demo",
        width: 1200,
        height: 800,
      },
      {
        id: "nsd-3",
        src: "https://images.unsplash.com/photo-1607292803062-5b8ff0531b88?w=1200&q=85",
        alt: "NETRA SDK — technical session",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "gallery-webgpu-inference-lab",
    title: "WebGPU Inference Lab",
    coverImage:
      "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=800&q=80",
    photos: [
      {
        id: "wil-1",
        src: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=1200&q=85",
        alt: "WebGPU Inference Lab — browser runtime",
        width: 1200,
        height: 800,
      },
      {
        id: "wil-2",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
        alt: "WebGPU Inference Lab — developer",
        width: 1200,
        height: 800,
      },
      {
        id: "wil-3",
        src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85",
        alt: "WebGPU Inference Lab — code",
        width: 1200,
        height: 800,
      },
      {
        id: "wil-4",
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85",
        alt: "WebGPU Inference Lab — coding session",
        width: 1200,
        height: 800,
      },
    ],
  },
];
