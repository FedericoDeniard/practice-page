class topNav extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 
    `
    <div class="nav-container">
        <nav class="nav">
            <ul>
                <li><a class="botonera" href="index.html">INICIO</a></li>
                <li><a class="botonera" href="../partituras/partituras.html">PARTITURAS</a></li>
                <li><a class="botonera" href="../videos/videos.html">VIDEOS</a></li>
            </ul>
        </nav>
    </div>`
    }
}
window.customElements.define("top-nav", topNav);