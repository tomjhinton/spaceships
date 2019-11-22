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
  posX: 275,
  posY: 250,
  velX: 0,
  velY: 0,
  speed: 3,
  angle: 90 / 180 * Math.PI,
  size: 30,
  rotation: 10,
  thrusting: false,
  thrust: {
    x: 0,
    y: 0
  }


}

function  update(){

  // Draw player triangle
  ctx.strokeStyle = `rgba(255,255,255,0.2)`
  ctx.lineWidth = 1

  ctx.beginPath()
  ctx.moveTo( // nose of the ship
    player.posX + 4 / 3 * player.size * Math.cos(player.angle),
    player.posY - 4 / 3 * player.size * Math.sin(player.angle)
  )
  ctx.lineTo( // rear left
    player.posX - player.size * (2 / 3 * Math.cos(player.angle) + Math.sin(player.angle)),
    player.posY + player.size * (2 / 3 * Math.sin(player.angle) - Math.cos(player.angle))
  )
  ctx.lineTo( // rear right
    player.posX - player.size * (2 / 3 * Math.cos(player.angle) - Math.sin(player.angle)),
    player.posY + player.size * (2 / 3 * Math.sin(player.angle) + Math.cos(player.angle))
  )
  ctx.closePath()
  ctx.stroke()


  player.angle += player.rotation

  player.posX+=1
  player.size+=1

}


setInterval(update,  100)
