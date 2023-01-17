const commands = require("./commands");
const fs = require('fs');

// Un prompt como output
process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
    if (data.toString().trim() === "pwd") {
        commands.pwd();
    } else if (data.toString().trim() === "date") {
        commands.date();
    } else if (data.toString().trim() === "ls") {
        commands.ls();
    } else {
        let cmd = data.toString().trim(); // Remueve la nueva línea
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});


