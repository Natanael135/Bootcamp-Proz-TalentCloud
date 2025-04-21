# Entidade com Atributos Diversos

Exemplo de entidade no projeto conceitual de banco de dados:

## Entidade: Pessoa

- **CPF** – Simples  
- **Nome (PrimeiroNome, Sobrenome)** – Composto  
- **Telefone** – Multivalorado  

```
Pessoa (
  CPF,
  Nome (PrimeiroNome, Sobrenome),
  {Telefone}
)
```