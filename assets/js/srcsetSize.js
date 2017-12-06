import { query, attribute } from 'spatie-dom';

export default function () {
    query('.js-srcset-size').each( srcset => {
        srcset.setAttribute('sizes', Math.ceil(srcset.getBoundingClientRect().width()) + 'px');
    });
}
