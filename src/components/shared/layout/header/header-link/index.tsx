import useWindowSize from "@/src/hooks/use-window-size";
import { HeaderLinksType } from "@/src/types/header-links";
import classNames from "classnames";
import Link from "next/link";

const links: HeaderLinksType[] = [
  { title: "Solutions", href: "/" },
  { title: "Features", href: "/" },
  { title: "Usecases", href: "/" },
  { title: "Team", href: "/" },
];

function HeaderLinks() {
  const { windowSize } = useWindowSize();
  const isMobile = windowSize.windowWidth <= 750;

  return (
    <ul
      className={classNames("p-2", {
        "flex flex-col gap-2": isMobile,
        "flex-center gap-x-4": !isMobile,
      })}
    >
      {links.map(({ title, href }) => (
        <li key={title}>
          <Link href={href} className="text-lg font-medium text-gray-500 hover:text-black">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HeaderLinks;