import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip proxy for api routes, static files, etc
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // If pathname is just '/', redirect to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // Check if pathname starts with a valid language code
  const pathnameHasLanguage = /^\/([a-z]{2})(\/.*)?\/?$/.test(pathname)
  if (!pathnameHasLanguage) {
    // Redirect to /en + pathname
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|images|.*\\..*).*)'],
}
