import BlogList from "@/components/blogList";
import styles from "./styles.module.css";
import Hero from "@/components/hero";

export default function HomeContainer() {
  return (
    <main className={`${styles.main}`}>
      <Hero />

      <BlogList />
    </main>
  );
}
