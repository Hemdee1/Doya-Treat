window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const arrowUp = document.querySelector('.arrowUp')

    nav.classList.toggle('sticky', window.scrollY > 0);
    arrowUp.classList.toggle('shown', window.scrollY > 500);
})

function toggleOptions() {
    const option = document.querySelector('.option');
    const navUl = document.querySelector('.navUl');
    const list = document.querySelectorAll('.navUl li');

    option.classList.toggle('active');
    navUl.classList.toggle('active');

    if(navUl.className.includes('active')) {
        list.forEach(li => {
            li.onclick = () => {
                option.classList.remove('active');
                navUl.classList.remove('active');
            };
        })
    }
}

function signUp() {
    const login = document.querySelector('.login')
    login.classList.toggle('active');
}

const scrollLink = document.querySelectorAll('.scroll-link');
const nav = document.querySelector('nav');

scrollLink.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const fixedNav = nav.classList.contains('sticky')

        let position = element.offsetTop - nav.getBoundingClientRect().height;

        if(fixedNav) {
            position = position - 25;
        }

        window.scrollTo({
            left: 0,
            top: position
        })
    })
})