import state from "./state";
import * as timer from './timer.js'
import * as elements from 'elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()
}

export function timeUp(){
  if()
}

export function toggleMusic(){
  state.isMute = document.getElementsByClassName('forest').classList.toggle('musicOn')

  if(state.isMute){
    sounds.forestSound.play()
    return
  }

  sounds.forestSound.pause()
}