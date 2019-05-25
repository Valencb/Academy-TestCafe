import {Selector, t} from 'testcafe'

class LandingPage {
    constructor(){
        this.loginLin = Selector('.sel_login')
        this.loginIframe = Selector('.GB_frame')
        this.loginIframeNested = Selector('#GB_frame')// si fuera nombre ("[name='GB_frame']")
        this.loginEmailInput= Selector('#email')
        this.loginPasswordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn')  
    }

    loginFlow = async() => {
        await t
        .click(this.loginLin)
        .switchToIframe(this.loginIframe)
        .switchToIframe(this.loginIframeNested)
        .typeText(this.loginEmailInput, 'blankius_mizaky@hotmail.com')
        .typeText(this.loginPasswordInput, 'Vmarcelo1125.')
        .click(this.loginButton)
        .switchToMainWindow()
    }
}

export default new LandingPage()