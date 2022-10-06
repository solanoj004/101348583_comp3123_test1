const fs = require("fs")
const path  = require("path")

// Function to create Log directory and Log files
const createLogs = () => {
    // Checks if logs directory exists
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
        // Creates logs directory 
        fs.mkdirSync(path.join(__dirname, "logs"))
    }
    // Change current process
    process.chdir(path.join(__dirname, "logs"))
    // For loop to create 10 files
    for (let i = 0; i < 10; i++) {
        fs.writeFile(`log${i}.txt`, `Log file number ${i}`, (err) => {
            if(err) {
                return console.log(`Cannot create file 'log${i}.txt'`)
            }
            // Message when file is successfully created
            console.log(`Creating file 'log${i}.txt'`)
        }       
        )}
}

// Function to remove log files and log directory
const removeLogs = () => {
    return new Promise(function (resolve, reject) {
        // Checks if logs directory exists
        if (fs.existsSync(path.join(__dirname, "logs"))) {
            // Change current directory to logs directory
            process.chdir(path.join(__dirname, "logs"))
            // Reads the whole content of the logs directory
            fs.readdir(process.cwd(), (err, files) => {
                // Removes all files in the directory
                files.forEach((file) => {
                        fs.unlink(file, (err) => {
                            if(err) {
                                return reject(err)
                            }
                            // Message after successfully deleting the file
                            resolve(console.log(`Deleting file '${file}'`))
                    })
                })
            }) 
            // After 500ms, removes the logs directory
            setTimeout(() => {
                resolve(removeLogDirectory())
            }, 500)       
        }
    })
  
}

// Function for removing the Logs directory
const removeLogDirectory = () => {
    // Change current directory to a level above in order to delete the logs directory
    process.chdir("..")
    fs.rmSync("logs", {recursive: true, force: true})
    console.log("Logs directory deleted")
  
}
// createLogs()
removeLogs()
