/**
 * Created by jamisoncote on 11/21/16.
 */
'use strict'
let
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    exec = require('child_process').exec;

const
    INDEX = '/index.html',
    SRC = 'src';

// this splits up a passed in command into the command name and arguments.
let commandBuilder = function(command) {
    "use strict";

    let cmd = {};
    let cmdArr = command.split(' ');
    cmd.exec = cmdArr.shift();
    cmd.args = cmdArr;
    return cmd;
};

// this runs a command passed into it by passing it to the shell/terminal.
let runCommand = function(command, description, cb) {

    if (typeof command.exec === 'undefined')
        command = commandBuilder(command);

    let child = exec(command.exec, command.args);
    child.stdout.on('data', function(data) {
        process.stdout.write(data);
    });
    child.stderr.on('data', function(data) {
        process.stdout.write(chalk.red(data));
    });
    child.on('error', function(error) {
        console.log(error);
    });

    return child;
};

gulp.task('serve', ['pouchdb'], function () {

    browserSync({
        notify: false,
        https: false,
        port: 9000,
        startPath: INDEX,
        server: {
            baseDir: [SRC],
            routes: {
                '/bower_components': 'bower_components',
                '/node_modules': 'node_modules'
            }
        }
    });

    gulp.watch([SRC + '/**/*.html', SRC + '/**/*.js'], reload);
});

gulp.task('pouchdb', [], function() {
    runCommand('pouchdb-server')
});