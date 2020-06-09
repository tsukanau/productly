import { Modal } from './Modal';

export class ArticleModal extends Modal {
    constructor (classes, {id, title, urlToImage, tags, content, date}) {
        super(classes)

        this.id = id;
        this.urlToImage = urlToImage;
        this.title = title;
        this.tags = tags;
        this.content = content;
        this.date = date;
    }


    generateContent() {
        let template = '';
        let article = document.createElement('div');
        article.className = 'article-modal__content';

        if (this.urlToImage) {
            template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`;
        }
        if (this.title || this.tags || this.content || this.date) {
            template += `<div class="strategy__content">`;

            if (this.date) {
                template += `<p class="strategy__date">${this.date}</p>`
            }
            if (this.title) {
                template += `<h3 class="strategy__name">${this.title}</h3>`;
            }
            if (this.content) {
                template += `<p class="strategy__date">${this.content}</p>`
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
        article.innerHTML = template; 
        return article;
    }
    renderModal() {
        let content = this.generateContent();
        super.buildModal(content);
    }

}