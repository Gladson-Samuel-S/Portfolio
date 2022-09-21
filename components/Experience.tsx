import siteMetadata from '@/data/siteMetadata'
import Image from './Image'

export default function Experience() {
  return (
    <main className="my-6">
      <h1 className="pb-4 text-4xl font-bold">Experience</h1>

      {siteMetadata.Experience.map((item, index) => (
        <div
          className="my-4 flex space-x-2 rounded-md border-b border-gray-200 p-2 align-top hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:hover:border-gray-600"
          key={index}
        >
          <div className="rounded-md bg-gray-100 p-2 shadow-sm dark:bg-gray-700">
            <Image src={item.logo} width={40} height={40} className="rounded-full" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-md font-semibold">{item.company}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.position}</p>
            <p className="text-gray-600 dark:text-gray-300">{item.timeline}</p>
          </div>
        </div>
      ))}
    </main>
  )
}
