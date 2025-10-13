// COMPANY_INFO.NAME
// COMPANY_INFO.SLOGAN
// COMPANY_INFO.DESCRIPTION
// COMPANY_INFO.ADDRESS
// COMPANY_INFO.PHONE
// COMPANY_INFO.EMAIL
// COMPANY_INFO.YEARSEXPERIENCE
// COMPANY_INFO.PROJECTSCOMPLETED
// COMPANY_INFO.HAPPYCLIENTS
//  import {COMPANY_INFO,STATS} from "./basicinfo"

export const COMPANY_INFO = {
  NAME: "Nasir Real Estate & Developers LTD",
  SLOGAN: "Premium Real Estate Solutions",
  DESCRIPTION:
    "Leading real estate company with large returning clients. Located at Amin Model Town, Savar Cantt Ashulia, Dhaka-1344. Managed by MD-headed board, non-shared organization.",
  ADDRESS: "Amin Model Town, Savar Cantt Ashulia, Dhaka-1344, Bangladesh",
  PHONE: "+880 1779-065711",
  EMAIL: "info@nred.io",
  WEBSITE: "https://nred.io",
  SHORTNAME: "NRED",
};

// Assets & Media
export const ASSETS = {
  LOGO: "https://www.pikpng.com/pngl/b/31-315050_real-estate-logo-png-real-estate-clipart.png",
  FAVICON: "/favicon.ico",
};

// Social Media Links
export const SOCIAL_MEDIA = {
  FACEBOOK: "https://facebook.com/nredltd",
  TWITTER: "https://twitter.com/nredltd",
  LINKEDIN: "https://linkedin.com/company/nredltd",
  INSTAGRAM: "https://instagram.com/nredltd",
};

// Business Statistics

export const STATS = {
  YEARS_EXPERIENCE: "15+",
  PROJECTS_COMPLETED: "50+",
  HAPPY_CLIENTS: "1000+",
  AWARDS_WON: "10+",
};
// socials
export const SOCIAL ={
  FACEBOOK:"NREDLTD",
  INSTA:"NREDLTD",
  LINK: "Not_available", //"NREDLTD",
  YOUTUBE:  "Not_available", //"NREDLTD",
  WHATSAPP:"8801779065711",
};

// Named export to fix the anonymous default export warning
const AppConfig = {
  COMPANY_INFO,
  ASSETS,
  SOCIAL_MEDIA,
  STATS,
};

export default AppConfig;
