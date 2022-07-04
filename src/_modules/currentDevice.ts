/**
 * @description currentDevice
 */
const currentDevice = (): string => {
  const deviceSize = window.innerWidth
  const breakpoint = 812
  const mobileText = 'SP'
  const desktopText = 'PC'
  const currentDeviceName = deviceSize <= breakpoint ? mobileText : desktopText

  return currentDeviceName
}

export default currentDevice
