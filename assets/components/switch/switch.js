
class switchLanguage extends HTMLElement{
    constructor(){
        super();
    }
  connectedCallback() {
    this.innerHTML =
      `<link rel="stylesheet" type="text/css" href="../../assets/components/switch/switch.css">
      <div class="wrap-toggle">
      <input type="checkbox" id="toggle" class="offscreen">
      <label for="toggle" class="switch"></label>
    </div>`;
  }
}
window.customElements.define("switch-language", switchLanguage);