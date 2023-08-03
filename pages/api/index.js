import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(`./posts`);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(slug) {
  const actualSlug = slug.replace(".md", "");
  const fullPath = path.join(`./posts`, `${actualSlug}.md`);
  // Dosya yolunu kontrol et ve eğer bahsedilen dosya yok ise devam etme.
  if (!fs.existsSync(fullPath)) {
    console.error(`Dosya bulunamadı: ${fullPath}`);
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const postData = matter(fileContents);

  return {
    slug,
    postData,
  };
}

export default async (req, res) => {
  // buraya

  res.status(200).json("ok");
};
