export async function performTranslation(options, translatedTextElement) {
    try {
        const response = await fetch('https://text-translator2.p.rapidapi.com/translate', options);

        if (response.ok) {
            const dataNeeded = await response.json();
            translatedTextElement.innerText = dataNeeded.data.translatedText;
        } else {
            console.error('Error al realizar la solicitud:', response.statusText);
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
}