# Clerk Authentication Setup Guide

This guide will help you set up Clerk authentication for the partner portal.

## Prerequisites

- A Clerk account (sign up at https://clerk.com)
- Node.js and npm/pnpm installed

## Step 1: Create a Clerk Application

1. Go to https://dashboard.clerk.com
2. Click "Add application"
3. Choose a name for your application (e.g., "IPR Karo Partners")
4. Select your preferred authentication methods (Email/Password recommended)
5. Click "Create application"

## Step 2: Get Your API Keys

After creating your application:

1. In the Clerk Dashboard, go to "API Keys"
2. Copy your **Publishable Key** (starts with `pk_`)
3. Copy your **Secret Key** (starts with `sk_`)

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in the `ipkaro` directory (if it doesn't exist)
2. Add your Clerk keys:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/partner/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/partner/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/partners/searchResults
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/partners/searchResults
```

## Step 4: Configure Clerk Dashboard

In your Clerk Dashboard, configure the following:

### Paths
- Go to "Paths" in your application settings
- Set these paths:
  - Sign in: `/partner/login`
  - Sign up: `/partner/signup`
  - After sign in: `/partners/searchResults`
  - After sign up: `/partners/searchResults`

### Email & Password Settings
- Go to "User & Authentication" → "Email, Phone, Username"
- Enable "Email address" and mark it as required
- Enable "Password" authentication
- Configure password requirements as needed

## Step 5: Test the Setup

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. As an admin (Firebase authenticated):
   - Go to `/authority/user-management`
   - Create a test partner account

3. As a partner:
   - Go to `/partner/login`
   - Sign in with the credentials created by admin
   - You should be redirected to `/partners/searchResults`

## Architecture Overview

### Authentication Flow

**Admin Users (Firebase Auth):**
- Login at `/nullify`
- Access `/authority/*` routes
- Can create partner accounts at `/authority/user-management`

**Partner Users (Clerk Auth):**
- Login at `/partner/login`
- Access `/partners/*` routes
- View their own trademark search history at `/partners/searchResults`

### Data Flow

1. Admin creates a partner account using Clerk API
2. Partner logs in via Clerk
3. Partner searches for trademarks (automatically tagged with their `userId`)
4. Search results stored in Firestore with `userId` field
5. Partner sees only their own searches at `/partners/searchResults`

## Security Notes

- Never commit `.env.local` to version control
- Keep your Clerk Secret Key private
- Use production keys when deploying to production
- Firebase Auth is used only for admin panel (`/authority/*`)
- Clerk Auth is used only for partner portal (`/partners/*`)

## Troubleshooting

### "Clerk key not found"
- Make sure environment variables are set in `.env.local`
- Restart your dev server after adding environment variables

### Partners can't log in
- Verify the partner account was created successfully in Clerk Dashboard
- Check that email and password are correct
- Ensure Clerk middleware is properly configured

### Can't access partner routes
- Check that middleware is protecting `/partners/searchResults`
- Verify ClerkProvider is wrapping the partners layout
- Check browser console for authentication errors

## Support

For Clerk-specific issues, visit:
- Clerk Documentation: https://clerk.com/docs
- Clerk Support: https://clerk.com/support

For application-specific issues, contact your development team.


