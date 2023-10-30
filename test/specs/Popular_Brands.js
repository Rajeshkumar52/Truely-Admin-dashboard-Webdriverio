describe('Truely admin', async () => {

    it('login correct', async () =>  //BROWSER OPENING AND ENTERING URL                                                       
    {
        await browser.url("https://dev2admin.truely.co.in/adminpanel/login")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle('TRUELY :: Admin Login')
    })

    it('login', async () =>     //LOGIN                     
    {
        await $("#login_username").setValue("admin")
        await $("#login_pass").setValue("truelyeatzila")
        await $("//button[@type='submit']").click()
        await browser.pause(2000)
    })

    it('assetion', async () => {
        await expect(browser).toHaveUrl('https://dev2admin.truely.co.in/admin/dashboard')
        await expect(browser).toHaveUrlContaining('truely')
        await expect(browser).toHaveTitleContaining('TRUELY :: Accounts Dashboard')

    })

    it('settings', async () => //SETTINGS and POPULAR BRAND - CLICK
    {
        browser.maximizeWindow();

        await browser.refresh()
        await browser.pause(3000)
        const Settings = await $("//span[contains(text(), 'Settings')]")
        Settings.waitForDisplayed();

        const HoverSettings = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings.moveTo();
        await HoverSettings.click()

        const popular_brand = await $('//span[text()="Popular Brands"]')

        await popular_brand.click()

    })

it('Add popular brand', async () => //ADD POPULAR BRAND DETAILS
{

    await $('//a[text()="+ Add Popular Brand"]').click()

    const restaurant_select=await $('//*[@id="add_popularbrand"]/div[1]/div/span/span')

    await restaurant_select.click()

    const restaurant_search=await $("//input[@role='searchbox']")

    await restaurant_search.setValue("Grand Hotel")

   const restaurant= await $('//li[text()="Grand Hotel"]')

   browser.waitUntil(restaurant.waitForDisplayed)

   await restaurant.click()

   const brand_image=await $("//input[@id='bannerimg']")

   brand_image.setValue("/home/sparkout/Downloads/restaurant.jpeg")

   const status=await $("//select[@name='status']")

   await status.selectByAttribute('value','1')

   browser.scroll(0,100)

   await $("//button[@class='btn btn-primary']").click()





   







})
})