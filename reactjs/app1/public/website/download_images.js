const fs = require('fs');
const path = require('path');
const https = require('https');

const destDir = path.join(__dirname, 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const images = [
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/Shriji-Logo.png', file: 'logo.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/Shrijis-Website.png', file: 'slider1.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/Shrijis-Website-2-1.png', file: 'slider2.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/about-us.png', file: 'slider3.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/about-us.png', file: 'about.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/testimonial1.png', file: 'testimonial1.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/testimonial2.png', file: 'testimonial2.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/testimonial3.png', file: 'testimonial3.png' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/1.jpg', file: 'dish1.jpg' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/2.jpg', file: 'dish2.jpg' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/3.jpg', file: 'dish3.jpg' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/4.jpg', file: 'dish4.jpg' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/5.jpg', file: 'dish5.jpg' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/6.jpg', file: 'dish6.jpg' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/7.jpg', file: 'dish7.jpg' },
  { url: 'https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/8.jpg', file: 'dish8.jpg' },
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${url}: HTTP ${res.statusCode}`);
        resolve();
        return;
      }
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${path.basename(filePath)}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  for (const img of images) {
    const filePath = path.join(destDir, img.file);
    await download(img.url, filePath);
  }
  console.log('All image downloads completed!');
}

run();
