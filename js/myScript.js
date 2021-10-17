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


const statistick = document.querySelector('.statistick');
const statistickPoint = statistick.getBoundingClientRect().y - window.innerHeight;

    console.log(statistickPoint + 500);
    console.log(window.pageYOffset);
    let i = 0;
window.addEventListener('scroll', () =>
{
    if (window.pageYOffset > 3200 )
    {
        setInterval(() => {
                if (i<121)
                {
                    document.getElementById('number_client').value = i;
                    i++;
                }
                if (i<4601)
                {
                    document.getElementById('hours_text').value = i;
                    i++;
                }
                if (i<341)
                {
                    document.getElementById('project_number').value = i;
                    i++;
                }
                if(i<24)
                {
                    document.getElementById('rewards_number').value = i;
                    i++;
                }
        }, 500);
    }
});



let content = document.querySelector('.content')
setTimeout(() => {
    content.style.display = 'inline';
}, 100);

