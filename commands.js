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
    }
}