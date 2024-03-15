import { useEffect } from 'react'

import { Link, routes, useLocation } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const location = useLocation()

  // this is some code coming from preline ui
  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  return (
    <>
      <Toaster />
      <header className="container relative mx-auto flex items-center justify-between bg-radial-primary-secondary px-8 py-4 text-white">
        <h1 className="font-semibold tracking-tight">
          <Link
            className="text-primary-400 transition duration-100 hover:text-blue-100"
            to={routes.home()}
          >
            <span className="text-[18px]">i</span>
            <span className="text-[20px]">n</span>
            <span className="text-[22px]">f</span>
            <span className="text-[24px]">l</span>
            <span className="text-[26px]">a</span>
            <span className="text-[30px]">t</span>
            <span className="text-[32px]">i</span>
            <span className="text-[34px]">o</span>
            <span className="text-[36px]">n</span>

          </Link>
        </h1>
        <nav>
          <ul className="font-light relative flex items-center">
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-blue-600"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-blue-600"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="px-4 py-2">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="px-4 py-2">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="text-xs absolute bottom-1 right-0 mr-12 text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="container relative mx-auto ">
        {children}</main>
    </>
  )
}

export default BlogLayout
