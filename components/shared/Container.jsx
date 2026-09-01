'use client'
import { cn } from '@/lib/utils'

export function Container({ className, children, ...props }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-10', className)} {...props}>
      {children}
    </div>
  )
}

export default Container
