import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("articles", "routes/articles.tsx"), 
    route("contact", "routes/contact.tsx")
] satisfies RouteConfig;
