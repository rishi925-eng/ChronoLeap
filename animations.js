// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// --- Navbar Slide-in Animation (GSAP) ---
gsap.from(".main-nav ul li", {
    y: -50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.5 // Delay to let the hero section load a bit
});

// --- Logo Pulse Animation (GSAP) ---
gsap.to(".logo", {
    scale: 1.05,
    opacity: 0.9,
    duration: 3,
    repeat: -1, // Infinite repeat
    yoyo: true, // Go back and forth
    ease: "power1.inOut"
});

// --- Headline Animation (GSAP) ---
gsap.from(".main-content h1", {
    opacity: 0,
    y: 50,
    scale: 0.9,
    filter: "blur(10px)",
    textShadow: "0 0 0 rgba(255, 255, 255, 0)",
    duration: 1.5,
    ease: "power3.out",
    delay: 0.7, // Delay after logo and nav appear
    onComplete: () => {
        gsap.to(".main-content h1", {
            textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
            duration: 0.5
        });
    }
});


// --- CTA Button Pulse Animation (Anime.js) ---
// Using Anime.js for a distinct button pulse
const ctaButton = document.querySelector(".cta-button");

// Initial state for the button
anime({
    targets: ctaButton,
    opacity: [0, 1],
    scale: [0.3, 1],
    easing: 'easeOutBack',
    duration: 1000,
    delay: 2000 // Delay its appearance after headline and text
});

// Pulse effect on hover
ctaButton.addEventListener('mouseenter', () => {
    anime({
        targets: ctaButton,
        scale: [1, 1.05],
        duration: 300,
        easing: 'easeOutQuad'
    });
});

ctaButton.addEventListener('mouseleave', () => {
    anime({
        targets: ctaButton,
        scale: [1.05, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
});

// Continuous subtle pulse when not hovered
anime({
    targets: ctaButton,
    scale: [1, 1.01, 1],
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: 1500,
    delay: 3000 // Start subtle pulse after initial appearance
});


// --- Scroll-triggered Fade-ins (GSAP ScrollTrigger) ---
gsap.utils.toArray(".fade-in-on-scroll").forEach(element => {
    gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 90%", // When the top of the element hits 90% of the viewport height
            end: "bottom center", // Animation finishes when the bottom of the element reaches the center of the viewport
            toggleActions: "play none none none", // Play animation once when entering, then do nothing
            // markers: true // Uncomment for debugging scroll trigger positions
        }
    });
});
