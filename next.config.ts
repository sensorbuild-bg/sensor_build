import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    qualities: [55, 75, 90],
  },

  async redirects() {
    return [
      {
        source: "/services/vutreshni-remonti",
        destination: "/services/remont-na-apartament",
        permanent: true,
      },
      {
        source: "/services/interior-renovations",
        destination: "/services/remont-na-apartament",
        permanent: true,
      },
      {
        source: "/services/osvetlenie",
        destination: "/osvetlenie",
        permanent: true,
      },
      {
        source: "/projects/0",
        destination: "/projects/osvezhitelen-remont",
        permanent: true,
      },
      {
        source: "/projects/1",
        destination: "/projects/elektroinstalacia",
        permanent: true,
      },
      {
        source: "/projects/2",
        destination: "/projects/vik-instalacia",
        permanent: true,
      },
      {
        source: "/projects/3",
        destination: "/projects/podovo-otoplenie",
        permanent: true,
      },
      {
        source: "/projects/4",
        destination: "/projects/gipsokarton",
        permanent: true,
      },
      {
        source: "/projects/5",
        destination: "/projects/osvetlenie",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
