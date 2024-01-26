const multer = require('multer');


const namaFileDB =[];
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images');
    },
    filename:(req,file,cb)=>{
        let namaFile =file.originalname;

        console.log(namaFileDB);

        if(namaFileDB.length!=0){
            
            for(let i = 0 ; i<=namaFileDB.length;i++){          

                if(file.originalname === namaFileDB[i] ){
                    let nameSplit = file.originalname.split('.');
                    console.log(nameSplit);
                    let format = nameSplit[nameSplit.length-1];
                    namaFile = nameSplit[0]+i+'.'+format
                }
            }

        }

        console.log(namaFile);
        namaFileDB.push(namaFile)


       
        cb(null, namaFile)
    }
})

const upload =multer({storage:storage});

module.exports=upload;