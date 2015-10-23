/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var changeColor = document.getElementById('colorchange');
var picker = document.getElementById('favcolor');

changeColor.addEventListener('click', function () {
    document.querySelector('body>header').style.backgroundColor = picker.value;
    document.querySelector('body>footer').style.backgroundColor = picker.value;
    
    var h1All = document.querySelectorAll('h1').length;
    var h2All = document.querySelectorAll('h2').length;
    var fieldsetAll = document.querySelectorAll('fieldset').length;
    var i = 0;
    var j = 0;
    var k = 0;
    
    for (i = 0; i < h1All; i++) {
        document.querySelectorAll('h1')[i].style.backgroundColor = picker.value;
    }
    
    for (j = 0; j < h2All; j++) {
        document.querySelectorAll('h2')[j].style.backgroundColor = picker.value;
    }
    
    for (k = 0; k < fieldsetAll; k++) {
        document.querySelectorAll('fieldset')[k].style.backgroundColor = picker.value;
    }
});


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