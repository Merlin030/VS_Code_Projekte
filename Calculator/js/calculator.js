var helper = '';
function adde(value) {
    var ausgabe = document.getElementById('ausgabe');
    if (ausgabe.value == '0' && value !== '.') {
        ausgabe.value = value;
    } else if (value == '.' && ausgabe.value.indexOf('.')==-1)
    { 
        ausgabe.value += value;
    }
    else if (value == '+'|| value == '-'|| value == '/'|| value == '*'){
        helper = ausgabe.value + value;
        ausgabe.value = '0';

    }


    else if (value !== '.') { 
        ausgabe.value += value;
    }
}

function c() {
    document.getElementById('ausgabe').value = '0';
    helper ='';
}

function ergebnis() {
    var ausgabe = document.getElementById('ausgabe');
         ausgabe.value = eval(helper+ausgabe.value);
    }
