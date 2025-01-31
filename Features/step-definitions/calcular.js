const { Given, When, Then } = require("@wdio/cucumber-framework");

// declaracao do elemento do display que sera visivel em 2 blocos


Given(/^que a calculadora esta aberta$/, async () => {

    const display = '//android.widget.EditText[@content-desc="No formula"]'
    // validar se carregou o display de resultado
    await $(display).waitForDisplayed()
    // validar se o display está exibindo o número 0
    // expect(await $(display).getText().toEqual("0"))
})

When(/^clico no botao "([^"]*)?"$/, async (numero) => {
    const buttonNumber = `//android.widget.ImageButton[@content-desc="${numero}"]`
    await $(buttonNumber).click()
})

When(/^clico no botao Somar$/, async (numero) => {
    const buttonPlus = `//android.widget.ImageButton[@content-desc="plus"]`
    await $(buttonPlus).click()
})

When(/^clico no botao igual$/, async (numero) => {
    const buttonEqual = `//android.widget.ImageButton[@content-desc="equals"]`
    await $(buttonEqual).click()
})

Then(/^exibe o resultado com "([^"]*)?"$/, async (numero) => {
    const display = '/android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]'

    // validar o resultado esperado
    expect(await $(display).getText()).toEqual(numero)
})