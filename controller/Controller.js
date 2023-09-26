import Modle from "../model/Modle.js"
import NagyKepView from "../view/NagyKep.js";

class Controller{
    constructor(){
        const MODEL = new Modle();
        const BIGPICK = new NagyKepView(MODEL.getAktKep(), $("#nagykep"));
    
        $(window).on("bal", ()=>{
          MODEL.bal()  
          let aktKep = MODEL.getAktKep()
          BIGPICK.nagykepCsere(aktKep)
        })
        $(window).on("jobb", ()=>{
            MODEL.jobb()  
            let aktKep = MODEL.getAktKep()
            BIGPICK.nagykepCsere(aktKep)
          })
        
    
    }

}

export default Controller