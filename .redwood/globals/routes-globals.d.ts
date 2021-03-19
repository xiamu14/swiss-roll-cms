import type FatalErrorPageType from '/Users/ben/Documents/w/code/project/swiss-roll-cms/web/src/pages/FatalErrorPage/FatalErrorPage'
import type NotFoundPageType from '/Users/ben/Documents/w/code/project/swiss-roll-cms/web/src/pages/NotFoundPage/NotFoundPage'

declare global {
  const FatalErrorPage: typeof FatalErrorPageType
  const NotFoundPage: typeof NotFoundPageType
}
