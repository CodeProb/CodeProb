# Contributing to CodeProb 🚀

Welcome to CodeProb! We're excited to have you contribute to our community-driven programming knowledge platform.

## 🌟 Quick Start for Contributors

### 1. **Create Content** (Easiest Way)
1. Visit our [Writer Interface](https://your-username.github.io/codeprob/writer.html)
2. Choose your content type: Problem, Concept, or Article
3. Fill out the form with your content
4. Click "Export HTML" to download your file
5. Follow the submission steps below

### 2. **Submit Your Content**
1. **Fork** this repository
2. **Add** your exported HTML file to the appropriate folder:
   - Problems → `problems/your-file.html`
   - Concepts → `concepts/your-file.html` 
   - Articles → `articles/your-file.html`
3. **Update** `contributor-config.json` with the generated entry
4. **Submit** a Pull Request

### 4. Creating a Profile
Contributors can create a professional profile page to showcase their work.

1.  Open the **Writer Interface** (`writer.html`).
2.  Switch to the **Profile** tab.
3.  Fill in your details (Username, Display Name, Bio, etc.).
4.  Click **Export HTML**. You will download an `index.html` file and see a JSON snippet.
5.  **In your forked repository:**
    *   Create a new folder in `profiles/` matching your chosen username (e.g., `profiles/john-doe/`).
    *   Place the exported `index.html` inside that folder.
    *   Open `profiles.json` (in the root directory) and add your JSON snippet to the `profiles` array.
6.  Submit a Pull Request.

Once merged, your profile will be at `https://codeprob.github.io/profiles/john-doe/` and your name on articles/problems will automatically link to it.

## 📝 Content Guidelines

### Problems (CodingBat Style)
- **Clear problem statement** with constraints
- **Multiple examples** with input/output
- **Difficulty level**: Easy, Medium, Hard
- **Topics**: Tag with relevant concepts
- **Optional hints** for learners

### Concepts (Wiki Style)
- **Educational explanations** of programming topics
- **Code examples** in multiple languages
- **Neutral, informative tone**
- **Links to related problems**

### Articles (Tutorial/Insight Style)
- **Practical tutorials** or insights
- **Personal experiences** and opinions welcome
- **References** to external resources
- **Clear, engaging writing**

## 🛠️ Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/codeprob.git
cd codeprob

# Install dependencies
npm install

# Run tests
npm test

# Validate content
npm run validate
```

## 📁 Repository Structure

```
codeprob/
├── 📄 index.html              # Homepage
├── 📁 problems/               # Programming exercises
├── 📁 concepts/               # Educational content
├── 📁 articles/               # Community articles
├── 📄 writer.html             # Content creation tool
├── 📄 contributor-config.json # Content registry
├── 📁 assets/                 # CSS, JS, templates
│   ├── 📁 css/               # Stylesheets
│   ├── 📁 js/                # JavaScript modules
│   └── 📁 templates/         # HTML templates
├── 📁 docs/                   # Documentation
├── 📁 scripts/               # Build/validation scripts
└── 📁 .github/               # GitHub workflows
```

## ✅ Content Quality Standards

### All Content Must Have:
- ✅ Valid HTML5 structure
- ✅ Proper metadata (title, author, date)
- ✅ Consistent formatting
- ✅ Working internal links
- ✅ Appropriate difficulty/complexity level

### Problems Must Include:
- ✅ Clear problem description
- ✅ At least 2 examples with explanations
- ✅ Proper difficulty classification
- ✅ Relevant topic tags

### Concepts Must Include:
- ✅ Brief overview section
- ✅ Detailed explanation
- ✅ Code examples
- ✅ Links to practice problems

### Articles Must Include:
- ✅ Substantial content (500+ words)
- ✅ Clear structure with headings
- ✅ Relevant tags
- ✅ References (if applicable)

## 🔍 Review Process

1. **Automated Checks**: GitHub Actions will validate your content
2. **Community Review**: Other contributors may provide feedback
3. **Maintainer Approval**: Final review by project maintainers
4. **Merge & Deploy**: Your content goes live automatically!

## 🎯 Contribution Ideas

### High-Impact Contributions:
- **Classic algorithms** (sorting, searching, graph traversal)
- **Data structure explanations** (arrays, trees, hash tables)
- **Language-specific tutorials** (Python basics, JavaScript DOM)
- **Problem-solving strategies** (divide & conquer, dynamic programming)
- **Code review best practices**
- **Debugging techniques**

### Beginner-Friendly Areas:
- **Easy problems** for new programmers
- **Fundamental concepts** (variables, loops, functions)
- **Getting started guides** for different languages
- **Common mistakes** and how to avoid them

## 🏆 Recognition

Contributors are recognized through:
- **Author attribution** on all content
- **GitHub contributor stats**
- **Community acknowledgment**
- **Featured contributor spotlights**

## 📞 Getting Help

- **Issues**: Report bugs or request features
- **Discussions**: Ask questions or share ideas
- **Discord**: Join our community chat (coming soon!)
- **Email**: contact@codeprob.org (coming soon!)

## 🚀 Making CodeProb BIG!

We're building something special here. Every contribution, no matter how small, helps make programming knowledge more accessible to everyone. Let's create the best community-driven programming resource on the web!

### Ways to Help Beyond Content:
- 🐛 **Report bugs** or suggest improvements
- 📢 **Share CodeProb** with your network
- ⭐ **Star the repository** to show support
- 💡 **Suggest new features** or content types
- 🎨 **Improve the design** or user experience

---

**Thank you for contributing to CodeProb!** Together, we're making programming education better for everyone. 🎉