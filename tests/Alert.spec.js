import {test, expect} from "@playwright/test"

test('Simple Alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(alert)=>{
        const type=await alert.type()
        console.log(type)
        const msg=await alert.message()
        console.log(msg)
        await page.waitForTimeout(2000)
        await alert.accept()
        

    })
     await page.locator('[id="alertBtn"]').click()

})

test('Confirm Alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(alert)=>{
        const type=await alert.type()
        console.log(type)
        const msg=await alert.message()
        console.log(msg)
        await page.waitForTimeout(2000)
        await alert.dismiss()
        

    })
     await page.locator('[id="confirmBtn"]').click()

})

test('Promt Alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const name='George';

    page.on('dialog', async(alert)=>{
        const type=await alert.type()
        console.log(type)
        const msg=await alert.message()
        console.log(msg)
        await page.waitForTimeout(2000)
        await alert.accept(name)
        

    })
     await page.locator('[id="promptBtn"]').click()
     const promptmsg=await page.locator('#demo').textContent()
      console.log(promptmsg)

})

test('Alerts Using Iflse Ladder', async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(alert)=>{

        if(alert.type()=='alert'){
            await alert.accept()
            console.log(alert.type())
        } else if(alert.type()=='confirm'){
            const meg= await alert.message()

                  if(alert.message()==meg){
                    await alert.accept()
                    console.log(alert.type())
                  }else{
                    await alert.dismiss()
                  }
        }else if(alert.type()=='prompt'){
            const meg= await alert.message()
               if(alert.message()==meg){
                await alert.accept('George')
                console.log(alert.type())
               }else{
                await alert.dismiss()
               }
        }


    })
    await page.locator('[id="promptBtn"]').click()
})

test('Moder Alert', async({page})=>{

    await page.goto('https://letcode.in/alert')
    await page.locator('#modern').click()
    await page.waitForTimeout(2000)
    await page.locator('[aria-label="close"]').click()

})