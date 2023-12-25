class compFooter extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 
    `	<div class="footer">
    <footer class="footer-container">
        <a href="https://www.instagram.com/fededeniard/" target="_blank"><img src="../../assets/instagram.svg"></img><h4> instagram</h4></a>
        <a href="https://www.youtube.com/channel/UCtFkBfAWMelIyY9xCVHUprw" target=".blank"><img src="../../assets/youtube.svg"></img><h4>youtube</h4></a>
    </footer>
</div><link rel="stylesheet" type="text/css" href="../../assets/components/comp-footer/comp-footer.css">`
    }
}
window.customElements.define("comp-footer", compFooter);