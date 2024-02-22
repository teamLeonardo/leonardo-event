import { Fragment, ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mb-10 divide-double">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre Mi
          </h1>
        </div>
        <div className="items-start mb-4 space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="text-gray-500 dark:text-gray-400 mt-2">(+51)924426169</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none text-gray-950 dark:text-gray-200 pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>

        <div className='pt-6'>
          <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            Experencia Laboral
          </h2>
          <ul className="timeline timeline-vertical timeline-snap-icon timeline-compact">
            {
              [
                {
                  puesto: "Frontend Desarrollado",
                  empresa: "SOEN SAC.",
                  fecha: "Febreo 2023 - Diciembre 2023",
                  contenido: [
                    "Desarrollo de sistemas de gestión abarcando pedidos, productos, clientes.",
                    "Integración de seguimiento en tiempo real de pedidos con Google Maps y Firebase.",
                    "Integración de SDK de Google y Facebook para un inicio de sesión eficiente.",
                    "Manipulación avanzada del DOM.",
                    "Desarrollo de diferentes pantallas para ver, crear, editar y eliminar información.",
                    "Creación de un sistema integral para la gestión de módulos, roles, asignación de permisos y usuarios en la aplicación.",
                  ]
                },
                {
                  puesto: "E-commerce frontend Desarrollador",
                  empresa: "Avatar Global",
                  fecha: "Julio 2021 - Diciembre 2022",
                  contenido: [
                    "Integración de nuevas funcionalidades en todas las etapas de desarrollo con un entorno de React.",
                    "Mantenimiento y optimización de aplicaciones existentes (SEO, renderizado, velocidad de carga, accesibilidad)",
                    "Investigación de características nativas de HCL Commerce para nueva tienda usando React.js",
                    "Optimización Redux y Context API",
                    "Experiencia en desarrollo de aplicaciones SPAs utilizando React.",
                    "Maquetación basada en el diseño de Figma",
                  ]
                },
                {
                  puesto: "Desarrollador web",
                  empresa: "PLAYTEC",
                  fecha: "Enero 2020 - Diciembre 2020",
                  contenido: [
                    "Realicé maquetación según diseño de Figma.",
                    "Creación de componentes reutilizables en React.",
                    "Contribuí al desarrollo de aplicaciones web utilizando VueJS para la creación de Web Components y SPAs Applications.",
                    "Desarrollo de componentes reutilizables con React para la aplicación.",
                    "Gestión del estado de la aplicación utilizando Redux.",
                    "Integración de protocolos de socket y WebRTC en el cliente.",
                    "Migración e integración en aplicación PWA.",
                  ]
                },
                {
                  puesto: "Desarrollador PHP y Visual Basic .NET",
                  empresa: "QUIPU S.A",
                  fecha: "Enero 2019 - Diciembre 2019",
                  contenido: [
                    "Mantenimiento de software contable desarrollado en Visual Basic.",
                    "Creación de soluciones web de gestión mediante PHP.",
                    "Mantenimiento de bases de datos relacionales para ambos proyectos.",
                    "Optimización de consultas y rendimiento en la aplicación web de gestión."
                  ]
                }
              ].map((el, keyAllIdx) => (
                <li key={keyAllIdx}>
                  <div className="timeline-start">
                    <div className="text-sm font-black ">
                      {el.puesto}
                    </div>
                    <time className="font-mono italic">
                      {el.fecha}
                    </time>
                  </div>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-box timeline-end text-start bg-white dark:bg-[#111728]">
                    <div className="text-lg font-black">
                      {el.empresa}
                    </div>
                    <ul className='dark:text-gray-400 list-disc ml-5'>
                      {el.contenido.map((cont, keyIdx) => (
                        <li key={keyIdx}>
                          {cont}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                </li>
              ))
            }

          </ul>
        </div>

      </div>
    </>
  )
}
