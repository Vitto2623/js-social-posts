const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "",
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Marco Bravi",
            "image": "https://unsplash.it/300/300?image=18"
        },
        "likes": 90,
        "created": "2021-06-15"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=300",
        "author": {
            "name": "Luca Del Vivo",
            "image": "https://unsplash.it/300/300?image=2"
        },
        "likes": 120,
        "created": "2021-09-010"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=270",
        "author": {
            "name": "Giorgio Lupi",
            "image": "https://unsplash.it/300/300?image=22"
        },
        "likes": 78,
        "created": "2021-02-14"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=243",
        "author": {
            "name": "Davide Bosio",
            "image": "",
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Marco Principi",
            "image": "https://unsplash.it/300/300?image=30"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=160",
        "author": {
            "name": "Gianfranco Fini",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=250",
        "author": {
            "name": "Olga Del Monte",
            "image": "https://unsplash.it/300/300?image=12"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Federico Seni",
            "image": "https://unsplash.it/300/300?image=18"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=34",
        "author": {
            "name": "Gianmarco Sesti",
            "image": "",
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=140",
        "author": {
            "name": "Ignazio Abate",
            "image": "",
        },
        "likes": 56,
        "created": "2021-04-03"
    }
];


let content = "";

for (let i = 0; i < posts.length; i++) {
    content += `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${posts[i]["author"]["image"]}" alt="${posts[i]["author"]["name"]}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts[i]["author"]["name"]}</div>
                <div class="post-meta__time">${posts[i]["created"]}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${posts[i]["content"]}</div>
    <div class="post__image">
        <img src="${posts[i]["media"]}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i]["likes"]}</b> persone
            </div>
        </div> 
    </div>
    `
};

const postWrapper = document.querySelector('.post');
postWrapper.innerHTML = content;


const numeroDiLike = document.querySelector('.js-likes-counter');


const button1 = document.querySelector('.like-button');
button1.addEventListener('click', function(){
    button1.classList.add('color-button');
    numeroDiLike.innerHTML = posts[0]["likes"]+1;
});
