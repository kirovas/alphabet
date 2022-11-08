$(window).on('load', function() { 
    $(".loader").fadeOut(); 
});

gsap.registerPlugin(ScrollTrigger);

const hb_banner = document.querySelector('#hb-banner')
      alinas_cake = document.querySelector('.cake-for-alina')
      alina_name_container = document.querySelector('.alina')
      alina_name = document.querySelector('.name')
      cake_container = document.querySelector('.alina_get_the_cake')
      fireworks_container = document.querySelector('.pyro')
      hb_banner_container = document.querySelector('#and_should_see_the_hb-banner');

let tl = gsap.timeline({ paused: true });
let tl2 = gsap.timeline({ paused: true });
let tl3 = gsap.timeline({ paused: true });

// tl
//   .to(hb_banner, { ease: "sine.inOut" } )
// ;

tl2
.from(alinas_cake, { scale:0,duration: 1.5, ease: "sine.inOut" })
  .to(alinas_cake, { scale:1,duration: 3.5, ease: "sine.inOut" } )
;
tl2.reverse(1.5);

tl3
.from(alina_name, { bottom:-300, ease: "sine.inOut" })
  .to(alina_name, { bottom:0,duration: 3.5, ease: "sine.inOut" } )
;
tl3.reverse(1.5);

let timeout = gsap.delayedCall(1.5, function() {
  
  ScrollTrigger.create({

      trigger: hb_banner_container,
      toggleActions: "play none reverse none",
      markers: false,
      start: "0 50%",
      end: "100% 0%",
      scrub: 1,
      animation: tl,
      onEnter: () => addStartAnimationToBanner(),
      onLeaveBack: () => addEndAnimationToBanner(),

  });
  ScrollTrigger.create({

    trigger: cake_container,
    toggleActions: "play none reverse none",
    markers: false,
    start: "top top",
    end: "bottom 50%+=100px",
    scrub: 1,
    animation: tl2,
    onEnter: () => startFireworks(),
    onLeaveBack: () => startFireworks(),
});

ScrollTrigger.create({
    trigger: alina_name_container,
    toggleActions: "play none reverse none",
    markers: false,
    start: "top top",
    end: "bottom 50%+=100px",
    scrub: 1,
    animation: tl3,
});

});

function  addStartAnimationToBanner(){
    $(hb_banner).removeClass('animate__bounceOutUp')
    $(hb_banner).addClass('animate__bounceInDown show');
}
function  addEndAnimationToBanner(){
    $(hb_banner).removeClass('animate__bounceInDown');
    $(hb_banner).addClass('animate__bounceOutUp');
    setTimeout(() => {
        $(hb_banner).removeClass('show');  
    }, 300);
}
function startFireworks() {
    $(fireworks_container).toggle();
}