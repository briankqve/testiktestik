# YouTube History Site

This project is a simple website that provides information about the history of YouTube, its creation, and contact details. The site consists of three main pages:

1. **Home Page (`index.html`)**: 
   - Contains a welcoming message and SEO-optimized text that includes keywords such as "оптимизация", "поисковая система", "ключевые слова", "индексация", "SEO", "веб-сайт", "контент", "трафик", "анализ", and "рейтинг". This page aims to attract traffic through search engine optimization.

2. **History Page (`history.html`)**: 
   - Provides a detailed account of YouTube's creation in 2005, its development over the years, and its significant impact on internet culture. This page includes a link back to the home page of YouTube.

3. **Contact Page (`contact.html`)**: 
   - Displays contact information, specifically a phone number for inquiries: +88005553535.

## Project Structure

```
youtube-history-site
├── public
│   ├── index.html
│   ├── history.html
│   └── contact.html
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── main.js
├── .github
│   └── workflows
│       └── deploy.yml
├── package.json
└── README.md
```

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd youtube-history-site
   ```

3. Install the necessary dependencies:
   ```
   npm install
   ```

## Usage

To run the website locally, you can use a simple HTTP server. For example, you can use the `http-server` package:

1. Install `http-server` globally if you haven't already:
   ```
   npm install -g http-server
   ```

2. Start the server:
   ```
   http-server public
   ```

3. Open your browser and go to `http://localhost:8080` to view the site.

## Deployment

The project includes a GitHub Actions workflow for automatic deployment. The configuration file is located at `.github/workflows/deploy.yml`. Make sure to set up the necessary secrets and environment variables for deployment.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.