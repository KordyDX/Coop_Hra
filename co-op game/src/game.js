const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
})

let platforms
let cursors
let player

function preload () {
  game.load.image('sky', './assets/sky.png')
  game.load.image('ground', './assets/platform.png', 10, 10)
  game.load.spritesheet('character', './assets/dude.png', 32, 48)
}

function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  game.add.sprite(0, 0, 'sky')

  platforms = game.add.group()

  platforms.enableBody = true

  const ground = platforms.create(0, game.world.height - 64, 'ground')

  ground.scale.setTo(2, 2)

  ground.body.immovable = true

  let ledge = platforms.create(400, 450, 'ground')
  ledge.body.immovable = true

  player = game.add.sprite(32, game.world.height - 150, 'character')

  game.physics.arcade.enable(player)

  player.body.bounce.y = 0.2
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  player.animations.add('left', [0, 1,2,3], 10, true)
  player.animations.add('right', [5, 6, 7, 8], 10, true)
  player.animations.add('still', [4], 10, true)

  cursors = game.input.keyboard.createCursorKeys()
}

function update () {
  
  player.body.velocity.x = 0

  game.physics.arcade.collide(player, platforms)

  if (cursors.left.isDown) {
    player.body.velocity.x = -300
    player.animations.play('left')
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 300
    player.animations.play('right')
  } else {
    player.animations.stop()
    player.animations.play('still')
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -400
  }
}


