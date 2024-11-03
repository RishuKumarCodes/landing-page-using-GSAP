function page1Animation() {
    var tl = gsap.timeline();
    tl.from("nav h1, nav h4, nav button ", {
        y: -50,
        duration: 0.4,
        delay: 0.05,
        opacity: 0,
        stagger: 0.07
    })
    tl.from(".center-part1 h1 ,.center-part1 p , .center-part1 button ", {
        x: -100,
        delay: -0.1,
        opacity: 0,
        duration: 0.4,
        stagger: 0.07
    })
    tl.from(".center-part2", {
        x: 100,
        opacity: 0,
        delay: -0.5,
        duration: 0.4,
        stagger: 0.07
    })
    tl.from(".section1bottom img", {
        y: 50,
        opacity: 0,
        delay: -0.1,
        duration: 0.3,
        stagger: 0.07
    })
}
page1Animation();

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // start: "top 90%",
            // end: "top 0",
            scrub: 2,
        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0
    })

    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1,
        scrub: 1,
    })

    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: -1,
        scrub: 1,
    })

    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,
        scrub: 1,
    })

    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: -1,
        scrub: 1,
    })
}
page2Animation();
