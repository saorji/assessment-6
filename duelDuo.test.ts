
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('If all bots buttons clicks and displays bots', async () => {
    await driver.findElement(By.id('see-all')).click()
    const all = await driver.findElement(By.id('all-bots'))
    const displayed = await all.isDisplayed()
    expect(displayed).toBeTruthy()
    await driver.sleep(3000)
    })

test('If Draw button clicks and displays bots', async () => {
    await driver.findElement(By.id('draw')).click()
    const options = await driver.findElement(By.id('choices'))
    const displayed = await options.isDisplayed()
    expect(displayed).toBeTruthy()
    await driver.sleep(1000)
    })

test('If Draw button clicks and displays bots', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const player = await driver.findElement(By.id('player-duo'))
    const displayed = await player.isDisplayed()
    expect(displayed).toBeTruthy()
    await driver.sleep(2000)
    })