basic.showString("Apasa A")
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let i: number;
    let numar: number;
    let numerele_castigatoare = []
    for (i = 0; i < 6; i++) {
        numar = randint(0, 49)
        while (numerele_castigatoare.indexOf(numar) >= 0) {
            numar = randint(0, 49)
        }
        numerele_castigatoare.push(numar)
    }
    basic.showString("Castigatorare:")
    for (i = 0; i < 6; i++) {
        basic.pause(500)
        basic.showNumber(numerele_castigatoare[i])
    }
})
