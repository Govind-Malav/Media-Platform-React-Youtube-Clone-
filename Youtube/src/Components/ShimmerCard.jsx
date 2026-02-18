import React from 'react'

export default function ShimmerCard() {
  return (
    <div className="animate-pulse">

      <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
      <div className="flex gap-3 mt-3">
        <div className="shrink-0">
          <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800"></div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  )
}