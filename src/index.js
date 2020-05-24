window.onload = function () {

    tagsClickHandler();
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