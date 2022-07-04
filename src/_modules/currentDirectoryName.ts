/**
 * @description currentDirectoryName
 */
const currentDirectoryName = (): string => {
  const pathname = location.pathname
  const pathnameArray = pathname.split('/')
  const cleanPathnameArray = pathnameArray.filter(Boolean)
  const labelName = cleanPathnameArray[cleanPathnameArray.length - 1]

  return labelName
}

export default currentDirectoryName
