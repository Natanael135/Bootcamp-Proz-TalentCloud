def main():
    while True:
        nome = input("Digite seu nome completo: ")

        try:
            ano_nascimento = int(input("Digite seu ano de nascimento (entre 1922 e 2021): "))
            if 1922 <= ano_nascimento <= 2021:
                idade = 2022 - ano_nascimento
                print(f"{nome}, voce completou ou completara {idade} anos em 2022.")
                break
            else:
                print("Ano invalido. Tente novamente.")
        except ValueError:
            print("Entrada invalida. Por favor, insira um numero valido.")

if __name__ == "__main__":
    main()
