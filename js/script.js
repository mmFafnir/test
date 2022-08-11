
const bgLine = document.querySelector('.line-bg');
document.addEventListener('scroll', (e) => {
    const deg = Math.round(window.scrollY * 0.2)
    bgLine.style.transform = `rotate(-${deg}deg)`
})

const header = document.querySelector('.header')
const headerNav = header.querySelector('.header nav');
const burgerMenu  = document.querySelector('.burger-menu');
const burgerIcon = header.querySelector('.burger-icon');

const burgerMenuHandler = () => {
    if(window.innerWidth < 900 && !headerNav.closest('.burger-menu')) {
        const subMenus = headerNav.querySelectorAll('.sub-menu');
        burgerMenu.insertAdjacentElement('beforeend', headerNav);
        
        subMenus.forEach(subMenu => {
            const icon = subMenu.querySelector('.sub-menu__icon'); 
            icon.addEventListener('click', () => {
                subMenu.classList.toggle('active');
            })
        })
        
    } else  if(window.innerWidth > 700) {
        burgerMenu.innerHTML = '';
    }

} 
burgerMenuHandler()
window.addEventListener('resize', () => {
    console.log(burgerMenu)
    burgerMenuHandler()
})

burgerIcon.addEventListener('click', () => {
    header.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');

})


const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const textareas = form.querySelectorAll('textarea');

const formElements = [...inputs, ...textareas]
const focusHandler = (input) => {
    if(input.value !== '') {
        console.dir(input)
        input.nextElementSibling.classList.add('focus')
    } else {
        input.nextElementSibling.classList.remove('focus')
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formElements)
    formElements.forEach(item => {
        if(item.value == '' && item.classList.contains('required')){
            item.parentElement.classList.add('error');
        } else {
            item.parentElement.classList.remove('error');
        }
    });
})

formElements.forEach(item => {
    item.addEventListener('focus', () => {
        item.parentElement.classList.add('focus-border')
    })
    item.addEventListener('blur', () => {
        item.parentElement.classList.remove('focus-border')
    })
})

inputs.forEach(input => {
    input.addEventListener('change', () => {
        focusHandler(input)
    })
});


