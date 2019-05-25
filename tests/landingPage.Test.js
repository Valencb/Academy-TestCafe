import { t } from 'testcafe'
import landingPage from '../pages/landingPage'
import homePage from '../pages/homePage'

fixture('Sucessful login')
.page('https://todoist.com/')


//Con el await le indico que espera ha realizar el flujo de ladingpag
test('Login', async t=>{
    await landingPage.loginFlow()
    await t.expect(homePage.topIcons.exists).ok()
})

