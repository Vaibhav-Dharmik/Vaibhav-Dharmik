# CI/CD Setup Guide

## 🚀 GitHub Actions CI/CD Pipeline

Your repository now has a comprehensive CI/CD pipeline with the following workflows:

### 1. **Main CI/CD Pipeline** (`deploy.yml`)

- **Triggers**: Push to `main` or `dev` branches, PRs to `main`
- **Jobs**:
  - 🔒 **Security Audit**: Runs npm audit to check for vulnerabilities
  - 🔍 **Quality Checks**: TypeScript validation, ESLint, build testing
  - 🚀 **Deploy Preview**: Creates preview deployments for PRs
  - 📦 **Deploy Production**: Deploys to production on main branch
  - 🌟 **Lighthouse Check**: Performance monitoring post-deployment

### 2. **PR Validation** (`pr-checks.yml`)

- **Triggers**: Pull requests to `main` or `dev`
- **Features**:
  - Validates package.json structure
  - Checks for large files (>10MB)
  - TypeScript compilation check
  - Build verification
  - Automated PR comments with validation results

### 3. **Dependency Updates** (`dependency-updates.yml`)

- **Triggers**: Weekly schedule (Mondays 9 AM UTC) or manual
- **Features**:
  - Automatic dependency updates
  - Security patch applications
  - Automated PR creation for updates

## 🔧 Required GitHub Secrets

To enable automatic Vercel deployments, add these secrets to your GitHub repository:

1. Go to your GitHub repository: `https://github.com/Vaibhav-Dharmik/Vaibhav-Dharmik`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each of the following:

### Required Secrets:

```
VERCEL_TOKEN          # Your Vercel API token (get from step 1 below)
ORG_ID                # Your Vercel organization ID
PROJECT_ID            # Your Vercel project ID
VERCEL_ORG_ID         # Your Vercel organization ID (same as ORG_ID)
```

### Step-by-Step Setup:

#### 1. **Get VERCEL_TOKEN**:

- Go to: https://vercel.com/account/tokens
- Click **Create Token**
- Name: `GitHub Actions CI/CD`
- Scope: **Full Account**
- Expiration: **No Expiration** (or set to 1 year)
- Click **Create**
- Copy the token (starts with `vercel_...`)

#### 2. **Get PROJECT_ID and ORG_ID**:

```bash
# In your site directory
cd site
cat .vercel/project.json
```

#### 3. **Add Secrets to GitHub**:

- Go to: https://github.com/Vaibhav-Dharmik/Vaibhav-Dharmik/settings/secrets/actions
- Add each secret with values from steps 1 & 2

## 📊 Performance Monitoring

The Lighthouse CI integration provides:

- Performance scores
- Accessibility audits
- SEO checks
- Best practices validation

Reports are automatically generated for production deployments.

## 🛠️ Available Scripts

Your project now includes enhanced npm scripts:

```bash
npm run dev           # Start development server
npm run build         # Production build
npm run start         # Start production server
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues automatically
npm run type-check    # TypeScript type checking
npm run test          # Run type-check + lint
npm run clean         # Clean build artifacts
npm run analyze       # Build with bundle analysis
```

## 🔄 Workflow Features

### Automatic Features:

- ✅ Security vulnerability scanning
- ✅ TypeScript type checking
- ✅ ESLint code quality checks
- ✅ Automated dependency updates
- ✅ Performance monitoring
- ✅ Preview deployments for PRs
- ✅ Production deployments on main
- ✅ PR validation and comments

### Manual Triggers:

- Dependency update workflow can be triggered manually
- All workflows support `workflow_dispatch` for manual runs

## 🚦 Branch Strategy

- **`main`**: Production deployments
- **`dev`**: Development/staging (also triggers preview deployments)
- **Feature branches**: Create PRs to `main` for preview deployments

## 📝 Next Steps

1. **Add GitHub Secrets**: Follow the setup guide above
2. **Test Pipeline**: Create a PR to test workflows
3. **Monitor**: Check deployments and performance reports

Your CI/CD pipeline is ready! 🎉

Your CI/CD pipeline is now ready for professional development! 🎉
