export const business = {
  name: 'Sensor Build',
  legalName: 'Сензор Билд ЕООД',
  url: 'https://www.sensorbuild.bg',
  phoneE164: '+359878344006',
  phoneDisplay: '+359 878 344 006',
  email: 'sensorbuild@gmail.com',
  // Public service area only — do not display a street address on the website.
  address: {
    city: 'София',
    countryCode: 'BG',
    bg: 'София, България',
    en: 'Sofia, Bulgaria',
  },
  // Google Business listing currently associated with Todor Kableshkov;
  // only "Sofia, Bulgaria" is shown as the public location on the site.
  googleBusinessProfileUrl: 'https://www.google.com/maps/search/?api=1&query=Sensor%20Build%20Sofia%20Bulgaria&query_place_id=ChIJM0LmQYmFqkAR2XhBEWCpAM0',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sensor%20Build%20Sofia%20Bulgaria&query_place_id=ChIJM0LmQYmFqkAR2XhBEWCpAM0',
  workingHours: {
    weekdays: '09:00 – 17:00',
    opens: '09:00',
    closes: '17:00',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61582272743716',
    instagram: 'https://www.instagram.com/sensorbuild/',
    linkedin: 'https://www.linkedin.com/company/sensor-build/',
  },
} as const;
