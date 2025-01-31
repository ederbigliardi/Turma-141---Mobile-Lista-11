const { Given, When, Then } = require("@wdio/cucumber-framework");


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

When(/^clico no botao Somar$/, async () => {
    const buttonPlus = await $(`//android.widget.ImageButton[@content-desc="plus"]`);
    await buttonPlus.click();
})

When(/^clico no botao Subtrair$/, async () => {
    const buttonMinus = await $(`//android.widget.ImageButton[@content-desc="minus"]`);
    await buttonMinus.click();
});

When(/^clico no botao Multiplicar$/, async () => {
    const buttonMultiply = await $(`//android.widget.ImageButton[@content-desc="multiply"]`);
    await buttonMultiply.click();
});

When(/^clico no botao Dividir$/, async () => {
    const buttonDivide = await $(`//android.widget.ImageButton[@content-desc="divide"]`);
    await buttonDivide.click();
});

When(/^clico no botao igual$/, async () => {
    const buttonEqual = await $(`//android.widget.ImageButton[@content-desc="equals"]`);
    await buttonEqual.click();
})

Then(/^exibe o resultado como "([^"]*)?"$/, async (numero) => {
    const display = '//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]'
    // validar o resultado esperado
    expect(await $(display).getText()).toEqual(numero)
})