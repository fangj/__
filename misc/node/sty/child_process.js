

var exec = require('child_process').exec,
    child;

child = exec('echo %PATH%',
    function (error, stdout, stderr) {
        if(stdout!==''){
            console.log('---------stdout: ---------\n' + stdout);
        }
        if(stderr!==''){
            console.log('---------stderr: ---------\n' + stderr);
        }
        if (error !== null) {
            console.log('---------exec error: ---------\n[' + error+']');
        }
    });

// exec('ipconfig',
//     function (error, stdout, stderr) {
//         if(stdout!==''){
//             console.log('---------stdout: ---------\n' + stdout);
//         }
//         if(stderr!==''){
//             console.log('---------stderr: ---------\n' + stderr);
//         }
//         if (error !== null) {
//             console.log('---------exec error: ---------\n[' + error+']');
//         }
//     });

exec('notepad',
    function (error, stdout, stderr) {
        if(stdout!==''){
            console.log('---------stdout: ---------\n' + stdout);
        }
        if(stderr!==''){
            console.log('---------stderr: ---------\n' + stderr);
        }
        if (error !== null) {
            console.log('---------exec error: ---------\n[' + error+']');
        }
    });

exec('makefile xxx.js',  
    function (error, stdout, stderr) {
        if(stdout!==''){
            console.log('---------stdout: ---------\n' + stdout);
        }
        if(stderr!==''){
            console.log('---------stderr: ---------\n' + stderr);
        }
        if (error !== null) {
            console.log('---------exec error: ---------\n[' + error+']');
        }
    });
