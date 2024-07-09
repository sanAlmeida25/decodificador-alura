﻿# decodificador-alura
# Projeto de Criptografia e Descriptografia

Bem-vindo ao Projeto de Criptografia e Descriptografia! Este projeto permite criptografar e descriptografar texto usando um mapa de substituição predefinido em JavaScript. É uma aplicação simples,
mas funcional, que pode ser útil para trocar mensagens secretas de forma divertida.

## Funcionalidades

- **Criptografar:** Converte um texto inserido para sua versão criptografada com base no mapa de criptografia.
- **Descriptografar:** Converte um texto criptografado de volta para sua forma original usando o mapa inverso.
- **Copiar para Área de Transferência:** Permite copiar o texto criptografado ou descriptografado com um clique.

## Requisitos

- Funciona apenas com letras minúsculas.
- Não são aceitas letras com acentos ou caracteres especiais.

## Mapa de Criptografia

O mapa de criptografia usado neste projeto é o seguinte:

```javascript
const mapaCriptografia = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};
Como Usar
1-Insira o texto na área designada.
2-Escolha entre "Criptografar" ou "Descriptografar".
3-Veja o resultado na tela e copie se necessário
