import siteMetadata from '@/data/siteMetadata'
import SocialIconCustomized from './social-icons/SocialIconCustomized'

export default function introduction() {
  return (
    <main className="rounded-md border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:hover:border-gray-600">
      <div className="my-6">
        <article>
          <h1 className="bg-gradient-to-r from-lime-800 to-yellow-600 bg-clip-text text-3xl font-bold leading-9 tracking-tight text-transparent dark:from-emerald-500 dark:to-lime-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.introduction.header}
          </h1>
          <h3 className="mt-3 text-2xl font-bold text-gray-800 underline decoration-gray-300 decoration-wavy decoration-1 underline-offset-8 dark:text-gray-300 dark:decoration-gray-600 dark:decoration-1">
            {siteMetadata.introduction.jobTitle}
          </h3>
          <p className="py-5 text-gray-500 dark:text-gray-400">
            {siteMetadata.introduction.content}
          </p>

          <ul>
            {siteMetadata.introduction.contentList.map((item) => (
              <li key={item.id}>
                <p className=" text-gray-500 dark:text-gray-400">{item.text}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mb-6 flex space-x-3">
        <SocialIconCustomized kind="linkedin" href={siteMetadata.linkedin} size={6} />
        <SocialIconCustomized kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
        <SocialIconCustomized kind="github" href={siteMetadata.github} size={6} />
        <SocialIconCustomized kind="resume" href={siteMetadata.resume} size={6} />
      </div>
    </main>
  )
}
