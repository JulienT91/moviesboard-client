const DateFunction = {

    DateForm(string) {
        const date = new Date(string);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${("0" + day).slice(-2)}/${("0" + month).slice(-2)}/${year}`;
    }
};

export default DateFunction;