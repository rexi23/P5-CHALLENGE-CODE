
function loopDePares(n) {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
        if ((n + i) % 2 === 0) {
            console.log(n + i + " Es par.");
        }
    }
}

function loopDeImpares(n, p) {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
        if ((n + i) % 2 !== 0) {
            console.log(p);
        }
    }
}

function sumatoria(n) {
    let suma = 0
    for (let i = 0; i <= n; i++) {
        suma = suma + i
    }
    return suma
}

function nuevoArreglo(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array
}

function split(s) {
    let string = [];
    for (let i = 0; i < s.length; i++) {
        string.push(s[i]);
    }
    return string
}

function middleCharacter(s) {
    if (s.length % 2 === 0) {
        return s[(s.length / 2) - 1] + s[s.length / 2];
    } else {
        return s[Math.floor(s.length / 2)];
    }
}

function moveZeros(a) {
    let ceros = 0;
    let nuevoArray = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            ceros = ceros + 1;
        } else {
            nuevoArray.push(a[i])
        }

    }
    for (let i = 0; i < ceros; i++) {
        nuevoArray.push(0)
    }
    return nuevoArray

}

function arrayHandler(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        console.log(`Yo soy ${s1[i]} y yo soy ${s2[i]}`);
    }
}

function mezclarArreglos(s1, s2) {
    let nuevoArray = [];
    if (s1.length >= s2.length) {
        for (let i = 0; i < s1.length; i++) {
            nuevoArray.push(s1[i], s2[i]);
        }
    } else if (s2.length >= s1.length) {
        for (let i = 0; i < s2.length; i++) {
            nuevoArray.push(s1[i], s2[i]);
        }
    }
    console.log(nuevoArray);
}


function minSum(a) {
    let b = a.sort();
    return b[0] + b[1];
}

function arregloDeObjetos(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        o =
            o["valor"] = i
        array.push({ "valor": i })
    }
    return array;
}

function arregloDeObjetos2(n, p) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        o = {};
        o[p] = i;
        array.push(o);
    }
    return array;
}

function oneProperty(arrayDeObjeto, string) {
    let nuevoArray = [];
    for (let i = 0; i < arrayDeObjeto.length; i++) {
        o = {};
        o[string] = arrayDeObjeto[i][string];
        nuevoArray.push(o)
    }
    return nuevoArray;
}

function warWords(p1, p2) {
    var abc = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
    let sumaP1 = 0;
    let sumaP2 = 0;
    for (let i = 0; i < p1.length; i++) {
        let letra = p1[i];
        sumaP1 = sumaP1 + abc[letra];
    }
    for (let i = 0; i < p2.length; i++) {
        let letra = p2[i];
        sumaP2 = sumaP2 + abc[letra];
    }
    if (sumaP1 > sumaP2) {
        return p1
    } return p2
}

function validarPrefijo(n) {
    var prefijos = [54, 55, 56, 57, 58]
    var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
    let paisSegunPrefijo = {};
    for (let i = 0; i < prefijos.length; i++) {
        paisSegunPrefijo[prefijos[i]] = paises[i];
    }
    let prefijoDado = n[0] + n[1]
    if (paisSegunPrefijo[prefijoDado] !== undefined) {
        return "Este prefijo pertenece a " + paisSegunPrefijo[prefijoDado]
    } else {
        return "Este prefijo no pertenece a nuestros paises."
    }

}

function reverseKeys(obj) {
    if (typeof obj !== 'object') {
        return "Error, input cant be a " + typeof obj
    } else {
        let keysObjetos = Object.keys(obj);
        let nuevoObjeto = {};
        for (let i = 0; i < keysObjetos.length; i++) {
            nuevoObjeto[obj[keysObjetos[i]]] = keysObjetos[i]
        }
    }
}

function palindromo(p) {
    let minuscula = p.toLowerCase();
    let pSplit = split(minuscula);
    let arrayReversa = [];

    for (let i = 0; i < pSplit.length; i++) {
        arrayReversa.unshift(pSplit[i])

    }
    for (let i = 0; i < pSplit.length; i++) {
        if (arrayReversa[i] !== pSplit[i]) {
            return false
        }
    }
    return true
}

function rotar(array, n) {
    let arrayRotacion = [];
    arrayRotacion = array.slice(-n);
    for (let i = 0; i < (array.length - n); i++) {
        arrayRotacion.push(array[i])
    }
    return arrayRotacion;
}

function consecutivosSimilares(string) {
    let contador = 0;
    stringSplit = split(string);
    for (let i=0; i<stringSplit.length; i++) {
        if(stringSplit[i] === stringSplit[i+1]) {
            contador = contador + 1
        }
    }
    return contador
}
