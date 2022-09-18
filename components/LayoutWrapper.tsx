import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        {/* Header */}
        <header className="flex items-center justify-between py-10">
          {/* Logo and Header Text */}
          <div className="decoration-transparent decoration-wavy decoration-2 transition duration-300 ease-in-out hover:underline hover:decoration-cyan-500 hover:underline-offset-8">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-bold text-primary-500 sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
              </div>
            </Link>
          </div>

          {/* Navigation Link Items */}
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 decoration-transparent decoration-wavy decoration-2 transition duration-300 ease-in-out hover:underline hover:decoration-primary-600 hover:underline-offset-8 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>

        {/* Site Content */}
        <main className="mb-auto">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
