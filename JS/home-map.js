const nodes = document.querySelectorAll('.node');

nodes.forEach(node => {

    node.addEventListener('mouseenter', () => {

        node.style.zIndex = '10';

    });

});
