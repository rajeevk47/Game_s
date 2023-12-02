const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const socket = io()

const scoreEl = document.querySelector('#scoreEl')

canvas.width = innerWidth
canvas.height = innerHeight

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 10, 'white')

socket.on('updatePlayers', (backendplayers)=>{
  
  for(const id in backendplayers){
    const backendplayer = backendplayers[id]
    if(!player[id]){
      players[id] = new Player(backendplayer.x , backendplayer.y,10,'white')
    }
  }
  console.log(players)
})

let animationId

function animate() {
  animationId = requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.1)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  
  for (const id in players){
    const player = player[id]
    player
  }


}

 

animate()

