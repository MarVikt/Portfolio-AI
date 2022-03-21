const tabButtons = document.querySelectorAll('.design-list__item');
const tabTitles = document.querySelectorAll('.design__title');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabBlockImages = document.querySelectorAll('.design-block__img');
const currentDesign = document.querySelector('.design-list__item_active');

// console.log(tabTitles);
// console.dir(tabButtons);

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove('hidden')
    } else {
      elem.classList.add('hidden')
    }
  })
}

const changeTitle = (array, index) => {
  array.forEach((item, indexArray) => {
    if (index === indexArray) {
      item.classList.remove('hidden')
    } else {
      item.classList.add('hidden')
    };
    if (item.classList.contains('design__title') && !item.classList.contains('hidden')) {
      document.title = item.innerText
    }
  })
}

changeTitle(tabTitles,0)   

tabButtons.forEach((tabButton,index) => {
  tabButton.addEventListener('click',(event) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeTitle(tabTitles,index)   
    changeContent(tabDescriptions,dataValue)   
    changeContent(tabBlockImages,dataValue)   
    changeContent(tabImages,dataValue)   
     
    // tabDescriptions.forEach((descr) => {
    //   if (descr.dataset.tabsField === dataValue) {
    //     descr.classList.remove('hidden')
    //   } else {
    //     descr.classList.add('hidden')
    //   }
    // })
    
    // tabImages.forEach((image) => {
    //   if (image.dataset.tabsField === dataValue) {
    //     image.classList.remove('hidden')
    //   } else {
    //     image.classList.add('hidden')
    //   }
    // })
    
    tabButtons.forEach((btn) => {
      // console.log(btn);
      // console.log(event.target);
      if (btn === event.target) {
        btn.classList.add('design-list__item_active')
      } else {
        btn.classList.remove('design-list__item_active')
      }
    })
  })
});
