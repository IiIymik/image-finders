export default class LoadMoreBTN{
    constructor({ selector, hidden = false }) {
        this.refs = this.getRefs(selector);

        hidden && this.hide();
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector('.label');
        refs.spiner = refs.button.querySelector('.spiner');
        return refs;
    }

    enable() {
        this.refs.button.disable = false;
        this.refs.label.textContent = "Load more";
        this.refs.spiner.classList.add('is-hidden');
    }

    disable() {
        this.refs.button.disable = true;
        this.refs.label.textContent = "Loading...";
        this.refs.spiner.classList.remove('is-hidden');
    }

    show() {
        this.refs.button.classList.remove('is-hidden');
    }

    hide() {
        this.refs.button.classList.add('is-hidden');
    }
}