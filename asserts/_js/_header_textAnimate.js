$(document).ready(function() {
	var hsFirstDot = $('.header-imgsslider .owl-dots > div:first-child');
    var hsLastDot = $('.header-imgsslider .owl-dots > div:nth-child(2)');

    var firstElem1Text = $('#first-headerImg > div:first-child');
    var firstElem2Text = $('#first-headerImg > div:nth-child(2)');
    var firstElem3Text = $('#first-headerImg > div:nth-child(3)');
    var firstElem4Text = $('#first-headerImg > div:nth-child(4)');
    var feArr = [firstElem1Text, firstElem2Text, firstElem3Text, firstElem4Text];

    var secondElem1Text = $('#second-headerImg > div:first-child');
    var secondElem2Text = $('#second-headerImg > div:nth-child(2)');
    var secondElem3Text = $('#second-headerImg > div:nth-child(3)');
    var secondElem4Text = $('#second-headerImg > div:nth-child(4)');
    var seArr = [secondElem1Text, secondElem2Text, secondElem3Text, secondElem4Text];

    hsFirstDot.click(function() {
        var firstElemOne = 0;
        loadHeaderTextAnimation(firstElemOne, feArr, seArr);
        removeHeaderTextAnimation(firstElemOne, feArr, seArr);
    });

    hsLastDot.click(function() {
        var secondElemTwo = 1;
        loadHeaderTextAnimation(secondElemTwo, feArr, seArr);
        removeHeaderTextAnimation(secondElemTwo, feArr, seArr);
    });
});



function notHasAnimated(notHas) {
    if (!notHas.hasClass('animated')) {
        return true;
    } else {
        return false;
    }
}


function loadHeaderTextAnimation(elemNum, fArr, sArr) {
    switch(elemNum) {
        case 0:
            if (notHasAnimated(fArr[0])) {
                fArr[0].addClass('fadeInDown animated');
                fArr[1].addClass('fadeInLeft animated');
                fArr[2].addClass('fadeInDown animated');
                fArr[3].addClass('fadeInUp animated');
            }
            break;
        case 1:
            if (notHasAnimated(sArr[0])) {
                sArr[0].addClass('fadeInDown animated');
                sArr[1].addClass('fadeInLeft animated');
                sArr[2].addClass('fadeInDown animated');
                sArr[3].addClass('fadeInUp animated');
            }
            break;
        // default:
        //     default return;
    }
};


function hasClassAnimated(shouldHas) {
    if (shouldHas.hasClass('animated')) {
        return true;
    } else {
        return false;
    }
}


function removeHeaderTextAnimation(elemNum, fArr, sArr) {
    switch(elemNum) {
        case 0:
            if (hasClassAnimated(sArr[0])) {
                sArr[0].removeClass('fadeInDown animated');
                sArr[1].removeClass('fadeInLeft animated');
                sArr[2].removeClass('fadeInDown animated');
                sArr[3].removeClass('fadeInUp animated');
            }
            break;
        case 1:
            if (hasClassAnimated(fArr[0])) {
                fArr[0].removeClass('fadeInDown animated');
                fArr[1].removeClass('fadeInLeft animated');
                fArr[2].removeClass('fadeInDown animated');
                fArr[3].removeClass('fadeInUp animated');
            }
            break;
        // default:
        //     default return;
    }
};







