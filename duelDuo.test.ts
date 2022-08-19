
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
test("see all button displays robots", async()=>{
    await driver.findElement(By.id("see-all")).sendKeys("\n")
    const allBots = await driver.findElement(By.id("all-bots"))
    const displayed = await allBots.isDisplayed()
    expect(displayed).toBe(true)
})
test("draw button displays robots", async()=>{
    await driver.findElement(By.id("draw")).sendKeys("\n")
    const drawBots = await driver.findElement(By.id("choices"))
    const displayed = await drawBots.isDisplayed()
    expect(displayed).toBe(true)
})