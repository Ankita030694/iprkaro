import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define which routes require Clerk authentication (partners only)
const isPartnerRoute = createRouteMatcher(['/partners/searchResults(.*)'])

// Define public routes that should skip Clerk authentication checks
const isPublicRoute = createRouteMatcher([
  '/api/clerk/(.*)',  // Admin Clerk management APIs (accessed by Firebase-authenticated admins)
  '/api/analyze-trademark',  // Public trademark analysis
  '/nullify',  // Firebase admin login
  '/authority/(.*)',  // All authority routes use Firebase Auth
])

export default clerkMiddleware(async (auth, req) => {
  // Skip Clerk auth for public routes
  if (isPublicRoute(req)) {
    const res = NextResponse.next()
    res.headers.delete('X-Robots-Tag')
    return res
  }

  // Protect partner routes - redirect to login if not authenticated
  if (isPartnerRoute(req)) {
    const { userId } = await auth()

    if (!userId) {
      const loginUrl = new URL('/partner/login', req.url)
      loginUrl.searchParams.set('redirect_url', req.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  const res = NextResponse.next()
  res.headers.delete('X-Robots-Tag')
  return res

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}

