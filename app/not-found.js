import Link from "next/link";

export default function NotFound({ params }) {
  return (
    <div>
      404! NotFound
      <br />
      <Link href={"/"}>Go home</Link>
    </div>
  );
}
