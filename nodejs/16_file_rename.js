var fs = require('fs');

current_filename = "info.txt";
new_filename = "information.txt"
fs.rename(current_filename, new_filename, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('file has been renamed successfully');
    }
});
