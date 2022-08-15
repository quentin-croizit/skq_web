reponses_qcm = document.getElementsByClassName("reponses_list");
reponse_simple = document.getElementsByClassName("reponse_simple");
reponse_paragraphe = document.getElementsByClassName("reponse_textblock");
reponse_image = document.getElementsByClassName("reponse_image");

function reponse_isImage() {
    reponses_qcm[0].classList.add('hidden');
    reponse_simple[0].classList.add('hidden');
    reponse_paragraphe[0].classList.add('hidden');
    reponse_image[0].classList.remove('hidden');
}

function reponse_isParagraphe() {
    reponses_qcm[0].classList.add('hidden');
    reponse_simple[0].classList.add('hidden');
    reponse_paragraphe[0].classList.remove('hidden');
    reponse_image[0].classList.add('hidden');
}

function reponse_isShort() {
    reponses_qcm[0].classList.add('hidden');
    reponse_simple[0].classList.remove('hidden');
    reponse_paragraphe[0].classList.add('hidden');
    reponse_image[0].classList.add('hidden');
}

function reponse_isQCM() {
    reponses_qcm[0].classList.remove('hidden');
    reponse_simple[0].classList.add('hidden');
    reponse_paragraphe[0].classList.add('hidden');
    reponse_image[0].classList.add('hidden');
}

body.ontouchmove = function (e) { e.preventDefault() };