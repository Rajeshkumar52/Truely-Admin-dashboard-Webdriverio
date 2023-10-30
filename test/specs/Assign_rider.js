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
  
    it('Order Management', async () => //ORDER MANAGEMENT AND ASSIGN RIDER- CLICK
    {


        browser.maximizeWindow()
         await $("//span[contains(text(), 'Order Management')]").click()

         await $("//a[contains(text(),'New')]").click()

         await $("//tbody/tr[1]/td[7]/div[1]/button[1]").click()

         browser.scroll(0,100)

         const assign_rider=await $('//span[text()="Assign Rider"]')
         browser.waitUntil(assign_rider.waitForDisplayed)

         await assign_rider.click()

         const manual_assign=await $('//button[text()="MANUAL ASSIGN"]')

         browser.waitUntil(manual_assign.waitForDisplayed)

         await manual_assign.click()

         const close=await $('(//button[text()="Close"])[2]')

         browser.waitUntil(close.waitForDisplayed)

         
         await close.click()

         /*const assign=await $('//button[text()="ASSIGN TO THIS RIDER"]')

         browser.waitUntil(assign.waitForDisplayed)

         await assign.click()*/


         

         //browser.waitUntil(close.waitForDisplayed)

         //await close.click()

         //const manual_assign1=await $('//button[text()="MANUAL ASSIGN"]')

         //browser.waitUntil(manual_assign1.waitForDisplayed)

         //await manual_assign1.click()





         
















    })
})