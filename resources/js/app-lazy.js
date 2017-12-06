
// Get all of the images that are marked up to lazy load
const images = document.querySelectorAll('img[srcset]');
const config = {
  // If the image gets within 50px in the Y axis, start the download.
  rootMargin: '50px 0px',
  threshold: 0.01
};

// The observer for the images on the page
let observer = new IntersectionObserver(onIntersection, config);

images.forEach(image => {
    observer.observe(image);
});


function onIntersection(entries) {
  // Loop through the entries
  entries.forEach(entry => {
    // Are we in viewport?
    if (entry.intersectionRatio > 0) {

      // Stop watching and load the image
      observer.unobserve(entry.target);
      srcSetSize(entry.target);
    }
  })
}

function srcSetSize(image){
    image.setAttribute('sizes', Math.ceil(image.getBoundingClientRect().width) + 'px');
    image.classList.add('js-sized');
}


// On resize: only loaded
let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() =>{
        const sizedImages = document.querySelectorAll('.js-sized');
        sizedImages.forEach(image => {
            srcSetSize(image);
        })
    }, 250);
});
