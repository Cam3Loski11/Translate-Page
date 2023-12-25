export function getOptions (originalLang, translateLang, text) {
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