import BlogContentContainer from "@/containers/BlogContent";
import { getAllPostSlugs, getPostData } from "@/pages/api";

export async function generateMetadata({ params }) {
  const postData = getPostData(params.slug);
  return {
    title: `${postData.postData.data.title}`,
  };
}

export default function BlogTemplate({ params }) {
  return <BlogContentContainer slug={params.slug} />;
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}
