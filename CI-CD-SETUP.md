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

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

### Required Secrets:

```
VERCEL_TOKEN          # Your Vercel API token
ORG_ID                # Your Vercel organization ID  
PROJECT_ID            # Your Vercel project ID
VERCEL_ORG_ID         # Your Vercel organization ID (same as ORG_ID)
```

### How to get these values:

1. **VERCEL_TOKEN**:
   ```bash
   # Install Vercel CLI if not already installed
   npm i -g vercel
   
   # Login and get token
   vercel login
   # Go to https://vercel.com/account/tokens to create a token
   ```

2. **ORG_ID and PROJECT_ID**:
   ```bash
   # In your project directory
   cd site
   vercel link
   
   # This creates .vercel/project.json with the IDs
   cat .vercel/project.json
   ```

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

1. **Add GitHub Secrets**: Set up the Vercel integration secrets
2. **Test the Pipeline**: Create a PR to test the validation workflow
3. **Monitor Performance**: Check Lighthouse reports after deployments
4. **Review Dependencies**: Weekly automated dependency updates via PRs

Your CI/CD pipeline is now ready for professional development! 🎉
