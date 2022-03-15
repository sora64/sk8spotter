const sharp = require("sharp");

// exports.meta = async function getMetadata() {
//   try {
//     const metadata = await sharp(
//       "public/images/deon-texas-beach.jpg"
//     ).metadata();
//     console.log(metadata);
//   } catch (error) {
//     console.log(`An error occurred during processing: ${error}`);
//   }
// }

exports.resizing = async function resizeImage(filename) {
  try {
    await sharp(
      `public/images/original_images/${filename}`)
      .resize(300, 300, {
        fit: "inside",
      })
      .toFile(`public/images/process_images/resized-${filename}`);
  } catch (error) {
    console.log(error);
  }
}
