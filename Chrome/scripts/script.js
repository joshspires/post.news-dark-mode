/* Quick Compose modal logic
window.onload = function () {
    var modal = document.getElementById("quickcompose_modal");
    var btn = document.getElementById("quickcompose");
    var a = document.getElementsByClassName("close")[0];
    var ifr = document.getElementById('qcm')[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    a.onclick = function () {
        modal.style.display = "none";
        ifr.src = ifr.src;
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/* Quick Compose modal button
const quickcompose = document.createElement('a');
quickcompose.setAttribute("aria-label", "Compose a Post");
quickcompose.setAttribute("class", "c-bVhrlL");
quickcompose.setAttribute("id", "quickcompose");
quickcompose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--colors-spidertooth000)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>'

document.body.appendChild(quickcompose);

/* Quick Compose modal
const quickcompose_modal = document.createElement('div');
quickcompose_modal.setAttribute("class", "modal");
quickcompose_modal.setAttribute("id", "quickcompose_modal")
quickcompose_modal.innerHTML = '<div class="modal-content"><a class="close">&times;</a><iframe id="qcm" style="min-width:500px;height:95%;" src="https://post.news/composer"></iframe></div>'

document.body.appendChild(quickcompose_modal);

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

button,
.c-gkIwjq,
.c-bqseKE,
#__next>main>div>div>div>div.c-jaySyu>div.c-eNYEDZ>a,
#__next>main>div>div>div>div.ptr__children>div.c-fSoVva>div.c-jaySyu>div.c-eNYEDZ>a>span>img {
    cursor: pointer;
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

@media only screen and (max-width: 600px) {

    .modal-content {
        width: 100%;
        height: 100%;
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
        background-color: var(--colors-spidertooth800c) !important;
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
}

.modal-content {
    background-color: #000;
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

@media only screen and (max-width: 1134px) and (prefers-color-scheme: dark) {
    .c-ilLoxd, .c-gHVokN, .c-cwekIR {
        background-color: var(--colors-spidertooth800c) !important;
    }
}

@media (prefers-color-scheme: dark) {

    .c-ilLoxd {
        background-color: var(--colors-spidertooth1000c);
    }

    .c-dVvJMv,
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
    .c-cwekIR,
    .c-iQreDs {
        background-color: var(--colors-spidertooth1000c);
    }

    body {
        background-color: var(--colors-spidertooth1000c) !important;
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
    .c-gTXyln {
        color: var(--colors-spidertooth000c)
    }

    .c-jWeVSF-fIcCkj-positive-true {
        color: var(--colors-flutterleaf400c);
    }

    a {
        color: #bacdff;
    }

    svg {
        stroke: var(--colors-spidertooth000c);
        color: var(--colors-spidertooth000c);
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
    .c-fOFkuT {
        background-color: var(--colors-spidertooth800c);
    }

    .c-cZoNsg {
        background-image: radial-gradient(147.9% 80.4% at 50% 4.4%, #435485 0%, #5c7bd3 66.41%, #344c8f 100%);
    }

    .c-FHWXc-iypSxu-hierarchy-SECONDARY {
        border-color: var(--colors-spidertooth000c);
        color: var(--colors-spidertooth000c);
    }

    .c-iMmbuZ,
    .c-jaySyu,
    .c-lkZNlx,
    .c-hAHMGt-gKdpob-type-FULL_HEIGHT {
        background-color: var(--colors-spidertooth1000c);
        color: var(--colors-spidertooth000c);
        border-bottom: 0.1rem solid var(--colors-spidertooth1000c);
    }

    #__next>header>div>ul>li.c-eBYgRj>a>div>span>img,
    #__next>header>div>div>ul>div>div>span:nth-child(1)>button>span>img,
    #__next>header>div>ul>li.c-ibzkWc>div>div>span:nth-child(1)>button>span>img {
        filter: brightness(5)
    }

    .c-jaySyu {
        background-color: var(--colors-spidertooth800c);
        border-bottom: 0.1rem solid var(--colors-spidertooth800c);
    }

    .c-jnGYto {
        color: var(--colors-spidertooth400c);
    }

    .c-hxkEWD-ibfYWt-css {
        border: 0.4rem solid var(--colors-spidertooth1000c);
    }

    img[src="/svgs/twitterInactive.svg"],
    img[src="/svgs/facebookInactive.svg"],
    img[src="/svgs/instagramInactive.svg"],
    img[src="/svgs/linkedinInactive.svg"],
    img[src="/svgs/tikTokInactive.svg"],
    img[src="/svgs/mastodonInactive.svg"],
    img[src="/svgs/redditInactive.svg"],
    img[src="/svgs/substackInactive.svg"],
    img[src="/svgs/youtubeInactive.svg"],
    img[src="/svgs/mailInactive.svg"],
    img[src="/svgs/webInactive.svg"] {
        filter: invert(1)
    }

    #__next>main>div>div>div>div.ptr__children>div.c-fSoVva>div.c-jaySyu>div.c-iNeJhE>div.c-jpYNHp>button.c-OOpzv>span>img {
        filter: brightness(5)
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
        background-color: #1a2230;
    }

    .c-TZEZD::before {
        background-color: var(--colors-spidertooth000c);
    }

    .c-hbaUTP-gmqXFB-warn-true {
        color: red;
    }

    article>div.c-kHiOPw>button:nth-child(3)>span:nth-child(1)>img {
        filter: brightness(5)
    }

    article>div.c-kHiOPw>button:hover,
    article>div.c-fIaqhA>div>div.c-ibPCDO>button:hover,
    span.c-FHWXc-ihaxWh-css:hover {
        border-radius: 4rem;
        background-color: var(--colors-spidertooth800c);
    }

    #__next>main>div>div>div>article>div.c-kHiOPw>button:hover {
        border-radius: 4rem;
        background-color: var(--colors-spidertooth700c);
    }

    .c-cMRplQ {
        border-bottom: 1px solid var(--colors-spidertooth400c)
    }

    .c-eSwFRQ {
        color: var(--colors-spidertooth000c);
        background-color: var(--colors-spidertooth800c);
    }

    .c-gkIwjq,
    .c-gkIwjq:hover,
    .c-gkIwjq:active {
        background: var(--colors-spidertooth800c);
        color: var(--colors-spidertooth000c);
    }

    .c-FHWXc-zPonf-hierarchy-PRIMARY_LIGHT {
        background-color: var(--colors-spidertooth800c);
        color: var(--colors-spidertooth000c);
    }

    .c-hOvNzj {
        background-color: var(--colors-spidertooth800c);
        border-bottom: 0.1rem var(--colors-spidertooth800c) solid;
    }

    #__next>main>div>div>div>div>div.ptr__children>div:nth-child(2)>div {
        filter: invert(1) hue-rotate(180deg) contrast(0.5);
    }

    .c-dnbfWL,
    .c-eKlmUN {
        border-bottom: 0.1rem solid var(--colors-spidertooth1000c);
    }

    li::marker {
        color: #ffffff;
    }
}
`;

document.head.appendChild(style);