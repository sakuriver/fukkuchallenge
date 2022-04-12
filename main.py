def on_button_pressed_a():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.show_string(timeanddate.date(timeanddate.DateFormat.YYYY_MM_DD))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    game.start_countdown(5000)
    soundExpression.twinkle.play()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    images.create_big_image("""
        . . . # # # . . . .
                . . # # # # # . . .
                . # # # # # # # . .
                . . # # # # # . . .
                . . # # # # # . . .
    """).scroll_image(1, 200)
input.on_button_pressed(Button.B, on_button_pressed_b)

music.play_melody("- - - - - - - - ", 120)
music.set_volume(255)
basic.show_string("ohayou")