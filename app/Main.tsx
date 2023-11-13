import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'

// flex flex-wrap flex-col justify-between sm:flex-row sm:justify-center items-center md:
export default function Home({ posts }) {
  return (
    <div className="h-screen flex justify-between items-center -mb-[55px] px-12 sm:px-0">
      <div className="relative">
        <img
          src="/static/images/LSME.png"
          alt="501A Logo Symbol" 
          className="sm:-ml-[15px] 
          w-[100px] 
          [transition:.5s] 
          brightness-[0]
          dark:brightness-[1]
          "
        />
      </div>
      <div className="grid grid-cols-[1fr] gap-[.3em]">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-[large] 
              text-gray-900 
              dark:text-gray-100 
              block 
              font-bold 
              border-none 
              no-underline 
              whitespace-nowrap 
              cursor-pointer
              text-right
              "
            >
              {link.title}
            </Link>
          ))}

      </div>
    </div>
  )
}
