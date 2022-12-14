import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium capitalize text-primary-500 underline-offset-4 hover:text-primary-600 hover:underline dark:hover:text-primary-400">
        # {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
