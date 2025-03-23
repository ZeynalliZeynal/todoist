export const projectSlug = (pathname: string) =>
  pathname.includes('/projects') ? pathname.split('/')?.at(3) || '' : '';
