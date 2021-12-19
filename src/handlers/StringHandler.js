export const format = (string, data) => {
    return string.replace(/{([^{}]*)}/g,
        function (template, key) {
            const value = data[key];
            return typeof value === "string" || typeof value === "number" ? value : template;
        }
    );
}

export const formatLink = (string, data) => {
    return string.replace(/:[a-zA-Z0-9-_]+[^a-zA-Z0-9-_\\/]?/g,
        (template, key) => {
            const value = data[template.substr(1)];
            return typeof value === "string" || typeof value === "number" ? value : template;
        }
    );
}