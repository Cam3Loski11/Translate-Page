import { setupCheckboxes } from './checkboxes.mjs';
import { performTranslation } from './translate.mjs';
import { getOptions } from './options.mjs';

const checkboxes = document.querySelectorAll('.flag-checkbox');
const resultCheckboxes = document.querySelectorAll('.flag-result');
const translatedText = document.querySelector('.text-space')
const submitBtn = document.querySelector('.submit-button');

setupCheckboxes(checkboxes);
setupCheckboxes(resultCheckboxes);

submitBtn.addEventListener('click', async () => {
    const idiomaSeleccionado = document.querySelector('.flag-checkbox[name="language"]:checked');
    const idiomaATraducir = document.querySelector('.flag-result[name="language"]:checked');
    const textoATraducir = document.getElementById('textToTranslate');

    if (!idiomaSeleccionado || !idiomaATraducir) {
        console.error('¡Debes seleccionar un idioma para la traducción!');
        return;
    }
    if (idiomaSeleccionado.value === idiomaATraducir.value) {
        alert('No puedes elegir dos idiomas iguales')
        return
    }
    const options = getOptions(idiomaSeleccionado.value, idiomaATraducir.value, textoATraducir.value)
    await performTranslation(options, translatedText);
});