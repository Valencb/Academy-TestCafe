import {Selector, t} from 'testcafe'


class HomePage {
    constructor(){
        this.topIcons = Selector('#top_icons')
        this.addTask = Selector('.agenda_add_task')
        this.addingDate= Selector('.input_due_date')
        this.selectionMonth = Selector('.scheduler-picker-header-action').nth(2)
        this.selectDay= Selector('.scheduler-picker-cell-day').withText('10')
        //this.selectInput = Selector('.sel_richtext_editor')
        this.writting = Selector('.sel_richtext_editor')
        this.bntAddTask = Selector('.ist_button_red')
       this.btnInbox = Selector('.item_content').child(0)
       this.selectTask= Selector('.sel_item_content')
      // this.selectMenu = Selector('tbody tr td ')
       this.selectLista = Selector('.text_cursor').withText('TU NOMBRE')
       this.selectMenuTask = Selector('.menu').nth(30)
       this.borrar = Selector('.menu_label').withText('Eliminar tarea')
       this.delete = Selector('.ist_button_red')
       this.test= Selector('.text sel_item_content').withText('TU NOMBRE')
       this.selectandOtherday= Selector('.scheduler-picker-cell-day').withText('25')
       
       /*  //
        //this.allTasks = Selector('#filter_inbox')
        //this.nameTask =Selector('.sel_item_content')
        
        this.selectLista = Selector('.text_cursor').withText('TU NOMBRE')
        this.selectMenu = Selector('.menu').nth(24)
        this.deletetask = Selector('#menu_delete_text')
        this.selectDeleted = Selector('.checker')
*/
      
    }

    addTaskFlow = async() => {
        await t
        .click(this.addTask)
        .click(this.addingDate)
        .click(this.selectionMonth)
        .click(this.selectDay)
        //.Click(this.writting)
        .typeText(this.writting, 'TU NOMBRE')
        //.pressKey(this.writting, 'enter')
        .click(this.bntAddTask)
        .wait(1000)
        //.navigateTo('https://todoist.com/app?lang=es&r=1558487632038#project%2F2210673149')
       
    }

    deleteTask = async() =>{
        await t 
        .click(this.btnInbox)
        .hover(this.selectLista)
        .click(this.selectMenuTask)
        .click(this.borrar)
        .click(this.delete)

    }
    updatedTask = async() =>{
        await t 
        .click(this.btnInbox)
        .click(this.selectTask)
        .typeText(this.writting, ': Steve ')
        .click(this.addingDate)
        .click(this.selectionMonth)
        .click(this.selectandOtherday)
        .click(this.bntAddTask)


    }
}
    


export default new HomePage()