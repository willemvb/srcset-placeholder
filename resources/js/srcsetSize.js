export default function () {
    document.querySelectorAll('img[srcset]').forEach( image => {
        image.setAttribute('sizes', Math.ceil(image.getBoundingClientRect().width) + 'px');
    });
}
