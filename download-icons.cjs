const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = {
  'angular': 'angular/angular-original.svg',
  'react': 'react/react-original.svg',
  'java': 'java/java-original.svg',
  'spring-boot': 'spring/spring-original.svg',
  'html5': 'html5/html5-original.svg',
  'css3': 'css3/css3-original.svg',
  'javascript': 'javascript/javascript-original.svg',
  'go': 'go/go-original.svg',
  'nextjs': 'nextjs/nextjs-original.svg',
  'nodejs': 'nodejs/nodejs-original.svg',
  'python': 'python/python-original.svg',
  'flutter': 'flutter/flutter-original.svg',
  'flask': 'flask/flask-original.svg',
  'django': 'django/django-plain.svg',
  'postgresql': 'postgresql/postgresql-original.svg',
  'mongodb': 'mongodb/mongodb-original.svg',
  'mysql': 'mysql/mysql-original.svg',
  'git': 'git/git-original.svg',
  'bootstrap': 'bootstrap/bootstrap-original.svg',
  'tailwindcss': 'tailwindcss/tailwindcss-original.svg',
  'astro': 'astro/astro-original.svg',
  'wordpress': 'wordpress/wordpress-plain.svg',
  'figma': 'figma/figma-original.svg',
  'docker': 'docker/docker-original.svg',
  'aws': 'amazonwebservices/amazonwebservices-original-wordmark.svg',
  'gcp': 'googlecloud/googlecloud-original.svg',
  'azure': 'azure/azure-original.svg',
  'githubactions': 'github/github-original.svg',
  'thymeleaf': 'java/java-original.svg'
};

const baseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
const destDir = path.join(__dirname, 'public', 'images', 'stacks');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(filename, url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(path.join(destDir, filename));
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (res.statusCode === 404) {
        console.warn(`[404] Not found: ${url}`);
        resolve();
      } else {
        console.warn(`[${res.statusCode}] Error: ${url}`);
        resolve();
      }
    }).on('error', (err) => {
      console.error(err);
      resolve();
    });
  });
}

async function run() {
  for (const [name, p] of Object.entries(icons)) {
    console.log(`Downloading ${name}...`);
    await download(`${name}.svg`, baseUrl + p);
  }
  
  // Download clock icon
  console.log(`Downloading clock...`);
  await download('clock.svg', 'https://unpkg.com/heroicons@2.0.18/24/outline/clock.svg');
  
  console.log('Done!');
}

run();
