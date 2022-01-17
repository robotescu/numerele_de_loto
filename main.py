basic.show_string("Apasa A")
def on_button_pressed_a():
    numerele_castigatoare = []        
    for i in range (0,6):
        numar = randint(0, 49)
        while numar in numerele_castigatoare:
            numar = randint(0, 49)
        numerele_castigatoare.push(numar)  
    basic.show_string("Castigatorare:")
    for i in range(0,6):
        basic.pause(500)
        basic.show_number(numerele_castigatoare[i])
input.on_button_pressed(Button.A, on_button_pressed_a)



