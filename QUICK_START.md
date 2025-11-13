# Quick Start Guide - Clerk Partner Portal

Get the Clerk partner authentication system up and running in 5 minutes.

## Prerequisites Checklist

- [ ] Clerk account created at https://clerk.com
- [ ] Clerk application created in dashboard
- [ ] Firebase project already configured (for admin panel)
- [ ] Development server running capabilities

## Step 1: Get Clerk Keys (2 minutes)

1. Go to https://dashboard.clerk.com
2. Select your application
3. Go to **API Keys**
4. Copy both keys:
   - **Publishable Key** (starts with `pk_`)
   - **Secret Key** (starts with `sk_`)

## Step 2: Configure Environment (1 minute)

Create or update `.env.local` in the `ipkaro` directory:

```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_here

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/partner/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/partner/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/partners/searchResults
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/partners/searchResults
```

Replace `your_key_here` and `your_secret_here` with your actual Clerk keys.

## Step 3: Start Development Server (1 minute)

```bash
cd ipkaro
pnpm dev
```

Wait for server to start at http://localhost:3000

## Step 4: Create First Partner Account (1 minute)

1. Open http://localhost:3000/nullify
2. Log in with **Firebase admin credentials** (existing admin login)
3. Navigate to **User Management** in sidebar
4. Click **Create User**
5. Fill in partner details:
   - First Name: Test
   - Last Name: Partner
   - Email: test@example.com
   - Phone: +91 1234567890
   - Password: testpass123
6. Click **Create User**

## Step 5: Test Partner Login (30 seconds)

1. Open http://localhost:3000/partner/login (in new incognito window)
2. Sign in with:
   - Email: test@example.com
   - Password: testpass123
3. You should be redirected to `/partners/searchResults`

## Step 6: Setup Firestore Index (When Needed)

When the partner first visits search results, you'll see an index error in console.

**Easy Fix:**
1. Look for error message in browser console or terminal
2. Click the link in the error (will open Firebase Console)
3. Click **Create Index**
4. Wait for index to build (1-2 minutes)
5. Refresh the page

**Done!** The partner portal is now fully functional.

## Verify Everything Works

### Admin Panel (Firebase Auth)
- [ ] Can access `/authority/user-management`
- [ ] Can create partner accounts
- [ ] Can see list of partners
- [ ] All other admin features work normally

### Partner Portal (Clerk Auth)
- [ ] Can log in at `/partner/login`
- [ ] Redirects to `/partners/searchResults`
- [ ] Shows empty state (no searches yet)
- [ ] Profile button works (UserButton)

### Search Functionality
- [ ] Public users can search trademarks (no auth)
- [ ] Partners can search trademarks (auth required)
- [ ] Partner searches show in their search history
- [ ] Public searches don't show in any partner's history
- [ ] Clicking a search in history opens `/dashboard` with full report

## Common Issues & Solutions

### "Clerk publishable key not found"
**Solution:** Make sure you added keys to `.env.local` and restarted the dev server.

### "Cannot read properties of undefined"
**Solution:** Check that you copied the keys correctly (no extra spaces).

### Partner can't log in
**Solution:** 
1. Verify account was created in Clerk Dashboard
2. Check email/password are correct
3. Try creating a new account

### Search results page shows error
**Solution:** Create Firestore index as described in Step 6.

### Partner sees all searches (not just theirs)
**Solution:** 
1. Ensure you're logged in as partner (not admin)
2. Check that userId is being saved (view document in Firestore)
3. Verify partner is searching while logged in

## File Locations Reference

| Feature | File Path |
|---------|-----------|
| User Management Page | `src/app/authority/user-management/page.tsx` |
| Partner Login | `src/app/partner/login/[[...sign-in]]/page.tsx` |
| Partner Search History | `src/app/partners/searchResults/page.tsx` |
| Partner Layout | `src/app/partners/layout.tsx` |
| Middleware | `src/middleware.ts` |
| Create User API | `src/app/api/clerk/create-user/route.ts` |
| List Users API | `src/app/api/clerk/users/route.ts` |
| Analysis API (modified) | `src/app/api/analyze-trademark/route.ts` |

## Next Steps

1. **Production Setup**
   - Replace test keys with production keys
   - Configure production URLs in Clerk Dashboard
   - Set up custom domain for Clerk (optional)

2. **User Management**
   - Create partner accounts for real users
   - Share login credentials securely
   - Train partners on how to use the portal

3. **Monitoring**
   - Monitor Clerk Dashboard for user activity
   - Check Firestore for search results
   - Review authentication logs

## Support Resources

- **Clerk Setup Guide:** See `CLERK_SETUP.md`
- **Implementation Details:** See `IMPLEMENTATION_SUMMARY.md`
- **Firestore Index:** See `FIRESTORE_INDEX_SETUP.md`
- **Clerk Docs:** https://clerk.com/docs
- **Firebase Console:** https://console.firebase.google.com

## Security Reminders

- ⚠️ Never commit `.env.local` to git
- ⚠️ Keep Secret Key private (server-side only)
- ⚠️ Use different keys for development and production
- ⚠️ Regularly review user access in Clerk Dashboard
- ⚠️ Monitor authentication logs for suspicious activity

---

**Congratulations!** Your Clerk partner portal is ready to use. 🎉


