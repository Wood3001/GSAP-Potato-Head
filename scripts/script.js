$(document).ready(function(){

var seeEyes = false;
var seeEars = false;
var seeMouth = false;
var seeNose = false;
var seeHat = false;

var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;

const arrEyeL = ['.eyeL1', '.eyeL2', '.eyeL3'];
const arrEyeR = ['.eyeR1', '.eyeR2', '.eyeR3'];
const arrEarL = ['.earL1', '.earL2', '.earL3'];
const arrEarR = ['.earR1', '.earR2', '.earR3'];
const arrNose = ['.nose1', '.nose2', '.nose3'];
const arrMouth = ['.mouth1', '.mouth2', '.mouth3'];
const arrHat = ['.hat1', '.hat2', '.hat3']

$('#btn-eyes').on('click',function(){eyes(), hat()});
$('#btn-ears').on('click',function(){ears(), hat()});
$('#btn-nose').on('click',function(){nose(), hat()});
$('#btn-mouth').on('click',function(){mouth(), hat()});
$('#reset').on('click',function(){reset()});

function eyes() {
    if (seeEyes==false) {
        gsap.fromTo(arrEyeL[0],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
        gsap.fromTo(arrEyeR[0],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
        seeEyes = true;
    } else if (i <= arrEyeL.length - 1){
        gsap.fromTo(arrEyeL[i],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
        gsap.fromTo(arrEyeR[i],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
        i++;
        if (i <= arrEyeL.length - 1) {
            gsap.fromTo(arrEyeL[i],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
            gsap.fromTo(arrEyeR[i],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
            seeEyes = true;
            return;
        } else {
            i = 0;
            seeEyes = false;}  
    } else {
        gsap.fromTo(arrEyeL[i],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
        gsap.fromTo(arrEyeR[i],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
        i = 0;
        seeEyes = false;
    }
}

function ears() {
    if (seeEars==false) {
        gsap.fromTo(arrEarL[0],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
        gsap.fromTo(arrEarR[0],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
        seeEars = true;
    } else if (j <= arrEarL.length - 1) {
        gsap.fromTo(arrEarL[j],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
        gsap.fromTo(arrEarR[j],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
        j++;
        if (j <= arrEarL.length - 1) {
            gsap.fromTo(arrEarL[j],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
            gsap.fromTo(arrEarR[j],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
            seeEars = true;
            return;
        } else {
            j = 0;
            seeEars = false;}
    } else {
        gsap.fromTo(arrEarL[j],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
        gsap.fromTo(arrEarR[j],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
        j = 0;
        seeEars = false;
    }
}

function nose() {
    if (seeNose==false) {
        gsap.fromTo(arrNose[0],{y:-500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
        seeNose = true;
    } else if (k <= arrNose.length - 1) {
        gsap.fromTo(arrNose[k],{y:0, opacity:1}, {y:-500, opacity:0, duration: .5, ease:"easeOut"});
        k++;
        if (k <= arrNose.length - 1) {
            gsap.fromTo(arrNose[k],{y:-500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
            seeNose = true;
            return;
        } else {
            k = 0;
            seeNose = false;}
    } else {
        gsap.fromTo(arrNose[k],{y:0, opacity:1}, {y:-500, opacity:0, duration: .5, ease:"easeOut"});
        k = 0;
        seeNose = false;
    }
}

function mouth() {
    if (seeMouth==false) {
        gsap.fromTo(arrMouth[0],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
        seeMouth = true;
    } else if (l <= arrMouth.length - 1) {
        gsap.fromTo(arrMouth[l],{y:0, opacity:1}, {y:500, opacity:0, duration: .5, ease:"easeOut"});
        l++;
        if (l <= arrMouth.length - 1) {
            gsap.fromTo(arrMouth[l],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
            seeMouth = true;
            return;
        } else {
            l = 0;
            seeMouth = false;}
    } else {
        gsap.fromTo(arrMouth[l],{y:0, opacity:1}, {y:500, opacity:0, duration: .5, ease:"easeOut"});
        l = 0;
        seeMouth = false;
    }
}

function hat() {
    if (seeHat==false) {
        if (seeEyes==true && seeEars==true && seeNose==true && seeMouth==true && i==0 && j==0 && k==0 && l==0) {
            gsap.fromTo(".hat1",{y:-500, rotate:-90, opacity:0}, {y:0, rotate:0, opacity:1, duration: 1, ease:"bounce"});
            m = 0;
            seeHat = true;
        } else if (seeEyes==true && seeEars==true && seeNose==true && seeMouth==true && i==1 && j==1 && k==1 && l==1) {
            gsap.fromTo(".hat2",{y:-500, rotate:-90, opacity:0}, {y:0, rotate:0, opacity:1, duration: 1, ease:"bounce"});
            m = 1;
            seeHat = true;
        } else if (seeEyes==true && seeEars==true && seeNose==true && seeMouth==true && i==2 && j==2 && k==2 && l==2) {
            gsap.fromTo(".hat3",{y:-500, rotate:-90, opacity:0}, {y:0, rotate:0, opacity:1, duration: 1, ease:"bounce"});
            m = 2;
            seeHat = true;
        } else {
            seeHat = false;
            return;
        }
    } else {
        gsap.fromTo(arrHat[m],{y:0, opacity:1}, {y:-500, opacity:0, duration: 1, ease:"easeOut"});
        seeHat = false;
    }
}

function reset() {
    location.reload();
} 

});