# Operações Relacionais com Tabela ALUNO

## Tabela ALUNO (dados originais)

| P.NOME     | U.NOME   | MATRÍCULA | SÉRIE  | DISCIPLINA | NOTA |
| ---------- | -------- | --------- | ------ | ---------- | ---- |
| Vitória    | Claudino | 5542      | 2º ano | Matemática | 7,0  |
| Luiz       | Silva    | 6215      | 1º ano | Português  | 8,0  |
| André      | Carvalho | 4521      | 3º ano | Matemática | 9,5  |
| Alan       | Vilela   | 3285      | 1º ano | História   | 8,0  |
| Figueiredo | Santos   | 4598      | 2º ano | Geografia  | 9,0  |

---

## SELECT – Alunos aprovados (nota > 7,0)

`σ NOTA > 7,0 (ALUNO)`

| P.NOME     | U.NOME   | MATRÍCULA | SÉRIE  | DISCIPLINA | NOTA |
| ---------- | -------- | --------- | ------ | ---------- | ---- |
| Luiz       | Silva    | 6215      | 1º ano | Português  | 8,0  |
| André      | Carvalho | 4521      | 3º ano | Matemática | 9,5  |
| Alan       | Vilela   | 3285      | 1º ano | História   | 8,0  |
| Figueiredo | Santos   | 4598      | 2º ano | Geografia  | 9,0  |

---

## SELECT – Alunos do 1º ano com nota ≥ 8,0

`σ SÉRIE = '1º ano' ∧ NOTA ≥ 8,0 (ALUNO)`

| P.NOME | U.NOME | MATRÍCULA | SÉRIE  | DISCIPLINA | NOTA |
|--------|--------|-----------|--------|------------|------|
| Luiz   | Silva  | 6215      | 1º ano | Português  | 8,0  |
| Alan   | Vilela | 3285      | 1º ano | História   | 8,0  |

---

## PROJECT – Apenas nomes e notas dos alunos

`π P.NOME, NOTA (ALUNO)`

| P.NOME     | NOTA |
|------------|------|
| Vitória    | 7,0  |
| Luiz       | 8,0  |
| André      | 9,5  |
| Alan       | 8,0  |
| Figueiredo | 9,0  |

---

## Tabela PROFESSOR

| P.NOME  | U.NOME  |
|---------|---------|
| Carla   | Santos  |
| Alan    | Vilela  |
| Pedro   | Lima    |

---

## Tabela ALUNO (reduzida)

| P.NOME     | U.NOME   |
|------------|----------|
| Vitória    | Claudino |
| Luiz       | Silva    |
| André      | Carvalho |
| Alan       | Vilela   |
| Figueiredo | Santos   |

---

## UNIÃO – ALUNO ∪ PROFESSOR

`ALUNO(P.NOME, U.NOME) ∪ PROFESSOR(P.NOME, U.NOME)`

| P.NOME     | U.NOME   |
|------------|----------|
| Vitória    | Claudino |
| Luiz       | Silva    |
| André      | Carvalho |
| Alan       | Vilela   |
| Figueiredo | Santos   |
| Carla      | Santos   |
| Pedro      | Lima     |

---

## INTERSECÇÃO – ALUNO ∩ PROFESSOR

`ALUNO(P.NOME, U.NOME) ∩ PROFESSOR(P.NOME, U.NOME)`

| P.NOME | U.NOME |
|--------|--------|
| Alan   | Vilela |

---

## DIFERENÇA – ALUNO - PROFESSOR

`ALUNO(P.NOME, U.NOME) − PROFESSOR(P.NOME, U.NOME)`

| P.NOME     | U.NOME   |
|------------|----------|
| Vitória    | Claudino |
| Luiz       | Silva    |
| André      | Carvalho |
| Figueiredo | Santos   |


