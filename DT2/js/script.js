/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var project = document.getElementById('project');
var stage = document.getElementById('stage');
var radioProject = document.getElementsByName('submit-for')[0];
var radioStage = document.getElementsByName('submit-for')[1];

project.classList.add('hide');
stage.classList.add('hide');

radioProject.addEventListener('change', function () {
    project.classList.remove('hide');
    stage.classList.add('hide');
});

radioStage.addEventListener('change', function () {
    project.classList.add('hide');
    stage.classList.remove('hide');
});
