const fs = require('fs');
const request = require('request');

module.exports = {
    pwd: function(array, done) {
        // Código pwd
        let ruta = process.argv[1];
        done(ruta);
    }, 
    date: function(array, done) {
        let fecha = new Date();
        done(fecha.toString());
    },
    ls: function (array, done) {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            let output = "";
            files.forEach(function(file) {
                output += file.toString() + "\n";
            })
            done(output);
        });
    },
    echo: function (array, done) {
        array.shift();
        let str = array.join(" ");
        done(str);
    },
    cat: function (array, done) {
        array.shift();

        const leerFile = (path, callback) => {
            fs.readFile(path, (err, data) => {
                if (!data) {
                    console.error("No data. The path is wrong.");
                } else {
                    callback(data.toString());
                } 
                done();
            });
        };
        
        array.forEach((file) => {
            leerFile(file, console.log);
        });
        
    },
    curl: function (array, done) {
        array.shift();
        let url = array.join(" ");
        request(url, function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            done();
        });
    }, 
    head: function (array, done) {
        array.shift();

        const leerFile = (path, callback) => {
            fs.readFile(path, (err, data) => {
                if (!data) {
                    console.error("No data. The path is wrong.");
                    done();
                } else {
                    callback(data.toString());
                } 
            });
        };
        
        array.forEach((file) => {
            leerFile(file, function (data) {
                let lines = data.split("\n");
                let conjunto = lines.slice(0, 10).join("\n");
                done(conjunto);
            });
        });
    },
    tail: function (array, done) {
        array.shift();

        const leerFile = (path, callback) => {
            fs.readFile(path, (err, data) => {
                if (!data) {
                    console.error("No data. The path is wrong.");
                    done();
                } else {
                    callback(data.toString());
                } 
            });
        };
        
        array.forEach((file) => {
            leerFile(file, function (data) {
                let lines = data.split("\n");
                let conjunto = lines.slice(lines.length - 10, lines.length).join("\n");
                done(conjunto);
            });
        });
    }
}