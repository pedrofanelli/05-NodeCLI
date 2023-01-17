const commands = require("./commands");
const fs = require('fs');

// Un prompt como output
process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
    let arr = data.toString().trim().split(" ");
    /* if (arr[0] === "pwd") {
        commands.pwd();
    } else if (arr[0] === "date") {
        commands.date();
    } else if (arr[0] === "ls") {
        commands.ls();
    } else if (arr[0] === "echo") {
        commands.echo(arr);
    } */
    commands[arr[0]](arr);
});


