export function animation(){
        const animationhologram = lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/hologram.json'
        });
        const animationrobot = lottie.loadAnimation({
            container: document.getElementById('about-robot'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/robot.json'
        });
        const animationcontact = lottie.loadAnimation({
            container: document.getElementById('contact-robot'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/contact.json'
        });
        const animation = lottie.loadAnimation({
            container: document.getElementById('main-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/Space.json'
        });
}