def calculadora():
    while True:
        print("\nEscolha uma operacao:")
        print("1: Soma")
        print("2: Subtracao")
        print("3: Multiplicacao")
        print("4: Divisao")
        print("0: Sair")

        escolha = input("Digite o numero da operacao: ")

        if escolha == "0":
            print("Saindo do programa...")
            break

        if escolha in ["1", "2", "3", "4"]:
            num1 = float(input("Digite o primeiro numero: "))
            num2 = float(input("Digite o segundo numero: "))

            if escolha == "1":
                print(f"Resultado: {num1 + num2}")
            elif escolha == "2":
                print(f"Resultado: {num1 - num2}")
            elif escolha == "3":
                print(f"Resultado: {num1 * num2}")
            elif escolha == "4":
                print("Erro: Divisao por zero nao eh permitida." if num2 == 0 else f"Resultado: {num1 / num2}")
        else:
            print("Essa opcao nao existe.")

if True:
    calculadora()
