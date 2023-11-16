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
        <select disabled className="disabled:cursor-no-drop cursor-pointer text-[small] rounded-[5px] px-[.2em] py-[.1em] outline-[none] text-[var(--textColor0)] bg-[var(--accentColor1)] border-[1px] border-solid border-[var(--accentColor1)]" >
          <option value="english">Español</option>
          <option value="japanese">日本語</option>
        </select>
      </div>
    </footer>
  )
}
