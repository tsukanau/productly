export class Article {
    constructor ({ id, title, urlToImage, tags, ...rest }) {
        this.id = id;
        this.urlToImage = urlToImage;
        this.title = title;
        this.tags = tags;
    }
    
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id' , this.id);

        if (this.urlToImage) {
            template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`;
        }
        if (this.title || this.tags) {
            template += `<div class="strategy__content">`;

            if (this.title) {
                template += `<h3 class="strategy__name">${this.title}</h3>`;
            }

            if (this.tags) {
                template += `<div class="strategy__tags tags">`;

                this.tags.forEach(tag => {

                template += `<span class="tag tag_colored">${tag}</span>`;
                
                })

                template += `</div>`;
            }
            template += `</div>`;
        }

        article.innerHTML = template
        return article;
    }
    
    
    // Articles generator 


    
}