let el = document.getElementsByTagName('body')[0];

function show() {
    
    let e = `<svg width="5vw" height="5vw" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur" onclick="clo()">
    <path d="M1 1L17.9706 17.9706" stroke="#01785b" stroke-width="3"></path>
    <path d="M1 17.9705L17.9706 0.999897" stroke="#01785b" stroke-width="3"></path>
    </svg>`;
    
    el.innerHTML = `<div>
    ${e}
    <a href="" class="blur">SHOP</a>
    <a href="" class="blur">ABOUT</a>
    <a href="" class="blur">FIND US</a>
    <a href="" class="blur">RECIPES</a>
    <a href="" class="blur">LOGIN</a>
    </div>`;
}

function clo() {
    window.location.reload();
}