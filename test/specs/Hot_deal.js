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

    it('settings', async () => //SETTINGS AND HOT DEALS - CLICK
    {
        browser.maximizeWindow();

        await browser.refresh()
        await browser.pause(3000)
        const Settings = await $("//span[contains(text(), 'Settings')]")
        Settings.waitForDisplayed();

        const HoverSettings = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings.moveTo();
        await HoverSettings.click()


        await browser.refresh()

        const HoverSettings1 = await $("//span[contains(text(), 'Settings')]");
        await HoverSettings1.moveTo();
        await HoverSettings1.click()

        browser.execute(() => {       
            window.scrollBy(0, 200);
        });

        const Hot_deals = $('//span[text()="Hot Deals"]');

        // Use the click() method to click the new element
        Hot_deals.click()
    })

        it('Add Hot Deals', async () => //SETTINGS AND HOT DEALS - CLICK
        {
        await $('//a[text()="+ Add hot deal"]').click()

        const restaurant=await $('//*[@id="add_restaurant_banner"]/div[1]/div/span/span[1]/span[1]/span')

       await restaurant.click()

        await $("//input[@role='searchbox']").setValue("Grand Hotel")

        const restaurant_select=await $('//li[text()="Grand Hotel"]')

        browser.waitUntil(restaurant_select.waitForDisplayed)

        await restaurant_select.click()

        const status=await $("//select[@name='status']")

        await status.selectByAttribute('value','1')

        const image_upload=await $("//input[@id='bannerimg']")

        image_upload.setValue("/home/sparkout/Downloads/restaurant.jpeg")

        const start_time=await $("//input[@id='startdate']")

        start_time.setValue('28/10/002023,14:40')

        const end_time=await $("//input[@id='enddate']")

        end_time.setValue('28/10/002023,15:10')

        await browser.scroll(0,100)
    
        await $('//button[text()="Submit"]').click()
        
       
















        })

    })
