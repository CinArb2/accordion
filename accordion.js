let cardQA = document.querySelectorAll('.card__qa-title');
let cardText = document.querySelectorAll('.card__qa-text');



cardQA.forEach(item => {


  item.addEventListener('click', () => {
    
    cardQA.forEach(item2 => {
      if (item != item2) {
        item2.nextElementSibling.style.height = null;
        item2.nextElementSibling.classList.remove('show')
        item2.classList.remove('show');
      }
    })
    

    item.nextElementSibling.style.height = 'auto';
    let x = item.nextElementSibling.clientHeight;
    item.nextElementSibling.style.height = x;
    item.nextElementSibling.classList.toggle('show');
    item.classList.toggle('show');
    if (!item.nextElementSibling.classList.contains('show')) {
      item.nextElementSibling.style.height = null;
    }
    
  })
})
