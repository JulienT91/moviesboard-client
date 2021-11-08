const DateFunction = {

    DateForm(string) {
        const dateAndHour = new Date(string).toLocaleString('fr-FR').slice(0, -3).replace(/:/g, "h");
        return dateAndHour;
    }

};

export default DateFunction;