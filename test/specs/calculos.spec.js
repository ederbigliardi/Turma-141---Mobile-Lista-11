// Em breve

import {remote} from 'webdriverio';
async function main () {
  const caps = {
  "platformName": "Android",
  "appium:platformVersion": "9.0",
  "appium:deviceName": "Samsung Galaxy S9 FHD GoogleAPI Emulator",
  "appium:deviceOrientation": "portrait",
  "appium:app": "storage:filename=Calculator_8-6-1_APKPure.apk",
  "appium:appPackage": "com.google.android.calculator",
  "appium:appActivity": "com.android.calculator2.Calculator",
  "appium:automationName": "UiAutomator2",
  "browserName": "",
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "sauce:options": {
    "name": "Appium Desktop Session -- Jan 14, 2025 8:09 PM"
  },
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true
}
  const driver = await remote({
    protocol: "http",
    hostname: "ondemand.us-west-1.saucelabs.com",
    port: 80,
    path: "/wd/hub",
    capabilities: caps
  });
  const el1 = await driver.$("accessibility id:2");
  await el1.click();
  const el2 = await driver.$("accessibility id:plus");
  await el2.click();
  const el3 = await driver.$("accessibility id:3");
  await el3.click();
  const el4 = await driver.$("accessibility id:equals");
  await el4.click();
  const el5 = await driver.$("id:com.google.android.calculator:id/result_final");
  await el5.click();
  const el6 = await driver.$("accessibility id:clear");
  await el6.click();
  const el7 = await driver.$("accessibility id:8");
  await el7.click();
  const el8 = await driver.$("accessibility id:minus");
  await el8.click();
  const el9 = await driver.$("accessibility id:6");
  await el9.click();
  const el10 = await driver.$("accessibility id:equals");
  await el10.click();
  const el11 = await driver.$("id:com.google.android.calculator:id/result_final");
  await el11.click();
  const el12 = await driver.$("accessibility id:clear");
  await el12.click();
  const el13 = await driver.$("accessibility id:3");
  await el13.click();
  const el14 = await driver.$("accessibility id:multiply");
  await el14.click();
  const el15 = await driver.$("accessibility id:7");
  await el15.click();
  const el16 = await driver.$("accessibility id:equals");
  await el16.click();
  const el17 = await driver.$("id:com.google.android.calculator:id/result_final");
  await el17.click();
  const el18 = await driver.$("accessibility id:clear");
  await el18.click();
  const el19 = await driver.$("accessibility id:8");
  await el19.click();
  const el20 = await driver.$("accessibility id:divide");
  await el20.click();
  const el21 = await driver.$("accessibility id:2");
  await el21.click();
  const el22 = await driver.$("accessibility id:equals");
  await el22.click();
  const el23 = await driver.$("id:com.google.android.calculator:id/result_final");
  await el23.click();
  const el24 = await driver.$("accessibility id:clear");
  await el24.click();
  await driver.deleteSession();
}
main().catch(console.log);