//add
import fs from 'fs';
if(!fs.existsSync("Logs")){ //creates new Log Directry if it does not exist
    fs.mkdirSync("Logs");
}

process.chdir("Logs");

for(let i = 0; i < 10; i++){ //creates 10 log files
    const fileName = `log${i}.{txt}`; //creates fileName in given format
    fs.writeFile(fileName, 'some text', (err) => {
        if(err){ //if error occurs when writing file
            throw err;
        }
    });
    
    console.log(fileName);
}
