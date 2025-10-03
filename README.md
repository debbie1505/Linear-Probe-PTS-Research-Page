# Research Paper Website

A lightweight, academic-focused Jekyll website for showcasing research papers. This template is optimized for GitHub Pages and provides a professional presentation of academic research.

## Features

- 📱 **Responsive Design**: Mobile-first approach with excellent readability
- 🎨 **Academic Styling**: Professional typography and layout optimized for research papers
- ⚡ **Performance Optimized**: Fast loading with minimal dependencies
- 🔍 **Interactive Features**: Search functionality, figure navigation, and citation tools
- 📊 **SEO Optimized**: Structured data and meta tags for academic search engines
- 🖨️ **Print Friendly**: Optimized styles for academic printing

## Quick Start

1. **Clone or Download** this repository
2. **Customize** the content in the `_config.yml` file
3. **Add your paper content** to the appropriate pages
4. **Deploy** to GitHub Pages

## Project Structure

```
research-paper-site/
├── _config.yml              # Site configuration
├── _layouts/                # Page layouts
├── _includes/               # Reusable components
├── _sass/                   # SCSS stylesheets
├── assets/                  # Static assets
├── pages/                   # Content pages
├── index.md                 # Homepage
└── README.md               # This file
```

## Content Pages

- **Abstract**: Research overview and key findings
- **Methodology**: Research design and methods
- **Results**: Findings and data analysis
- **Discussion**: Interpretation and implications
- **References**: Bibliography and citations
- **About**: Author information and acknowledgments

## Customization

### 1. Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Author information
- Paper metadata (title, authors, journal, DOI)
- Navigation menu
- Social links

### 2. Paper Content

Replace the placeholder content in each page:
- `pages/abstract.md` - Your abstract
- `pages/methodology.md` - Your methodology
- `pages/results.md` - Your results
- `pages/discussion.md` - Your discussion
- `pages/references.md` - Your bibliography
- `pages/about.md` - About the research and authors

### 3. Styling

Customize the appearance by editing files in `_sass/`:
- `_variables.scss` - Colors, fonts, and spacing
- `_base.scss` - Base typography and elements
- `_components.scss` - Component styles
- `_layout.scss` - Page layouts
- `_responsive.scss` - Responsive design

### 4. Assets

Add your research assets:
- `assets/images/figures/` - Research figures and charts
- `assets/images/diagrams/` - Methodology diagrams
- `assets/images/author-photos/` - Author photos
- `assets/papers/` - PDF version of your paper

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain

1. Add a `CNAME` file with your domain name
2. Configure DNS settings to point to GitHub Pages
3. Update the `url` in `_config.yml`

## Development

### Local Development

1. Install Ruby and Jekyll
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

### Building

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Features in Detail

### Interactive Elements

- **Search**: Full-text search through paper content
- **Figure Navigation**: Navigate between figures with previous/next buttons
- **Citation Tools**: Copy citations in multiple formats
- **Print Optimization**: Clean print styles for academic use
- **Mobile Navigation**: Responsive hamburger menu

### Academic Features

- **Structured Data**: JSON-LD for academic search engines
- **Citation Formatting**: APA, BibTeX, and other formats
- **DOI Integration**: Direct links to paper DOI
- **Author Profiles**: ORCID and academic profile integration
- **Reference Management**: Numbered references with links

### Performance Features

- **Lazy Loading**: Images load as needed
- **Minified Assets**: Optimized CSS and JavaScript
- **CDN Ready**: Works with GitHub Pages CDN
- **Caching**: Proper cache headers for static assets

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This template is open source and available under the MIT License.

## Support

For questions or issues:
1. Check the GitHub Issues
2. Review Jekyll documentation
3. Contact the maintainer

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
