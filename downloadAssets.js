const fs = require("fs");
const https = require("https");
const path = require("path");

const dir = path.join(__dirname, "public", "images");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = [
  { name: "hero.jpg", url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" },
  { name: "doctor1.jpg", url: "https://images.unsplash.com/photo-1594824436951-7f12bc3ac92e?auto=format&fit=crop&q=80&w=800" },
  { name: "doctor2.jpg", url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" },
  { name: "clinic.jpg", url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" },
  { name: "help1.jpg", url: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800" },
  { name: "help2.jpg", url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
  { name: "help3.jpg", url: "https://images.unsplash.com/photo-1556942154-006c061d4b61?auto=format&fit=crop&q=80&w=800" },
  { name: "help4.jpg", url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800" },
  { name: "articles.jpg", url: "https://images.unsplash.com/photo-1608681283626-444aeb6e21cd?auto=format&fit=crop&q=80&w=800" },
  { name: "nature.jpg", url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" },
];

Promise.all(
  images.map((img) => {
    return new Promise((resolve, reject) => {
      const outputPath = path.join(dir, img.name);
      const file = fs.createWriteStream(outputPath);
      
      https.get(img.url, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
          // Handle redirects
          https.get(response.headers.location, (res) => {
            res.pipe(file);
            file.on("finish", () => {
              file.close();
              console.log(`Downloaded ${img.name}`);
              resolve();
            });
          }).on("error", (err) => {
            fs.unlink(outputPath, () => {});
            reject(err);
          });
        } else {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`Downloaded ${img.name}`);
            resolve();
          });
        }
      }).on("error", (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
    });
  })
).then(() => {
  console.log("All local fallback images securely downloaded.");
}).catch((err) => console.error("Error downloading images:", err));
