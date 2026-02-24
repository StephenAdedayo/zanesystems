export default function sitemap() {
  const baseUrl = "https://zanesystemsgs.com";

  // The main pages of your site
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
    changeFrequency: 'monthly',
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}