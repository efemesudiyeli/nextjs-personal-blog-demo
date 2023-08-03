import BlogContentContainer from "@/containers/BlogContent";
import { getAllPostSlugs } from "@/pages/api";

export default function BlogTemplate({ params }) {
  return <BlogContentContainer slug={params.slug} />;
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}
