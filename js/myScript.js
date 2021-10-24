"use strict"

$('.content a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700,
        easing: "linear"
    });
});

$('.hi a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1000,
        easing: "linear"
    });
});

$('.pop_up_window a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1000,
        easing: "linear"
    });
});



    let popUp = document.querySelector('.pop_up_window');
    setTimeout(() => {
        popUp.style.display = 'flex';
        var visibleClass = document.getElementById("pop_up_window_id");
        visibleClass.classList.add("pop_up_winwow_visible");
    }, 1000 );


    $(".pop_up_window").click(function() {
        var hidenClass = document.getElementById("pop_up_window_id");
        hidenClass.classList.add("pop_up_winwow_hiden");
        setTimeout(() => {
            popUp.style.display = 'none';
    }, 2000);
    });



    let selectType = document.querySelector('#calculate_coast');
    let selectDesign = document.querySelector('#design');
    let selectAdaptive = document.querySelector('#adaptive');
    let priceType;
    let priceDesign;
    let priceAdaptive;
    let totalCoast;
    let totalTime;
    let Timetype;
    let TimeDesign;
    let TimeAdaptive;

    selectType.onchange = function () {
        if (selectType.value == 1) {
            priceType = 1000;
            Timetype = 1;
        }
        else if (selectType.value == 2) {
            priceType = 1600;
            Timetype = 2;
        }
        else if (selectType.value == 3) {
            priceType = 2400;
            Timetype = 3;
        }
    };

    selectDesign.onchange = function () {
        if (selectDesign.value == 1) {
            priceDesign = 2000;
            TimeDesign = 2;
        }
        else if (selectDesign.value == 2) {
            priceDesign = 2600;
            TimeDesign = 4;
        }
        else if (selectDesign.value == 3) {
            priceDesign = 3400;
            TimeDesign = 5;
        }
    };

    selectAdaptive.onchange = function () {
        if (selectAdaptive.value == 1) {
            priceAdaptive = 0;
            TimeAdaptive = 0;
        }
        else if (selectAdaptive.value == 2) {
            priceAdaptive = 3600;
            TimeAdaptive = 1;
        }
        else if (selectAdaptive.value == 3) {
            priceAdaptive = 4400;
            TimeAdaptive = 5;
        }
};

formebanaya.onchange = function(){

    if (priceType != undefined && priceDesign != undefined && priceAdaptive != undefined) {
        totalCoast = priceType + priceDesign + priceAdaptive;
        totalTime =  Timetype + TimeDesign + TimeAdaptive;
        document.getElementById('coastNumber').value = totalCoast;
        if (totalTime == 1 || totalTime == 2 || totalTime == 3 || totalTime == 4)
        {
            document.getElementById('coastTime').value = totalTime + " дня";
        }
        else{
            document.getElementById('coastTime').value = totalTime + " дней";
        }
    }
};


let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element_animation');
elements.each((i,el) => {
    observer.observe(el);
});

function onEntry (entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('show_animation');
        }
    });
}


let options1 = {threshold: [1]};
let observer1 = new IntersectionObserver(onWork, options1);
let elements1 = $('.statistick_collumn');
elements1.each((i,el) => {
    observer1.observe(el);
});

    let i = 0;
    let q = 0;
    let w = 0;
    let e = 0;



function numberClient(){
    setTimeout(function ()  {
        i++;
        document.getElementById('number_client').value = i;
        if(i < 120)
        {
            numberClient();
        }
    }, 50);
}

function hourseText(){
    setTimeout(function ()  {
        q+=50;
        document.getElementById('hours_text').value = q;
        if(q < 4600)
        {
            hourseText();
        }
    }, 100);
}

function projectNumber(){
    setTimeout(function ()  {
        w++;
        document.getElementById('project_number').value = w;
        if(w < 340)
        {
            projectNumber();
        }
    }, 30);
}

function rewardsNumber(){
    setTimeout(function ()  {
        e++;
        document.getElementById('rewards_number').value = e;
        if(e < 24)
        {
            rewardsNumber();
        }
    }, 480);
}
let k = 0;
function onWork (entry){
    entry.forEach(change => {
        if(change.isIntersecting && k==0){
            numberClient();
            hourseText();
            projectNumber();
            rewardsNumber();
            k++;
        }
    });
}


let content = document.querySelector('.content')
setTimeout(() => {
    content.style.display = 'inline';
}, 100);


