const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

fs.readdir('../public/assets/images', (err, files) => {
    if(err) {
        console.error('Error reading directory: ', err);
        return;
    }

    files.forEach(file => {
        if(file.endsWith('.jpeg')) {
            const inputPath = path.join('../public/assets/images', file);
            const outputPath = generateOutputPath(file);

            console.log(`Converting ${inputPath} to ${outputPath}`);

            ffmpeg()
                .input(inputPath)
                .videoFilter('scale=20:-1')
                .on('end', () => {
                console.log(`Conversion of ${inputPath} finished`);
                })
                .on('error', (err) => {
                console.error(`Error converting ${inputPath}:`, err);
                })
                .save(outputPath);
        }
    })
});

function generateOutputPath(inputPath) {
    const { name, ext } = path.parse(inputPath);
    const outputPathBase = '../public/assets/small-images';
    const outputName = `${name}-small${ext}`;
    return path.join(outputPathBase, outputName); // Output path includes the base output folder
}


// // function convertImage(inputPath) {
//     const inputPath = '../public/assets/images/fish-asset.jpeg';
//     const outputPath = generateOutputPath(inputPath);

//     console.log(outputPath);

//       ffmpeg()
//         .input(inputPath)
//         .videoFilter('scale=20:-1')
//         .on('end', () => {
//           console.log('Conversion finished');
//         })
//         .on('error', (err) => {
//           console.error('Error:', err);
//         })
//         .save(outputPath);

// function generateOutputPath(inputPath) {
//     const { dir, name, ext } = path.parse(inputPath);
//     const outputName = `${name}-small${ext}`;
//     return path.join(dir, outputName);
// }

// module.exports = convertImage;