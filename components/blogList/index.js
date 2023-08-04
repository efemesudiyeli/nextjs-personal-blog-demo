import { getAllPostSlugs, getPostData } from "@/pages/api";
import Link from "next/link";
import Image from "next/image";
import stockPhoto from "@/public/assets/stock.jpeg";

import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";

import styles from "./styles.module.css";

export default function BlogList() {
  const posts = getAllPostSlugs();
  const postDataList = posts.map((post) => getPostData(post.params.slug));
  return (
    <article className={`max-md:p-5 ${styles.blogSection}`}>
      {postDataList.map((post, index) => (
        <Link
          key={index}
          className={styles.postWrapper}
          href={`blog/${post.slug}`}
        >
          <div>
            <Image
              alt={post.postData.data.title}
              className={styles.img}
              src={stockPhoto}
            ></Image>
          </div>
          <div className={styles.sections}>
            <h4 className={styles.categorySection}>
              {post.postData.data.category}
            </h4>
            <h3 className={styles.titleSection}>{post.postData.data.title}</h3>
            <div className={styles.detailSection}>
              <span className={styles.readLength}>
                <AiOutlineClockCircle /> {post.postData.data.readlength}
              </span>
              <time className={styles.date}>
                <AiOutlineCalendar />
                {post.postData.data.date}
              </time>
            </div>
          </div>
        </Link>
      ))}
    </article>
  );
}
