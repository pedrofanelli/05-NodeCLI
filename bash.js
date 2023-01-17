const commands = require("./commands");


// Un prompt como output
process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
    let arr = data.toString().trim().split(" ");
    commands[arr[0]](arr, done);
});

const done = function(output) {
    // Muestra el output
    if (output) {
        process.stdout.write(output);
    }
    // Muestra el prompt
    process.stdout.write("\nprompt > ");
}
