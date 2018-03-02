const menuList = document.getElementById('menu-list');
const posts = document.getElementsByClassName('post');
const hamburger = document.getElementById('nav-link');
const categoriesMenu = document.getElementById('categories-menu');

const showAllPosts = () => {
    for (let i=0; i<posts.length; i++) {
        posts[i].classList.remove('hidden')
    }
};

menuList.addEventListener('click', (event) => {
    const category = event.target.getAttribute('id');
    if (event.target.getAttribute('class') === 'category-link') {
        showAllPosts();
        toggleCategories();
        for (let i=0; i<posts.length; i++) {
            if (!posts[i].classList.contains(category)) {
                posts[i].classList.add('hidden')
            }
        }
    }
});

const toggleCategories = () => {
    categoriesMenu.classList.toggle('hidden');
};

hamburger.addEventListener('click', toggleCategories);