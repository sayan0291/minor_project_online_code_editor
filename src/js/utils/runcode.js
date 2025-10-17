const languagecode = {
    javascript: "93",
    python: "109",
    java: "91",
    cpp: "54",
    c: "50",
    ruby: "72",
    php: "98",
    kotlin: "111"
};

export async function runCode(code, language) {
    const language_code = languagecode[language];
    console.log(language);
    
    try {
        const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", {
            method: "POST",
            headers: { "Content-Type": "application/json",
                "x-rapidapi-key": "e0b5a72f50msh41e8e415b3e3d41p19dd15jsn52aa5e4144c8",
                "x-rapid-host": "judge0-ce.p.rapidapi.com"
            },
            body: JSON.stringify({
                language_id: language_code,
                source_code: code
            })
        });

        const data = await response.json();
        
        return data;
        
    } catch (err) {
        return { output: "", errors: err.message };
    }
}


