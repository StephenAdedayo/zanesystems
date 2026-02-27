import { services } from "@/assets/assets";



export default function sitemap() {
  const baseUrl = "https://zanesystemsgs.com";

// 1. Define your static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Generate dynamic routes from your services assets
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 3. Combine them all
  return [...staticRoutes, ...serviceRoutes];
}