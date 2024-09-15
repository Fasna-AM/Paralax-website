head = document.getElementById('head')
leaf = document.getElementById('leaf')
hill1 = document.getElementById('hill1')
hill4 = document.getElementById('hill4')
hill5 = document.getElementById('hill5')

window.addEventListener('scroll', () => {
    value = window.scrollY;
    head.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.right = value * 1.5 + 'px';
    hill1.style.top = value * 1 + 'px';

});