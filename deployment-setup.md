
# Hostinger Auto-Deployment Setup

## Step 1: Get your Hostinger FTP credentials
1. Log into your Hostinger control panel
2. Go to **Files** → **File Manager** or **FTP Accounts**
3. Note down:
   - FTP Host (usually your domain or something like ftp.yourdomain.com)
   - FTP Username
   - FTP Password

## Step 2: Add secrets to your GitHub repository
1. Go to your GitHub repository: https://github.com/versaprav1/local-global-website
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

   - **Name:** `FTP_HOST`
     **Value:** Your FTP host (e.g., ftp.localglobal.website or your Hostinger FTP host)

   - **Name:** `FTP_USERNAME` 
     **Value:** Your FTP username

   - **Name:** `FTP_PASSWORD`
     **Value:** Your FTP password

## Step 3: Test the deployment
1. Push any change to your main/master branch
2. Go to **Actions** tab in your GitHub repository
3. Watch the deployment process
4. Check https://localglobal.website/ to see your changes

## Important Notes:
- The workflow deploys to `/public_html/` directory (standard for Hostinger)
- Only the built files from `dist/` folder are uploaded
- Deployment happens automatically on every push to main/master branch
- Build takes ~2-3 minutes, deployment takes ~1 minute

## Troubleshooting:
- If FTP fails, check your credentials in repository secrets
- Make sure your Hostinger plan supports FTP access
- Verify the server-dir path matches your hosting setup
