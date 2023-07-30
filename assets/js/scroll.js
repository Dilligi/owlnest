$(document).ready(function() {
    
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 1,
        },
    });

    let first_screen = new ScrollMagic.Scene({
        triggerElement: '.first_screen',
    })
    .setClassToggle('.first_screen', 'shown');

    let opening = new ScrollMagic.Scene({
        triggerElement: '.opening',
        //offset: $('.opening').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.opening', 'shown');

    let founder = new ScrollMagic.Scene({
        triggerElement: '.founder',
        //offset: $('.founder').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.founder', 'shown');

    let art = new ScrollMagic.Scene({
        triggerElement: '.art',
        //offset: $('.art').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.art', 'shown');

    let life = new ScrollMagic.Scene({
        triggerElement: '.life',
        //offset: $('.life').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.life', 'shown');

    let theatre = new ScrollMagic.Scene({
        triggerElement: '.theatre',
        //offset: $('.theatre').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.theatre', 'shown');
    
    let experiences = new ScrollMagic.Scene({
        triggerElement: '.experiences',
        //offset: $('.experiences').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.experiences', 'shown');

    let waiting = new ScrollMagic.Scene({
        triggerElement: '.waiting',
        //offset: $('.waiting').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.waiting', 'shown');

    let eyes = new ScrollMagic.Scene({
        triggerElement: '.eyes',
        //offset: $('.eyes').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.eyes', 'shown');

    let project = new ScrollMagic.Scene({
        triggerElement: '.project',
        //offset: $('.project').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.project', 'shown');

    let neighbours = new ScrollMagic.Scene({
        triggerElement: '.neighbours',
        //offset: $('.neighbours').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.neighbours', 'shown');

    let numbers = new ScrollMagic.Scene({
        triggerElement: '.numbers',
        //offset: $('.numbers').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.numbers', 'shown');

    let professionals = new ScrollMagic.Scene({
        triggerElement: '.professionals',
        //offset: $('.professionals').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.professionals', 'shown');

    let nest = new ScrollMagic.Scene({
        triggerElement: '.nest',
        //offset: $('.nest').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.nest', 'shown');

    /*let faq = new ScrollMagic.Scene({
        triggerElement: '.faq',
    })
    .setClassToggle('.faq', 'shown');*/

    let roadmap = new ScrollMagic.Scene({
        triggerElement: '.roadmap',
        //offset: $('.roadmap').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.roadmap', 'shown');

    let profit = new ScrollMagic.Scene({
        triggerElement: '.profit',
        //offset: $('.profit').offset().top - window.screen.height + 100,
    })
    .setClassToggle('.profit', 'shown');

    controller.addScene([
        first_screen,
        opening,
        founder,
        art,
        life,
        theatre,
        experiences,
        waiting,
        eyes,
        project,
        neighbours,
        numbers,
        roadmap,
        professionals,
        nest,
        //faq,
        profit,
    ]);
});