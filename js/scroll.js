const links = document.querySelectorAll('.menu-list__link');
const mainButton = document.querySelector('.main__button');
const mainScroll = document.querySelector('.main__scroll');

const allLinks = [...links, mainButton, mainScroll];

// console.log(links);
allLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (section) {
      // section.scrollIntoView ({
      //   block: 'start',
      //   behavior: 'smooth'
      // })
      // ниже скопировали текст из библиотеки, чтобы работало и на macbook
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
    }
    // console.log(section);
  })
})