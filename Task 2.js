var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    
    first.addEventListener('click', FirstImage);
    second.addEventListener('click', SecondImage);
    third.addEventListener('click', ThirdImage);
    
    
    function FirstImage(){
        var infoForFirst = "The BMW X6 is a mid-size luxury crossover by German automaker BMW. The first generation (E71) was released for sale in April 2008 for the 2008 model year The X6 was marketed as a sports activity coupé (SAC) by BMW. It combines the attributes of an SUV (high ground clearance, all-wheel drive and all-weather ability, large wheels and tires) with the stance of a coupé (styling featuring a sloping roof). It was based on the previous generation BMW 5 and 6 Series. E71 development began in 2003 under Peter Tuennermann, after start of E70 X5 development in 2001. Design work by E70 X5 designer Pierre Leclercq was frozen in 2005, with test mules being run from the summer of 2005 and prototypes being tested from late 2006. Production began on December 3, 2007.";
        document.getElementById('info').innerHTML = infoForFirst;
        document.getElementById('first').style.position = 'absolute';
        document.getElementById('first').style.left = '564px';
        document.getElementById('first').style.top = '84px';
        document.getElementById('first').style.width = '550px';
        document.getElementById('first').style.height = '460px';
        document.getElementById('first').style.zIndex = '3';
        document.getElementById('third').style.position = 'absolute';
        document.getElementById('third').style.left = '760px';
        document.getElementById('third').style.top = '107px';
        document.getElementById('third').style.width = '500px';
        document.getElementById('third').style.height = '410px';
        document.getElementById('third').style.zIndex = '2';
        document.getElementById('second').style.position = 'absolute';
        document.getElementById('second').style.left = '916px';
        document.getElementById('second').style.top = '130px';
        document.getElementById('second').style.width = '450px';
        document.getElementById('second').style.height = '360px';
        document.getElementById('second').style.zIndex = '1';
        document.getElementById('info').style.zIndex = '4';
        document.getElementsByClassName('header')[0].style.zIndex = '4';
    }
    function SecondImage(){
        var infoForSecond = "The BMW M8 is the high performance version of the BMW 8 Series developed by the motorsport division of BMW. Introduced in June 2019, the M8 is the road legal version of the BMW M8 GTE which was introduced a year prior and succeeds the BMW M6. The car shares its powertrain with the BMW M5 and is produced in the 2-door convertible (F91 model code) and 2-door coupe (F92 model code) body styles. A 4-door fastback (F93 model code, marketed as 'Gran Coupe') body style is currently in development and BMW have announced that it will be unveiled in November 2019.";
        document.getElementById('info').innerHTML = infoForSecond;
        document.getElementById('second').style.position = 'absolute';
        document.getElementById('second').style.left = '564px';
        document.getElementById('second').style.top = '84px';
        document.getElementById('second').style.width = '550px';
        document.getElementById('second').style.height = '460px';
        document.getElementById('second').style.zIndex = '3';
        document.getElementById('first').style.position = 'absolute';
        document.getElementById('first').style.left = '760px';
        document.getElementById('first').style.top = '107px';
        document.getElementById('first').style.width = '500px';
        document.getElementById('first').style.height = '410px';
        document.getElementById('first').style.zIndex = '2';
        document.getElementById('third').style.position = 'absolute';
        document.getElementById('third').style.left = '916px';
        document.getElementById('third').style.top = '130px';
        document.getElementById('third').style.width = '450px';
        document.getElementById('third').style.height = '360px';
        document.getElementById('third').style.zIndex = '1';
        document.getElementById('info').style.zIndex = '4';
        document.getElementsByClassName('header')[0].style.zIndex = '4';
    }
    function ThirdImage(){
        var infoForThird = "The X7 is based on the Concept X7 iPerformance that was showcased during the 2017 Frankfurt Motor Show. The G07 features a self-levelling air suspension system, with a double-wishbone front suspension and multi-link rear suspension. It can be raised or lowered by 40 mm (1.6 in) and will automatically lower the car by 20 mm (0.8 in) at speeds of over 138 km/h (86 mph). The boot capacity is rated at 326 litres (11.5 cu ft), and 2,120 litres (75 cu ft) with the seats folded down.All petrol and diesel models feature engine particulate filters and meet the Euro 6d-TEMP emissions standard. The xDrive50i model is available outside the European markets, while the European markets will get the M50i models.";
        document.getElementById('info').innerHTML = infoForThird;
        document.getElementById('third').style.position = 'absolute';
        document.getElementById('third').style.left = '564px';
        document.getElementById('third').style.top = '84px';
        document.getElementById('third').style.width = '550px';
        document.getElementById('third').style.height = '460px';
        document.getElementById('third').style.zIndex = '3';
        document.getElementById('second').style.position = 'absolute';
        document.getElementById('second').style.left = '760px';
        document.getElementById('second').style.top = '107px';
        document.getElementById('second').style.width = '500px';
        document.getElementById('second').style.height = '410px';
        document.getElementById('second').style.zIndex = '2';
        document.getElementById('first').style.position = 'absolute';
        document.getElementById('first').style.left = '916px';
        document.getElementById('first').style.top = '130px';
        document.getElementById('first').style.width = '450px';
        document.getElementById('first').style.height = '360px';
        document.getElementById('first').style.zIndex = '1';
        document.getElementById('info').style.zIndex = '4';
        document.getElementsByClassName('header')[0].style.zIndex = '4';
    }
