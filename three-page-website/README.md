# Three Page Website

Простой статический сайт из трёх страниц (главная, о YouTube, контакты) с SEO-оптимизированными текстами, sitemap.xml и robots.txt.

Как локально просмотреть:

1. Откройте файл `three-page-website/public/index.html` в браузере напрямую или используйте простой HTTP-сервер:

```bash
# из корня репозитория
python3 -m http.server --directory three-page-website/public 8000
# затем откройте http://localhost:8000
```

Деплой на GitHub Pages настроен через GitHub Actions: workflow публикует папку `three-page-website/public` в ветку `gh-pages` при пуше в `main`.
# Three Page Website

This project is a simple website consisting of three pages: Home, About, and Contact. It is structured to provide essential information about the site and includes a contact form for user inquiries.

## Project Structure

```
three-page-website
├── src
│   ├── pages
│   │   ├── index.html       # Main page of the website
│   │   ├── about.html       # About us page with company/project information
│   │   └── contact.html      # Contact page with contact information and feedback form
│   ├── styles
│   │   └── main.css         # CSS styles for the website
│   ├── scripts
│   │   └── main.js          # JavaScript for interactivity on the website
│   └── components
│       └── header.html      # Header component used across all pages
├── public
│   └── robots.txt           # File managing access for search engines
├── .gitignore                # Specifies files and folders to be ignored by Git
├── package.json              # Configuration file for npm with dependencies and scripts
└── README.md                 # Documentation for the project
```

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd three-page-website
npm install
```

## Usage

You can open the HTML files in your browser to view the pages. For development, you may want to set up a local server.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License.