function getPaginationButtons(data, per_page = 5) {
    const howManyPages = Math.ceil(data.length / per_page);
    let buttonsText = [];
    for (let i = 0; i < howManyPages; i++) {
        buttonsText.push(i + 1);
    }
    return buttonsText;
}

export default getPaginationButtons;
