# OpenAI API Setup Instructions

## ⚠️ CRITICAL: Your API key must be properly configured

The API is failing because the OpenAI API key is not set correctly or contains invalid characters.

## Step 1: Get a Valid OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (it will look like: `sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
5. **Important**: OpenAI keys only contain:
   - Letters (a-z, A-Z)
   - Numbers (0-9)
   - Hyphens (-)
   - NO special characters like ×, Ø, or Cyrillic letters

## Step 2: Create `.env.local` File

1. In your project root (`/Users/amalegalsolutions/Desktop/iprkaro/ipkaro/`), create a file named `.env.local`

2. Add this single line to the file:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

3. Replace `your_actual_api_key_here` with your real API key from Step 1

**Example:**
```
OPENAI_API_KEY=sk-proj-AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
```

## Step 3: Restart Your Development Server

After creating/updating `.env.local`:

```bash
# Stop the current server (Ctrl+C in the terminal)
# Then restart it:
cd /Users/amalegalsolutions/Desktop/iprkaro/ipkaro
pnpm dev
```

## Step 4: Test the API

1. Go to http://localhost:3000
2. Enter a trademark name and class
3. Fill out the form
4. If the API key is correct, you should be redirected to the dashboard with AI-generated metrics

## Troubleshooting

### Error: "OpenAI API key not configured"
- The `.env.local` file doesn't exist or is in the wrong location
- Make sure it's in `/Users/amalegalsolutions/Desktop/iprkaro/ipkaro/.env.local`

### Error: "Invalid API key"
- Your API key contains invalid characters
- Copy a fresh key from OpenAI platform
- Make sure there are no spaces before or after the key

### Error: "Insufficient quota"
- You need to add credits to your OpenAI account
- Go to https://platform.openai.com/account/billing

### Still not working?
Check the server console for detailed error messages. The API route now logs helpful debugging information.

## Security Note

⚠️ **NEVER commit `.env.local` to Git!**

The `.env.local` file is already in `.gitignore`, so it won't be committed. This keeps your API key secure.

## Cost Information

- Model: GPT-3.5-turbo (most affordable option)
- Approximate cost: $0.001 - $0.002 per trademark analysis
- Results are cached in Firebase to avoid duplicate API calls

