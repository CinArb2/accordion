let cardQA = document.querySelectorAll('.card__qa-title');

cardQA.forEach(item => {
  item.addEventListener('click', () => {
    cardQA.forEach(item2 => {
      if (item != item2) {
        item2.nextElementSibling.classList.remove('show')
        item2.classList.remove('show');
      }
    })
    item.nextElementSibling.classList.toggle('show');
    item.classList.toggle('show');
  })
})
