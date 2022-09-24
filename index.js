const webp = require('webp-converter');
const fs = require('fs');


const folder = './img/';

// https://github.com/scionoftech/webp-converter

fs.readdir(folder, (err, files) => {

    files.forEach(file => {

        const nazevSouboru = file.split('.')[0];
        const koncovky = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG'];

        function convertWebp(koncovka) {
            if (koncovka === file.split('.')[1]) {
                const result = webp.cwebp("./img/" + nazevSouboru + "." + koncovka, "./img/"+ nazevSouboru + ".webp", "-q 70", logging = "-v");
                result.then((response) => {
                    console.log(response);
                });
            }
        }

        koncovky.forEach(function(koncovka) {
            convertWebp(koncovka);
        });


    });
});
