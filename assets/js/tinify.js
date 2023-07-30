const fs = require("fs");
 const path = require('path');
const tinify = require("tinify");
tinify.key = 'TzwZ79jccHP1B4pGPrq3sky6m5Dc82vB';

let imgPath = 'assets/img';
let oldImgPath = 'assets/oldImg';

fs.readdir(imgPath, async function(err, items) {
    for (const item of items) {
        if (['.png', '.jpg'].includes(path.extname(item))) {
            let basename = path.basename(item, path.extname(item));
            let oldItemPath = path.join(imgPath, item),
                newItemPath = path.join(oldImgPath, item);

            const source = await tinify.fromFile(`${imgPath}/${item}`);
            const converted = await source.convert({type: "image/webp"});
            const extension = await converted.result().extension();
            await source.toFile(imgPath +'/' + basename + '.' + extension);

            if (!fs.existsSync(oldImgPath)){
                fs.mkdirSync(oldImgPath)
            }
            
            fs.renameSync(oldItemPath, newItemPath);
        }
    }
});