export const getSelectOptions = selectElement => {
    const answer = [];
    const options = selectElement.options;
    const n = options.length;
    for (let i = 0; i < n; i++) {
        if (options[i].value) {
            answer.push(options[i]);
        }
    }
    return answer;
}