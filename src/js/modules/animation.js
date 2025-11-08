export function animation(){
        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/hologram.json'
        });
        lottie.loadAnimation({
            container: document.getElementById('about-robot'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/robot.json'
        });
        lottie.loadAnimation({
            container: document.getElementById('contact-robot'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/contact.json'
        });
        lottie.loadAnimation({
            container: document.getElementById('other-animation1'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/others.json'
        });
        lottie.loadAnimation({
            container: document.getElementById('other-animation2'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/animations/contact.json'
        });
}