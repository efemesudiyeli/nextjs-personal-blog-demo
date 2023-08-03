import { getPostBySlug, getPostData } from "@/pages/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { notFound } from "next/navigation";

import styles from "./styles.module.css";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineCoffee,
} from "react-icons/ai";

export default function BlogContentContainer({ slug }) {
  const { postData } = getPostData(slug);

  return (
    <main className="flex justify-center items-center">
      <div className={styles.postWrapper}>
        <h1 className={styles.blogTitle}>{postData.data.title}</h1>
        <div className={styles.postDetails}>
          <span className={styles.readLength}>
            <AiOutlineClockCircle />
            &nbsp;5 dk.
          </span>

          <span className={styles.publishDate}>
            <AiOutlineCalendar />
            &nbsp;{postData.data.date}
          </span>
          <span className={styles.publishDate}>
            <AiOutlineCoffee />
            &nbsp;{postData.data.author}
          </span>
        </div>

        <div className={styles.postContent}>
          <ReactMarkdown
            children={postData.content}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
    </main>
  );
}
