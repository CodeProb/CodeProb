# CodeProb

A static, community-driven programming knowledge and problem platform that combines CodingBat-style programming exercises with RosettaCode-style learning content in a minimal, wiki format.

## 🌟 Features

- **Programming Problems**: CodingBat-style coding exercises with examples and hints
- **Concepts & Learning**: Educational content explaining programming concepts in wiki format
- **Articles & Insights**: Community-contributed tutorials and insights
- **Writer Interface**: Easy-to-use content creation tool
- **Static Architecture**: No server dependencies, hosted on GitHub Pages
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Mobile Responsive**: Works on all devices

## 🚀 Quick Start

### For Users
1. Visit the live site: [Click Here](https://codeprob.github.io/CodeProb)
2. Browse problems, concepts, and articles
3. Use the Writer interface to create new content
4. Submit contributions via GitHub pull requests

### For Contributors
1. Fork this repository
2. Use the Writer interface at `/writer.html` to create content
3. Export your HTML file and add the config entry
4. Submit a pull request with your new content

## 📁 Project Structure

```
/
├── index.html              # Landing page
├── problems/               # Programming exercises
├── concepts/               # Educational content  
├── articles/               # Community articles
├── profiles/               # User profile pages
├── writer.html             # Content creation interface
├── contributor-config.json # Content registry
├── profiles.json           # Profiles registry
├── assets/                 # CSS, JS, templates
└── docs/                   # Documentation
```

## 🛠️ Development

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Navigate using the interface

### Testing
```bash
npm install
npm test
```

### Contributing Content
1. Use the Writer interface (`writer.html`)
2. Fill out the form for your content type (Problem, Concept, Article, or Profile)
3. Export the HTML file
4. Add the generated config entry to `contributor-config.json` (or `profiles.json` for profiles)
5. Submit a pull request

## 📝 Content Types

### Problems
- Focused coding exercises
- Difficulty levels: Easy, Medium, Hard
- Include description, examples, and optional hints
- Filename format: `problem-name.html`

### Concepts
- Educational explanations of programming topics
- Categories: Fundamentals, Algorithms, Data Structures, etc.
- Include overview, detailed explanation, and code examples
- Filename format: `concept-name.html`

### Articles
- Free-form tutorials, insights, and opinions
- Tagged for easy discovery
- Include references and further reading
- Filename format: `article-name.html`

### User Profiles
- Personal pages for contributors
- Display bio, social links, and contribution history
- Auto-linked from your articles and content
- Filename format: `profiles/USERNAME/index.html`

## 🎨 Design Philosophy

- **Wikipedia-inspired**: Clean, minimal, content-focused design
- **Static-first**: No server dependencies, works anywhere
- **Community-driven**: All content created and maintained by contributors
- **Accessible**: Works with screen readers and keyboard navigation
- **Sustainable**: Low maintenance, durable architecture

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/contributing.md) for detailed instructions.

### Quick Contribution Steps
1. Fork the repository
2. Create content using the Writer interface
3. Add your content file to the appropriate directory
4. Update `contributor-config.json` with your content metadata
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

Inspired by:
- [CodingBat](https://codingbat.com/) for programming problem format
- [RosettaCode](https://rosettacode.org/) for wiki-style learning content
- [Wikipedia](https://wikipedia.org/) for clean, accessible design

---

**CodeProb** - Making programming knowledge accessible to everyone through community collaboration.
