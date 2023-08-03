import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-screen p-5 justify-center items-center">
      &#169; Made with ♥ by&nbsp;
      <Link
        className="underline"
        href={"https://www.linkedin.com/in/efemesudiyeli/"}
        target="_blank"
      >
        awokendev
      </Link>
    </footer>
  );
}
