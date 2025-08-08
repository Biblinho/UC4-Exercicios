
let nome ={(
    {"nome": "Frodo", "raca": "Hobbit"},
    {"nome": "Sam", "raca": "Hobbit"},
    {"nome": "Merry", "raca": "Hobbit"},
    {"nome": "Pippin", "raca": "Hobbit"},
    {"nome": "Aragorn", "raca": "Humano"},
    {"nome": "Gandalf", "raca": "Mago"},
    {"nome": "Legolas", "raca": "Elfo"},
    {"nome": "Gimli", "raca": "Anão"},
    {"nome": "Boromir", "raca": "Humano"})

}

for i in range(len(membros)):{
    if membros [i]["raca"] == "Hobbit": 
        print(membros[i]["nome"])
}