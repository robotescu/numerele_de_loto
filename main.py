basic.show_string("Apasa A")
def on_button_pressed_a():
    numerele_castigatoare = []        
    # Parcurgem lista
    for i in range (0,6):
        numar = randint(1, 49) # generam un numar intre 1 si 49
        # Verificam daca numarul generat exista deja in numerele_castigatoare
        while numar in numerele_castigatoare:
            numar = randint(1, 49) # daca numarul exista in lista, genereaza unul nou
        # Iesim din while cand numarul generat nu e in lista
        numerele_castigatoare.push(numar)  
    basic.show_string("Castigatorare:")
    # Parcurg lista si afisez fiecare numar
    for i in range(0,6):
        basic.pause(500)
        basic.show_number(numerele_castigatoare[i])
input.on_button_pressed(Button.A, on_button_pressed_a)



