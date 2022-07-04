export interface DataLayer {
  event: string
  brand: string
  pageType?: string
  subID?: string
  pageUrlPath?: string
  pageTitle?: string
  previousPageExists?: boolean
  eventCategory?: string
  eventAction?: string
  eventLabel?: string
}

export interface ProductInterface {
  link: string
  title: string
  text: string
}
