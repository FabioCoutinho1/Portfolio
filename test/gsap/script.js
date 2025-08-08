gsap.registerPlugin(ScrollTrigger);

gsap.to(".conteudo", {
  scrollTrigger: {
    trigger: ".screen2",
    start: "top center",
    end: "bottom center",
    scrub: true, // <- anima conforme o scroll
  },
  opacity: 1,
  x: 0,
  y: 0,
  duration: 1,
  ease: "power2.out",
});
