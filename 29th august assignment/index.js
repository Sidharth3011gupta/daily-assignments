const {listFiles,createDirectory,ReadFileContent,WritetoFile} =require("./fileSystemModule")

listFiles(__dirname);

createDirectory("DUMMY1.txt");

ReadFileContent("READING.txt");


WritetoFile("data.txt","MY NAME IS SIDHARTH");