Feature: Calcular o resultado com base em 2 numeros de 0 a 9

    Scenario: Somar Dois Numeros
        Given que a calculadora esta aberta
        When clico no botao "4"
        And clico no botao Somar
        And clico no botao "6"
        And clico no botao igual
        Then exibe o resultado como "10"

    Scenario: Subtrair Dois Numeros
        Given que a calculadora esta aberta
        When clico no botao "5"
        And clico no botao Subtrair
        And clico no botao "2"
        And clico no botao igual
        Then exibe o resultado como "3"

    Scenario: Multiplicar Dois Numeros
        Given que a calculadora esta aberta
        When clico no botao "4"
        And clico no botao Multiplicar
        And clico no botao "3"
        And clico no botao igual
        Then exibe o resultado como "12"

    Scenario: Dividir Dois Numeros
        Given que a calculadora esta aberta
        When clico no botao "8"
        And clico no botao Dividir
        And clico no botao "2"
        And clico no botao igual
        Then exibe o resultado como "4"