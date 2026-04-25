import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define which routes SHOULD keep noindex (administrative/internal)
const noIndexPaths = ['/nullify', '/authority', '/api/clerk']

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const host = req.headers.get('host')

  // 1. Consolidated Redirect: Force HTTPS and WWW in one step
  const proto = req.headers.get('x-forwarded-proto')
  const shouldRedirectProto = proto === 'http'
  const shouldRedirectHost = host === 'iprkaro.com'

  if (shouldRedirectProto || shouldRedirectHost) {
    const redirectRes = NextResponse.redirect(`https://www.iprkaro.com${pathname}`, 301)
    // Protection: Ensure SEO indexing headers are present on redirects
    redirectRes.headers.set('X-Robots-Tag', 'index, follow')
    return redirectRes
  }

  const res = NextResponse.next()

  const isNoIndexReserved = noIndexPaths.some(path => pathname.startsWith(path))

  // Protection: Force indexing headers for all public routes
  // to override any potential platform-level injections (Vercel, etc.)
  if (!isNoIndexReserved) {
    res.headers.set('X-Robots-Tag', 'index, follow')
  } else {
    // For reserved pages, ensure we aren't accidentally forcing index
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  return res
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}

