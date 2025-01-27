var tl = gsap.timeline();

gsap.set(".a",{opacity:0,y:10})
gsap.set("#right img",{opacity:0,y:10,scale:2})

tl
    .from("#left",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.5
    })
    .from("#right",{
        width:0,
        ease:Expo.easeInOut,
        duration:1.5
        })
    .to(".a",{
        delay:-2,
        stagger:.5,
        ease:Expo.easeInOut,
        opacity:1,
        y:0,
        duration:2
    })
    .to("#right img",{
        delay:-1,
        ease:Expo.easeInOut,
        opacity:1,
        y:0,
        scale:1,
        duration:2
    })