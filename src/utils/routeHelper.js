export function checkIsActive(pathname, url) {
  if (pathname === url) {
    return true;
  }
  return false;
}
