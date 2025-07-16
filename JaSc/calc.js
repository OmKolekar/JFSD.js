let textValue = " ";



function changeTextValue(userValue) {
    if (userValue == "=") {
        textValue = eval(textValue);
        document.querySelector('#display').value = textValue;

    } else if ("0123456789.".includes(userValue)) {
        textValue += userValue;
        document.querySelector('#display').value = textValue;
    } else if ("+-*/".includes(userValue)) {
        textValue += userValue;
        document.querySelector('#display').value = textValue;
    } else if (userValue === "C") {
        textValue = "";
        document.querySelector('#display').value = textValue;
    } else {
        textValue = textValue + userValue;
        document.querySeletor("#display").value = textValue;
    }
};