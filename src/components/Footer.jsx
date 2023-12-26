import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer>
      

<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">CineInfo</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/subarna-pokharel-b76077230/" target='_blank' rel="noreferrer" className="text-base hover:underline me-4 md:me-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://github.com/subarnapkrl" target='_blank' rel="noreferrer" className="text-base hover:underline me-4 md:me-6">Github</a>
        </li>
        <li>
            <a href="https://www.instagram.com/soo3arna/" rel="noreferrer" target='_blank' className="text-base hover:underline me-4 md:me-6">Instagram</a>
        </li>
       
    </ul>
    </div>
</footer>

    </footer>
  )
}

