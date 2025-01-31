Feature: Calcular o resultado com base em 2 numeros de 0 a 9

    Scenario: Somar Dois Numeros
        Given que a calculadora esta aberta
        When clico no botao "4"
        And clico no botao Somar
        And clico no botao "6"
        And clico no botao igual
        Then exibe o resultado com "10"