const locations = ["Delhi", "Mumbai"];
const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const staticUrls = [
  '/our-services',
  '/trademark-registration-in-delhi',
  '/trademark-registration-in-delhi'
];
const uniqueStaticPaths = Array.from(new Set(staticUrls));
console.log("Unique Paths:", uniqueStaticPaths);
