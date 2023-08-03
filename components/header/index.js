import Link from "next/link";
import { MdOutlinePanoramaPhotosphereSelect } from "react-icons/md";

export default function Header() {
  return (
    <header className="w-screen flex justify-around p-5 border-b border-b-black/20 mb-20">
      <div className="flex gap-2">
        <div className="text-2xl">
          <MdOutlinePanoramaPhotosphereSelect />
        </div>
        <div className="font-bold">efemesudiyeli.dev</div>
      </div>

      <nav className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Work</Link>
        <Link href={"/"}>About</Link>
      </nav>
    </header>
  );
}
