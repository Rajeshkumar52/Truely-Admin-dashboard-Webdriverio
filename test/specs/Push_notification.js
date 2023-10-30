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

    it('settings', async () => //SETINGS AND PUSH NOTIFICATION - CLICK
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
            window.scrollBy(0, 300);
        });

        const push_notification =await $('//span[text()="Push Notification"]');
        push_notification.click();

    })

        it('Push Notificaiton - All users and delivery boys', async () => //SEND PUSH NOTIFICATION - CLICK
        {

            const sent_to=await $("//select[@id='send_to']")

            await sent_to.selectByAttribute('value','ALL')

            const status=await $("//select[@id='receiver_status']")

            await status.selectByAttribute('value','1')

            const time=$("//select[@id='period-data']")

            await time.selectByAttribute('value','1')

            const city=await $("//select[@id='city']")

            await city.selectByAttribute('value','1')

            await $("//input[@placeholder='Title of the message']").setValue("Push Notification")

            await $("//textarea[@id='message']").setValue("Order food from truely")

            const image=await $("//input[@id='image']")

            image.setValue("/home/sparkout/Downloads/restaurant.jpeg")

            await $("//button[@id='submit']").click()

        })

        it('Push Notificaiton All users', async () => //SEND PUSH NOTIFICATION - CLICK
        {

            const sent_to=await $("//select[@id='send_to']")

            await sent_to.selectByAttribute('value','USERS')

            const status=await $("//select[@id='receiver_status']")

            await status.selectByAttribute('value','1')

            const time=$("//select[@id='period-data']")

            await time.selectByAttribute('value','1')

            const city=await $("//select[@id='city']")

            await city.selectByAttribute('value','1')

            await $("//input[@placeholder='Title of the message']").setValue("Push Notification")

            await $("//textarea[@id='message']").setValue("Order food from truely")

            const image=await $("//input[@id='image']")

            image.setValue("/home/sparkout/Downloads/restaurant.jpeg")

            await $("//button[@id='submit']").click()





        })

        it('Push Notificaiton All Delivery boys', async () => //SEND PUSH NOTIFICATION - CLICK
        {

            const sent_to=await $("//select[@id='send_to']")

            await sent_to.selectByAttribute('value','PROVIDERS')

            const status=await $("//select[@id='receiver_status']")

            await status.selectByAttribute('value','1')

            const time=$("//select[@id='period-data']")

            await time.selectByAttribute('value','1')

            const city=await $("//select[@id='city']")

            await city.selectByAttribute('value','1')

            await $("//input[@placeholder='Title of the message']").setValue("Push Notification")

            await $("//textarea[@id='message']").setValue("Order food from truely")

            const image=await $("//input[@id='image']")

            image.setValue("/home/sparkout/Downloads/restaurant.jpeg")

            await $("//button[@id='submit']").click()





        })




    })
