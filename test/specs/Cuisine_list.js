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

    it('settings', async () => //SETTINGS and CUISINE LIST- CLICK
    {
        browser.maximizeWindow();

        await browser.refresh()
        await browser.pause(3000)
        const Settings = await $("//span[contains(text(), 'Settings')]")
        Settings.waitForDisplayed();

        const HoverSettings = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings.moveTo();
        await HoverSettings.click()

        const cuisine_list = await $("//span[normalize-space()='Cuisines List']")

        await cuisine_list.click()

    })


    it('Add Cuisine list', async () =>  //ADD CUISINE LIST
    {

    

            const add_new_cuisine = await $('//a[text()="+ Add new Cuisines"]')

            browser.waitUntil(add_new_cuisine.waitForDisplayed)

            await add_new_cuisine.click()

            await $("//input[@title='Special characters are not allowed']").setValue("TAMILNADU")

            const image_upload = await $("//input[@id='bannerimg']")

            image_upload.setValue("/home/sparkout/Downloads/restaurant.jpeg")

            const status = await $("//select[@name='status']")

            status.selectByAttribute('value', '1')

            await $("//div[4]//div[1]//span[1]//input[1]").click()

            await browser.scroll(0,100)

            await $("//button[@class='btn btn-primary']").click()



        })


    })
