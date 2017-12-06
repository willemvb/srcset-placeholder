import srcsetSize from './srcsetSize';

// Start srcset asap the first time
srcsetSize();

// Or recalc on resize
let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() =>{
        srcsetSize();
    }, 250);
});
