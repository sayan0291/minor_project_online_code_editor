const languageVersions = {
    javascript: "18.15.0",
    python: "3.10.0",
    java: "15.0.2",
    cpp: "10.2.0",
    c: "10.2.0",
    ruby: "3.2.2",
    go: "1.21.0",
    php: "8.2.3",
    kotlin: "1.8.20"
};

export async function runCode(code, language) {
    const version = languageVersions[language];
    try {
        const response = await fetch("https://emkc.org/api/v2/piston/execute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                language: language,
                version: version,
                files: [{ name: "main", content: code }]
            })
        });

        const data = await response.json();

        const output = data.run.output || "";

        // Separate errors if needed
        const lines = output.split("\n");
        const errors = lines.filter(line => line.toLowerCase().includes("error"));
        const normalOutput = lines.filter(line => !line.toLowerCase().includes("error"));

        return {
            output: normalOutput.join("\n"),
            errors: errors.join("\n")
        };
    } catch (err) {
        return { output: "", errors: err.message };
    }
}


