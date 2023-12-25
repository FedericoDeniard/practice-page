class topNav extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 
    `<link rel="stylesheet" type="text/css" href="../../assets/components/nav/topnav.css">
    <script type="module" src="../../index.js"></script>
    <div class="nav-container">
        <nav class="nav">
            <ul>
                <li><a class="botonera" href="../index/index.html">INICIO</a></li>
                <li><a class="botonera" href="../partituras/partituras.html">PARTITURAS</a></li>
                <li><a class="botonera" href="../videos/videos.html">VIDEOS</a></li>
                <li><switch-language></switch-language></li>
            </ul> 
        </nav>
    </div>`
    }
}
window.customElements.define("top-nav", topNav);