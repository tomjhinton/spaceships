import 'bulma'
import './style.scss'



const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(/** @type {KeyboardEvent} */ ev) {
            switch(ev.keyCode) {
                case 37: // left arrow (rotate ship left)
                    player.rotation = player.thrustSpeed / 180 * Math.PI
                    break;
                case 38: // up arrow (thrust the player forward)
                    player.thrusting = true;
                    break;
                case 39: // right arrow (rotationate player right)
                    player.rotation = -player.thrustSpeed / 180 * Math.PI
                    break;
            }
        }

        function keyUp(/** @type {KeyboardEvent} */ ev) {
            switch(ev.keyCode) {
                case 37: // left arrow (stop rotationating left)
                    player.rotation = 0;
                    break;
                case 38: // up arrow (stop thrusting)
                    player.thrusting = false;
                    break;
                case 39: // right arrow (stop rotationating right)
                    player.rotation = 0;
                    break;
            }
        }

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)


const world = {
  friction: 0.02
}

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
  rotation: 0,
  thrustSpeed: 5,
  turnSpeed: 360,
  thrusting: false,
  thrust: {
    x: 0,
    y: 0
  }


}

function  update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  // Draw player triangle
  ctx.strokeStyle = `rgba(255,255,255,1)`
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

  if (player.thrusting) {
    player.thrust.x += player.thrustSpeed * Math.cos(player.angle)
    player.thrust.y -= player.thrustSpeed * Math.sin(player.angle)


  }else {
  // apply friction (slow the ship down when not thrusting)
    player.thrust.x -= world.friction * player.thrust.x
    player.thrust.y -= world.friction * player.thrust.y
  }


  

  player.posX += player.thrust.x
  player.posY += player.thrust.y

}


setInterval(update,  100)
