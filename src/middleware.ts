import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define which routes SHOULD keep noindex (administrative/internal)
const noIndexPaths = ['/nullify', '/authority', '/api/clerk']

export function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  const isNoIndexReserved = noIndexPaths.some(path => pathname.startsWith(path))

  // Protection: Force indexing headers for all public routes
  // to override any potential platform-level injections (Vercel, etc.)
  if (!isNoIndexReserved) {
    res.headers.set('X-Robots-Tag', 'index, follow, all')
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

