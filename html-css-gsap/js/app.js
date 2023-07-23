gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true
  });

  gsap.fromTo(".hero-section", {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "center",
      end: "820",
      scrub: true
    }
  });

  const itemsL = gsap.utils.toArray(".gallery-left .gallery-item");
  const itemsR = gsap.utils.toArray(".gallery-right .gallery-item");

  for (let i = 0; i < itemsL.length; i++) {
    gsap.fromTo(itemsL[i], {opacity: 0, x: -100}, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: itemsL[i],
        start: "-500",
        end: "0",
        scrub: true
      }
    });

    gsap.fromTo(itemsR[i], {opacity: 0, x: 100}, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: itemsR[i],
        start: "-500",
        end: "0",
        scrub: true
      }
    });
  }
}