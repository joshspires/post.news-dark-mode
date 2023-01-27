/* Settings modal code */
window.onload = function () {

    var modal_s = document.getElementById("a-modal");
    var btn_s = document.getElementById("a-set");
    var a_s = document.getElementsByClassName("close")[0];

    btn_s.onclick = function () {
        modal_s.style.display = "block";
    }

    a_s.onclick = function () {
        modal_s.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal_s) {
            modal_s.style.display = "none";
        }
    }

    const html = document.querySelector("html")
    const checkbox = document.querySelector("input[name=theme]")
    const getStyle = (element, style) =>
        window
            .getComputedStyle(element)
            .getPropertyValue(style);
    const initialColors = {
        bg: getStyle(html, "--bg"),
        bga: getStyle(html, "--bga"),
        bgh: getStyle(html, "--bgh"),
        bgs: getStyle(html, "--colors-spidertooth000c"),
        text: getStyle(html, "--text"),
        invert: getStyle(html, "--invert"),
        comment: getStyle(html, "--comment"),
        a: getStyle(html, "--a"),
        white: getStyle(html, "--white"),
    }
    const darkMode = {
        bg: "#000000",
        bga: "#323b4b",
        bgh: "#1a2230",
        text: "#ffffff",
        bgs: "#000000",
        invert: "invert(1) brightness(255)",
        comment: "invert(1) brightness(0.9) hue-rotate(179deg)",
        a: "var(--colors-lifespirit150c)",
        white: "#ffffff",
    }
    const transformKey = key =>
        "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
    const changeColors = (colors) => {
        Object.keys(colors).map(key =>
            html.style.setProperty(transformKey(key), colors[key])
        );
    }
    checkbox.addEventListener("change", ({ target }) => {
        target.checked ? changeColors(darkMode) : changeColors(initialColors);
    });
    const isExistLocalStorage = (key) =>
        localStorage.getItem(key) != null;
    const createOrEditLocalStorage = (key, value) =>
        localStorage.setItem(key, JSON.stringify(value));
    const getValeuLocalStorage = (key) =>
        JSON.parse(localStorage.getItem(key));
    checkbox.addEventListener("change", ({ target }) => {
        if (target.checked) {
            changeColors(darkMode);
            createOrEditLocalStorage('mode', 'darkMode');
        } else {
            changeColors(initialColors);
            createOrEditLocalStorage('mode', 'initialColors');
        }
    })
    if (!isExistLocalStorage('mode'))
        createOrEditLocalStorage('mode', 'initialColors');
    if (getValeuLocalStorage('mode') === "initialColors") {
        checkbox.removeAttribute('checked');
        changeColors(initialColors);
    } else {
        checkbox.setAttribute('checked', "");
        changeColors(darkMode);
    }

}

const settings_btn = document.createElement('div');
settings_btn.setAttribute("aria-label", "Accessibility settings");
settings_btn.setAttribute("class", "a-set c-bVhrlL");
settings_btn.setAttribute("id", "a-set");
settings_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'

document.body.appendChild(settings_btn);

const settings_modal = document.createElement('div');
settings_modal.setAttribute("class", "a-modal modal");
settings_modal.setAttribute("id", "a-modal")
settings_modal.innerHTML = '<div class="modal-content"><a class="close">&times;</a><div class="inner-content"><h3>Accessibility settings</h3><div class="toggle">Dark Mode <input class="access-switch" id="switch" type="checkbox" name="theme"><label class="access-label" for="switch">Dark Mode Toggle</label></div><br><div class="toggle">High Contrast Mode (coming soon) <input disabled class="access-switch" id="switch-c" type="checkbox" name="contrast"><label class="access-label" for="switch-c">High Contrast Toggle</label></div><br><div class="toggle">Greyscale Mode (coming soon) <input disabled class="access-switch" id="switch-g" type="checkbox" name="grey"><label class="access-label" for="switch-g">Greyscale Toggle</label></div></div></div>'

document.body.appendChild(settings_modal);

/* CSS inject */
const style = document.createElement('style');
style.setAttribute("Post-dark-mode", "true");

