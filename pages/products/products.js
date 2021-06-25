let prod1Item = document.querySelectorAll('.prod-item1');
let prod1Hover = document.querySelectorAll('.prod1-hover');
let resizer = document.querySelector('.resizer');

// prod1Item.addEventListener('mouseover', function(){
//     prod1Hover.style.display = 'flex';
// });

prod1Item.forEach( item => {
    item.addEventListener('mouseover', function(){
        item.children[0].style.display = 'flex';

    })
});

prod1Item.forEach( item => {
    item.addEventListener('mouseleave', function(){
        item.children[0].style.display = 'none';
    })
});

// prod1Item.addEventListener('mouseleave', function(){
//     prod1Hover.style.display = 'none';
// });

resizer.addEventListener('click',function(){
    prod1Item.style.width="90vw";
    prod1Item.style.height="80vh";
});

console.log("prodackk");


