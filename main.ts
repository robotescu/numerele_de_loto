basic.showString("Apasa A")
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let i: number;
    let numar: number;
    let numerele_castigatoare = []
    //  Parcurgem lista
    for (i = 0; i < 6; i++) {
        numar = randint(1, 49)
        //  generam un numar intre 1 si 49
        //  Verificam daca numarul generat exista deja in numerele_castigatoare
        while (numerele_castigatoare.indexOf(numar) >= 0) {
            numar = randint(1, 49)
        }
        //  daca numarul exista in lista, genereaza unul nou
        //  Iesim din while cand numarul generat nu e in lista
        numerele_castigatoare.push(numar)
    }
    basic.showString("Castigatorare:")
    //  Parcurg lista si afisez fiecare numar
    for (i = 0; i < 6; i++) {
        basic.pause(500)
        basic.showNumber(numerele_castigatoare[i])
    }
})
