import React, { type FC, type PropsWithChildren } from 'react'
import clsx from 'clsx'
import { type CommonProps } from '@models/commons'

import style from './Page.module.scss'

/**
 * Displays a page with a default or narrow width.
 * This component is used to wrap the content of the application's pages.
 */
const Page: FC<PageProps> = ({ children, variant, className, ...rest }) => {
  const classList = clsx(style.page, {
    [style.narrow]: variant === 'narrow'
  }, className)

  return (
    <div className={classList} {...rest}>
      {children}
    </div>
  )
}

export interface PageProps extends PropsWithChildren<CommonProps> {
  /**
   * Defines the width of the page.
   */
  variant?: 'default' | 'narrow'
}

export default Page
