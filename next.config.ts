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
    ];
  },
};

export default nextConfig;
