// To Use, software-licences is the subfolder of Markdown files 
// and index.md is the name of the index file containing all the Markdown files in the same folder
// `node index.js software-licences index.md`

#!/usr/bin/env node
const fs = require('fs');

if(process.argv.length != 4)
    return console.log("Parameters error: node generate-index.js <doc_folder> <index_file>");

const docsFolder = (process.argv[2] + "/").replace("//", "/");
const indexFile = docsFolder + process.argv[3];

var filesList = [];

fs.readdirSync(docsFolder).forEach(file => {
    if(file.match(/.\.md/)) filesList.push(file);
});

var tableOfContentsString = createTableOfContentsString();
saveTableOfContentsStringToFile(tableOfContentsString);

function createTableOfContentsString(){
    var tableOfContentsString = "## Table of Contents\n\n";

    filesList.forEach(file => {
        if(file == "index.md") return;

        file = file.replace(".md", "");

        tableOfContentsString += `* [[${file}]]\n`

    });

    return tableOfContentsString;
}


function saveTableOfContentsStringToFile(ToCString){
    fs.readFile(indexFile, 'utf8', (err, fileContent) => {
        var regExp = /## Table of Contents\n\n(\t*[0-9]*\. .*\n)*/;

        if(regExp.test(fileContent))
            fileContent = fileContent.replace(regExp, ToCString);
        else
            fileContent += "\n" + ToCString;

        console.log(ToCString);

        fs.writeFile(indexFile, fileContent, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The table of content was generated!");
        });
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
