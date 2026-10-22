sprites.on_fire_created(function (location) {
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myPlane,
    assets.animation`3`,
    200,
    true
    )
})
sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
    music.thump.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myPlane,
    assets.animation`2`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Water, assets.tile`tree fire`, function (sprite, location) {
    sprites.change_flame_strength_by(location, -1)
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(myPlane, forest_imgs.water)
})
let myPlane: Sprite = null
tiles.setTilemap(tilemap`level10`)
myPlane = sprites.create(assets.image`1`, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)
for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
hud.fire_hud(true)
hud.danger_hud(true)
hud.forest_hud(true)
game.onUpdate(function () {
    sprites.random_spread()
})
