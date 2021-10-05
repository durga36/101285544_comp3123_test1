//remove
import fs from 'fs';
import path from 'path';
if(fs.existsSync("Logs")){ //retrieves files from Log Directory
    fs.readdir("Logs", (err, files) => {
        if(err) throw err; //if there's an error

        for(const file of files){ //traverse through list of all files of Log Directory
            const filePath = path.join("Logs", file);
            fs.unlink(filePath, err => {
                if(err) throw err; //if there's an error
            });
            console.log(`delete files...${file}`);
        }
        fs.rmdirSync("Logs"); //removes Log Directory
    });
}