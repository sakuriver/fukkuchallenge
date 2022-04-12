input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString(timeanddate.date(timeanddate.DateFormat.YYYY_MM_DD))
})
input.onButtonPressed(Button.AB, function () {
    game.startCountdown(5000)
    soundExpression.twinkle.play()
})
input.onButtonPressed(Button.B, function () {
    if (rice_num <= 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        images.createBigImage(`
            . . . # # # . . . .
            . . # # # # # . . .
            . # # # # # # # . .
            . . # # # # # . . .
            . . # # # # # . . .
            `).scrollImage(1, 200)
        rice_num += 1
    } else if (rice_num >= 1) {
        basic.showString("manpuku")
    } else {
    	
    }
})
let rice_num = 0
let gamestate = 0
music.playMelody("- - - - - - - - ", 120)
music.setVolume(255)
basic.showString("ohayou")
gamestate += 1
basic.forever(function () {
    if (gamestate >= 1) {
        basic.showString("fukku")
        basic.showString("asonde")
    } else if (false) {
    	
    } else {
    	
    }
})
