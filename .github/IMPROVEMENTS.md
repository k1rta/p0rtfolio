# Repository Improvements Checklist

## GitHub Issues

### ✅ Completed
- [x] **#1** CI badge clickable - Already implemented in README
- [x] **#5** test:nav script in README - Already listed

### 🔧 To Do (GitHub Settings)
- [ ] **#2** Add repository topics
  - Go to: https://github.com/k1rta/p0rtfolio/settings
  - Click "About" gear icon
  - Add topics: `astro`, `playwright`, `typescript`, `qa`, `testing`, `portfolio`

- [ ] **#3** Repository description - Already set correctly ✅
  - Current: "QA Engineer portfolio — built with Astro, TypeScript, deployed on Vercel"

- [ ] **#4** Delete merged branches
  - Local branches to delete:
    - `feat/e2e-tests`
    - `feat/experience-timeline`
    - `feat/hero-section`
    - `feat/nav-footer`
    - `feat/portfolio-foundation`
    - `feat/projects-section`
    - `feat/skills-section`
    - `master` (duplicate of main)
    - `add-latest-report-redirect` (if merged)
  
  - Commands:
    ```bash
    # Delete local branches
    git branch -d feat/e2e-tests feat/experience-timeline feat/hero-section feat/nav-footer feat/portfolio-foundation feat/projects-section feat/skills-section master
    
    # Delete remote branches (after confirming they're merged)
    git push origin --delete feat/e2e-tests feat/experience-timeline feat/hero-section feat/nav-footer feat/portfolio-foundation feat/projects-section feat/skills-section
    ```

## Vercel Issues

### 🔧 To Do (Vercel Dashboard)
- [ ] **#6** Change Node.js version to 22.x
  - Go to: Project Settings → General → Node.js Version
  - Change from 24.x to 22.x

- [ ] **#9** gh-pages branch showing as active
  - Will auto-fix after next CI run (vercel.json already merged) ✅

- [ ] **#10** Old preview branches listed
  - Will disappear after deleting GitHub branches

### 📊 Optional Improvements
- [ ] **#7** Add custom domain (e.g., kirta.dev)
  - Go to: Project Settings → Domains

- [ ] **#8** Enable Speed Insights
  - Go to: Analytics → Speed Insights
  - Click "Enable" (free, one-click)

## Priority Order

### Do Now (5 minutes)
1. ✅ CI badge - Already done
2. Add repository topics (GitHub)
3. Delete merged branches (GitHub + local)
4. Change Node to 22.x (Vercel)

### Optional Later
5. Enable Speed Insights (Vercel)
6. Add custom domain (Vercel)
