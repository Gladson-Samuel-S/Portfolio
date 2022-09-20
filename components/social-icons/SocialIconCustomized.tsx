import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIconCustomized = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <div
        className={`flex flex-wrap items-center justify-center gap-2 rounded-md bg-primary-600 p-2 hover:bg-primary-500 ${
          kind === 'mail' && 'bg-yellow-600 hover:bg-yellow-500'
        }`}
      >
        <SocialSvg className={`h-6 w-6  fill-current text-gray-100  dark:text-gray-800`} />
        <span className="text-md font-semibold capitalize text-gray-100 dark:text-gray-800">
          {kind}
        </span>
      </div>
    </a>
  )
}

export default SocialIconCustomized
