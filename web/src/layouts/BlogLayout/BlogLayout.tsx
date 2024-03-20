import { useEffect } from 'react'

import Datepicker from 'react-tailwindcss-datepicker'

import { Link, routes, useLocation } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useDatesStore } from 'src/stores'
type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const location = useLocation()

  // this is some code coming from preline ui
  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  const { dates, setDates } = useDatesStore()

  const handleValueChange = (newDates) => {
    console.log('newDates:', newDates)
    setDates(newDates)
  }
  return (
    <>
      <Toaster />
      <header className="container relative mx-auto flex items-center justify-between border-b-2 px-8 py-4 text-white">
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
        <nav></nav>
      </header>
      <main className="container relative mx-auto ">
        <div className="mb-2 flex w-full justify-end">
          <Datepicker
            separator={'to'}
            value={dates}
            primaryColor={'blue'}
            onChange={handleValueChange}
            inputClassName="py-3 px-4 w-full bor border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            containerClassName="relative max-w-[260px] w-full"
            showShortcuts={true}
          />
        </div>
        {children}
      </main>
    </>
  )
}

export default BlogLayout
