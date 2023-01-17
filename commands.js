const fs = require('fs');

module.exports = {
    pwd: function() {
        // Código pwd
        let ruta = process.argv[1];
        process.stdout.write(ruta);
        process.stdout.write('\nprompt > ');
    }, 
    date: function() {
        let fecha = new Date();
        process.stdout.write(fecha.toString());
        process.stdout.write('\nprompt > ');
    },
    ls: function () {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },
    echo: function (array) {
        array.shift();
        let str = array.join(" ");
        process.stdout.write(str);
        process.stdout.write('\nprompt > ');
    },
    cat: function (array) {
        array.shift();
        /* let fileName = array.join(" "); */

        const leerFile = (path, callback) => {
            fs.readFile(path, (err, data) => {
                if (!data) {
                    console.error("No data. The path is wrong.");
                    process.stdout.write("prompt > ");
                } else {
                    callback(data.toString());
                    process.stdout.write("prompt > ");
                } 
            });
        };
        
        array.forEach((file) => {
            leerFile(file, console.log);
        });
    }
}