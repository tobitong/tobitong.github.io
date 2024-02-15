function calculate() {
    let s1 = document.getElementById("temperature-unit-1").value;
    let s2 = document.getElementById("temperature-unit-2").value;
    let value = parseInt(document.getElementById("temperature-value").value);

    let result = 0;
    if(s1==s2) {
        result = value;
    }

    else if(s1=="celsius" && s2=="fahrenheit") {
        result = (value * 9 / 5) + 32;
    }

    else if(s1=="celsius" && s2=="kelvin") {
        result = (value + 273);
    }

    else if(s1=="celsius" && s2=="reamur") {
        result = (value * 4 / 5);
    }

    else if(s1=="fahrenheit" && s2=="celsius") {
        result = (value - 32) * 5 / 9;
    }

    else if(s1=="fahrenheit" && s2=="reamur") {
        result = (value - 32) * 4 / 9;
    }

    else if(s1=="fahrenheit" && s2=="kelvin") {
        result = (value - 32) * 5 / 9 + 273;
    }

    else if(s1=="kelvin" && s2=="celsius") {
        result = (value - 273);
    }

    else if(s1=="kelvin" && s2=="fahrenheit") {
        result = (value - 273) * 9 / 5 + 32;
    }

    else if(s1=="kelvin" && s2=="reamur") {
        result = (value - 273) * 4 / 5;
    }

    else if(s1=="reamur" && s2=="celsius") {
        result = (value * 5 / 4);
    }

    else if(s1=="reamur" && s2=="fahrenheit") {
        result = (value * 9 / 4) + 32;
    }

    else if(s1=="reamur" && s2=="kelvin") {
        result = (value * 5 / 4) + 273;
    }

    document.getElementById("result").innerText = result;
}