style.textContent = `
::-webkit-scrollbar {
    display: none;
}

div.ptr__pull-down--pull-more>div>p {
    text-align: center;
    text-transform: capitalize;
}

html {
    --bg: #efeff2;
    --bga: #ffffff;
    --bgh: #f7f7f8;
    --text: #000000;
    --invert: inherit;
    --comment: inherit;
    --a: inherit;
    --white: inherit;
    --black: inherit;
  }

  .c-jfWlDS {
    fill: var(--bg);
    stroke: var(--bg); 
  }

  .c-dJGw-ibfYWt-css {
    border-color: var(--bga)
  }

  div[data-spotim-module] {
    filter: var(--comment);
  }

  a, a:hover, a:focus, a:active {
    color: var(--a)!important;
  }

  .c-FHWXc-iypSxu-hierarchy-SECONDARY {
    color: var(--white);
    border-color: var(--white);
  }

  #__next > header > div > ul > li.c-ibzkWc > div > div > span:nth-child(1) > button > span > img,
  #__next > header > div > ul > li.c-eBYgRj > a > div > span > img,
  #home_2KDkawirFru02kve3JYs82s7pQM > article > div.c-kHiOPw > button:nth-child(3) > span > img,
  #__next > header > div > div > ul > div > div > span:nth-child(1) > button > span > img,
  #__next > main > div > div > div > div > div.ptr__children > article > div.c-kHiOPw > button:nth-child(3) > span:nth-child(1) > img,
  article > div.c-kHiOPw > button:nth-child(3) > span:nth-child(1) > img,
  #__next > main > div > div > div > div.ptr__children > div.c-fSoVva > div.c-jaySyu > div.c-iNeJhE > div.c-jpYNHp > button > span > img {
    filter: var(--invert);
  }

  body, .c-dVvJMv,
  .c-hJLqTF-emnxNO-isTip-true,
  .c-bZFocq,
  .c-dnbfWL:hover,
  .c-dnbfWL:focus,
  .c-PJLV-dNuByD-type-FULL_HEIGHT,
  .c-dbGOIS,
  .c-foFVYh,
  .c-jvqXaZ,
  .c-ehkLfE-ihZJXZy-css,
  .c-dcltaJ-gKdpob-type-FULL_HEIGHT,
  .c-iQreDs,
  .c-eSwFRQ,
  .c-lkZNlx {
    background-color: var(--bg)!important;
  }

  .c-bvyfdZ-frHdsz-cv:hover,
    .c-bvyfdZ-frHdsz-cv:focus,
    .c-bvyfdZ-eIIZQy-cv:hover,
    .c-bvyfdZ-eIIZQy-cv:focus,
    .c-foJpPP:hover,
    .c-foJpPP:focus,
    .c-jYivmg:hover,
    .c-jYivmg:focus,
    .c-PJLV-foJpPP-isGif-false:hover,
    .c-PJLV-foJpPP-isGif-false:focus,
    .c-gaARkn:hover,
    .c-bqseKE-fassuZ-isActive-true,
    .c-bqseKE:hover,
    .c-hjFsWX:hover {
        background-color: var(--bgh);
    }

  h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    .c-JImiD,
    .c-jWeVSF,
    .c-scakK-gJsJfa-isPaymentFor-true,
    .c-cxwkcV,
    #__next>main>div>div>div>div>article>div.c-gDbqah>div>p,
    #__next>main>div>div>div>div>article>div.c-gDbqah>div>ul,
    #__next>header>div>div>p,
    .c-kBGsKM,
    .c-fkMsLp,
    .c-bqseKE,
    .c-iiXAeA,
    .c-koQOBH,
    .c-gdrTBt,
    .c-iwkqjv,
    .c-jnGYto[data-state="active"],
    .c-hdSvyt,
    .c-jMcrAu,
    .c-dNEurs,
    .c-gbqkly,
    .c-klihBh,
    .c-hamjEZ,
    .c-cvBxmq,
    .c-gICkau,
    .c-lcfdHo,
    .c-jZGZAW,
    .c-hyymYW,
    .c-kVuCiP,
    .c-fqZbpj .ProseMirror>p,
    .c-fqZbpj .node-promotionBlock,
    .c-fqZbpj .node-image,
    .c-fqZbpj .node-repostBlock,
    .c-fqZbpj .node-embedlyBlock,
    .c-ipSArU,
    .c-hnYCam,
    .c-hbaUTP,
    .c-dBPcrW,
    .c-hIRgvj,
    .c-bdPRaD,
    .c-dwcZjF,
    .c-dAqCK,
    .c-jfPATj,
    .c-fjcEhn,
    .c-TZEZD,
    .c-gTXyln,
    svg {
        color: var(--text);
        stroke: var(--text);
    }

    .c-lnROij,
    .c-hTVvBg,
    .c-ijznZv:hover,
    .c-ijznZv:focus,
    .c-furorF:hover,
    .c-furorF:focus,
    .c-iQSkIN:hover,
    .c-iQSkIN:focus,
    .c-dOFLJs,
    .c-fXyPqv,
    .c-bvyfdZ,
    .c-jYivmg,
    .c-eKlmUN,
    .c-GulhQ,
    .c-bITVNu,
    .c-diTqIq-kdaqIN-isActive-true,
    .c-jNDCqQ,
    .c-fOFkuT,
    .c-jaySyu,
    .modal-content,
    #__next>main>div>div>div>div.c-gHVokN>div>div.c-cwekIR {
        background: var(--bga);
    }

    .c-eSwFRQ, .c-cqFmmL, .c-jnGYto-djWwnA-activeTab-true {
        color: var(--white);
    }

.c-bdPRaD {
    min-width: 85px;
}

[data-spotim-module]:not([data-ready="true"]) {
    padding: 0 15px;
}

.ptr {
    z-index: 99;
}

.c-gHVokN {
    z-index: 1;
}

div[data-radix-popper-content-wrapper] {
    z-index: 999 !important;
}

@media only screen and (min-width: 621px) {

    .c-bvyfdZ,
    .c-GulhQ,
    .c-jYivmg {
        border-radius: 1.5rem;
    }

    .c-bITVNu {
        border-radius: 0 0 1.5rem 1.5rem;
    }
}

@media only screen and (min-width: 1135px) {
    #__next>main>div>div>div>div.c-gHVokN {
        top: 13.5rem;
        max-width: 1135px;
    }

    #__next>main>div>div>div>div.c-gHVokN>div>div.c-cwekIR {
        flex-direction: column;
        max-width: 200px;
        border-radius: 1.5rem;
    }

    #__next>main>div>div>div>div.c-gHVokN>div.c-ioOOaa {
        margin-right: -350px;
    }

    #__next>main>div>div>div>div.c-gHVokN.c-gHVokN-fXbMiE-isOutOfView-true {
        transform: translate(-50%, 0)
    }

    #__next>main>div>div>div>div.ptr {
        margin-top: -18.5rem;
    }

    #__next>main>div>div>div>div>div.ptr__children {
        margin-top: 20rem;
    }
}

article>div.c-kHiOPw>button.c-bdPRaD.c-bdPRaD-eGcsjJ-liked-true>svg {
    stroke: var(--colors-lifespirit400);
    fill: var(--colors-lifespirit400);
    color: var(--colors-lifespirit400);
}

.c-bVhrlL {
    z-index: 999;
}

.modal {
    display: none;
    position: fixed;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    color: var(--text);
}

.inner-content {
    padding-top: 20px;
}

.modal-content {
    margin: auto;
    padding: 20px;
    border-radius: 1.5rem;
    max-width: 545px;
    height: 550px;
}

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.a-set {
    position: fixed;
    top: 7.6rem;
    right: 1.6rem;
    z-index: 999;
}

.access-switch {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  .access-label {
    cursor: pointer;
    text-indent: -9999px;
    width: 52px;
    height: 27px;
    background: grey;
    float: right;
    border-radius: 100px;
    position: relative;
  }
  .access-label::after{
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background-color: #688ffc;
    border-radius: 90px;
    transition: 0.3s;
  }
  .access-switch:checked + .access-label {
    background-color: #000;
  }
  .access-switch:checked + .access-label::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
  .access-label:active:after {
    width: 45px;
  }
  .c-bVhrlL {
    align-items: center;
    background-color: var(--colors-lifespirit300c);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 6.4rem;
    justify-content: center;
    width: 6.4rem;
  }
`;

document.head.appendChild(style);