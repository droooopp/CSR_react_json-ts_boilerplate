import { DataLayer } from '../_interface'

declare global {
  interface Window {
    dataLayer: DataLayer[]
  }
}

/**
 * @description GA Track Event
 */
const trackEvent = (e: React.MouseEvent<HTMLElement>): void => {
  const el = e.currentTarget

  window.dataLayer.push({
    event: 'trackEvent',
    brand: 'brand',
    eventCategory: el.dataset.category,
    eventAction: el.dataset.action ? el.dataset.action : 'click',
    eventLabel: el.dataset.label
  })
}

export default trackEvent
