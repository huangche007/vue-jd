"use strict"
const crypto = require('crypto');
module.exports = {
    MD5_SUFFXIE: "HUNCSCDMM@#@$^%&^*%#$GFbggnCDSccxczvdsdhagbnfghvZfsdv",
    md5: (str) => {
        let md5Obj = crypto.createHash('md5');
        md5Obj.update(str);
        return md5Obj.digest('hex');
    }
}
