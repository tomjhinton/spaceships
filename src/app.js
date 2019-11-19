import 'bulma'
import './style.scss'



const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)


const player = {
  height: 50,
  width: 20,
  posX: 75,
  posY: 50,
  velX: 0,
  velY: 0,
  speed: 3,
  jumping: false,
  grounded: false

}

function  update(){

  // Draw player triangle
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(player.posX, player.posY)
  ctx.lineTo(player.posX+25, player.posY+25)
  ctx.lineTo(player.posX+25, player.posY-25)
  ctx.lineTo(player.posX, player.posY)
  ctx.stroke()






  
  requestAnimationFrame(update())
}

update()
