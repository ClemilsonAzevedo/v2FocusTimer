import * as elements from './elements.js'
import * as actions from './timer.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function registerControls(){
  elements.controls.addEventListener('click', ()=>{
    const actions = event.target.dataset.action

    if(typeof actions[action] !== 'function'){
      return
    }

    actions[action]()

  })
}



