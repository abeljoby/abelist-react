// Eagerly import all images in the folder
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg}', {
  eager: true,
});

// Create a lookup map: { 'project1.png': imageURL, ... }
const imageMap = {};
for (const path in images) {
  const fileName = path.split('/').pop(); // extract 'project1.png'
  imageMap[fileName] = images[path].default;
}

export default imageMap;