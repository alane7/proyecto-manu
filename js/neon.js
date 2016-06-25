
$(document).ready(function() {



    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage', '3rdPage', '4rdPage', '5thPage', '6thPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Work', 'Skills', 'Skills-2', 'About', 'Contact'],


        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: true,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#212121', '#009688', '#212121', '#009688', '#B6B6B6', '#212121'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){

            if( index == 1 ){




                $( ".step1 .icon" ).animate({
                    left: -800,
                  }, 1000);

                $( ".step2 .icon" ).animate({
                    bottom: -800,
                  }, 1000);

                $( ".step3 .icon" ).animate({
                    right: -800,
                  }, 1000);

                $( ".step4 .icon" ).animate({
                    top: -800,
                  }, 1000);
            }else if( index == 3){


                $( "#laser-1 .laser-luz" ).animate({
                    width: 0,
                  }, 500);

                $( "#laser-2 .laser-luz" ).animate({
                    width: 0,
                  }, 500);

                $( "#laser-3 .laser-luz" ).animate({
                    width: 0,
                  }, 500);

                $( "#laser-4 .laser-luz" ).animate({
                    width: 0,
                  }, 500);

            }else if( index == 4){

            $( "#rocket-1 .rocket-humo" ).animate({
                    width: 35,
                  }, 1000);

                $( "#rocket-2 .rocket-humo" ).animate({
                    width: 35,
                  }, 1000);

                $( "#rocket-3 .rocket-humo" ).animate({
                    width: 35,
                  }, 1000);

                $( "#rocket-4 .rocket-humo" ).animate({
                    width: 35,
                  }, 1000);
            }

        },
        afterLoad: function(anchorLink, index){

            console.log('carga', index);

            if( index == 1 ){

                $( ".step1 .icon" ).animate({
                    left: -800,
                  }, 0);

                $( ".step2 .icon" ).animate({
                    bottom: -800,
                  }, 0);

                $( ".step3 .icon" ).animate({
                    right: -800,
                  }, 0);

                $( ".step4 .icon" ).animate({
                    top: -800,
                  }, 0);

                $( ".step1 .icon" ).animate({
                    left: 0,
                  }, 800);

                $( ".step2 .icon" ).animate({
                    bottom: 0,
                  }, 800);

                $( ".step3 .icon" ).animate({
                    right: 0,
                  }, 800);

                $( ".step4 .icon" ).animate({
                    top: 0,
                  }, 800);
            }else if( index == 3 ){


                $( "#laser-1 .laser-luz" ).animate({
                    width: 350,
                  }, 1000);

                $( "#laser-2 .laser-luz" ).animate({
                    width: 350,
                  }, 1000);

                $( "#laser-3 .laser-luz" ).animate({
                    width: 200,
                  }, 1000);

                $( "#laser-4 .laser-luz" ).animate({
                    width: 200,
                  }, 1000);

            }else if( index == 4 ){


                $( "#rocket-1 .rocket-humo" ).animate({
                    width: 385,
                  }, 1000);

                $( "#rocket-2 .rocket-humo" ).animate({
                    width: 430,
                  }, 1000);

                $( "#rocket-3 .rocket-humo" ).animate({
                    width: 235,
                  }, 1000);

                $( "#rocket-4 .rocket-humo" ).animate({
                    width: 235,
                  }, 1000);

            }


        },
        afterRender: function(){


            
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});