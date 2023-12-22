const checkboxes = document.querySelectorAll('.flag-checkbox');
const resultCheckboxes = document.querySelectorAll('.flag-result');
const translatedText = document.querySelector('.text-space')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(cb => {
            if (cb !== this) {
                cb.checked = false;
            }
        });
    });
});
resultCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        resultCheckboxes.forEach(cb => {
            if (cb !== this) {
                cb.checked = false;
            }
        });
    });
});
const submitBtn = document.querySelector('.submit-button');
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

    try {
        const response = await fetch('https://text-translator2.p.rapidapi.com/translate', options);

        if (response.ok) {
            const dataNeeded = await response.json();
            translatedText.innerText = dataNeeded.data.translatedText;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
});

const getOptions = (originalLang, translateLang, text) => {
    return {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'ed516d4021mshad2a0820c6d84b1p177f23jsn6af057d7ad5d',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: originalLang,
            target_language: translateLang,
            text: text
        })
    };
}

// async function fetchTranslation(urlAPI, options) {
//     const response = await fetch(urlAPI, options);
// 	const result = await response.text();
//     return result
// }


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }