import { Article } from './js/Article';
import { ArticleModal } from './js/ArticleModal';
import { Modal } from './js/Modal';

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: 'src/assets/Pics/Strategies/pic1.png',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: 'src/assets/Pics/Strategies/pic2.png',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: 'src/assets/Pics/Strategies/pic3.png',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 5,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: 'src/assets/Pics/Strategies/pic5.png',
        tags: ['Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 6,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: 'src/assets/Pics/Strategies/pic1.png',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 7,
        title: 'Motivation Is The First Step To Success',
        urlToImage: 'src/assets/Pics/Strategies/pic2.png',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 8,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: 'src/assets/Pics/Strategies/pic3.png',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    
];

window.onload = function () {

    // Render articles 
    renderArticlesToDom();

    // Tags
    tagsClickHandler();

    // Generate base Modal from Modal Class
    addBenefitsToolsHandler();

    // Slider

}

const tagsClickHandler = function () {
    document.querySelector('.strategies__tags').addEventListener('click', (event) => {
        let clickedTag = event.target
        if (event.target.classList.contains('tag')) {
            removeSelectedTag();
            addSelectedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllElements();
            }
            else {
                showElementsByTags(clickedTag.innerText);
            }
        }
    })

}

const removeSelectedTag = function () {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(function (tag) {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const addSelectedTag = function (clickedTag) {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllElements = function () {
    let strategies = document.querySelectorAll('.strategies-wrapper .strategy')

    strategies.forEach(function (strategy) {
        strategy.classList.remove('strategy_hidden')
    })

}

const showElementsByTags = function (selectedTag) {
    let strategies = document.querySelectorAll('.strategies-wrapper .strategy')
    
    strategies.forEach(function (strategy) {
        strategy.classList.add('strategy_hidden')
        strategy.querySelectorAll('.tag').forEach(function (tag) {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden')
            }
        })
    })

}

const renderArticlesToDom = function () {
    let strategiesWrapper = document.querySelector('.strategies-wrapper');
    strategiesWrapper.innerHTML = '';

    let articles = [];
    data.forEach(function (article) {
        articles.push (new Article (article))
    })
    
    articles.forEach(function (article) {
        strategiesWrapper.append(article.generateArticle());
    })
    addStrategyClickHandler();
}

// const renderArticlesToDom = function () {
//     let strategiesWrapper = getStrategiesWrapper();
//     createArticle(data).forEach(function (article) {
//         strategiesWrapper.append(article.generateArticle())
//     })
// }

// const getStrategiesWrapper = function () {
//     let strategiesContainer = document.querySelector('.strategies-wrapper');
//     strategiesContainer.innerHTML = '';
//     return strategiesContainer;
// }

// const createArticle = function (data) {
//     let articles = [];
//     data.forEach(function (article) {
//         articles.push (new Article(article))
//     })
//     return articles;
// }

// const addBenefitsToolsHandler = function () {
//     document.querySelector('.benefits-button .button-benefits').addEventListener('click', (event) => {
//         generateBenefitsModal();
//     })
// }

// const generateBenefitsModal = function () {
//     renderModalWindow('Test content for Tools Modal');
// }

// const renderModalWindow = function (content) {
//     let modal = new Modal ('tools-modal');
//     // console.log(modal);
//     modal.buildModal(content);
// }

const addStrategyClickHandler = function () {
    document.querySelector('.strategies-wrapper').addEventListener('click', (event) => {
        if (event.target.closest('.strategy')) {
            let clickedStrategyId = event.target.closest('.strategy').getAttribute('data-id');
            let clickedStrategyData = getClickedData(clickedStrategyId);
            renderArticleModaWindow(clickedStrategyData);
        }
    })
} 

const getClickedData = function (id) {
    return data.find(article => article.id == id)
}

const renderArticleModaWindow = function (article) {
    let modal = new ArticleModal ('article-modal', article);
    modal.renderModal();
}