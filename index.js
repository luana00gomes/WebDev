//require cmd viges access to another Node file’s code
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.use(express.static(__dirname));

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port} from ${__dirname}`); 
});
/*
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { preloader } from './preloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



preloader();
const paths = [...document.querySelectorAll('path.path-anim')];
const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
});
const scrollFn = () => {
    lenis.raf();
    requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);


paths.forEach(el => {
    const svgEl = el.closest('svg');
    const pathTo = el.dataset.pathTo;

    gsap.timeline({
        scrollTrigger: {
            trigger: svgEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    })
    .to(el, {
        ease: 'none',
        attr: { d: pathTo }
    });
});*/