// import Link from './Link'
// import siteMetadata from '@/data/siteMetadata'
// import SocialIcon from '@/components/social-icons'
// <footer>
//   <div className="mt-16 flex flex-col items-center">
//     <div className="mb-3 flex space-x-4">
//       <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
//       <SocialIcon kind="github" href={siteMetadata.github} size={6} />
//       <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
//       <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
//       <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
//       <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
//     </div>
//     <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
//       <div>{siteMetadata.author}</div>
//       <div>{` • `}</div>
//       <div>{`© ${new Date().getFullYear()}`}</div>
//       <div>{` • `}</div>
//       <Link href="/">{siteMetadata.title}</Link>
//     </div>
//     <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
//       <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
//         Tailwind Nextjs Theme
//       </Link>
//     </div>
//   </div>
// </footer>
// [border-image:linear-gradient(90deg,#ffffff_20%,#ffffff_50%,#ffffff_80%)] 

'use client'
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function Footer() {
  const useq = usePathname();
  console.log(useq);

  const listURL = useq.split("/").filter(c => c !== "");

  const renderListUrl = () => {
    const listRender = [...listURL]
    listRender.unshift("Main");
    return listRender.map((n) => {
      const urlSend = listURL.filter((l) => l !== n)
      return <>
        <Link
          href={n === "Main" ? "/" : "#"}
          className="underline inline-block max-w-[70px] w-auto truncate text-[12px]"
        >
          {n}
        </Link>
        <div className="mx-1">/</div>
      </>
    })
  }
  return (
    <footer
      className="footerMain max-h-[55px] 
      transition-[0.5s] 
      whitespace-nowrap 
      m-0
      sticky 
      flex 
      items-center 
      justify-between 
      px-0 
      py-[1em] 
      bottom-0
      md:pr-[28%] 
      md:pl-[28%]
      "
    >
      <span className="text-[12px] flex ">
        {useq === "/" ? "Leonardo Event" : (
          renderListUrl()
        )}
      </span>

      <div className="flex items-center gap-[.5em]">
        <ThemeSwitch />
        <select className="cursor-pointer text-[small] rounded-[5px] px-[.2em] py-[.1em] outline-[none] text-[var(--textColor0)] bg-[var(--accentColor1)] border-[1px] border-solid border-[var(--accentColor1)]" >
          <option value="english">English</option>
          <option value="japanese">日本語</option>
        </select>
      </div>
    </footer>
  )
}
