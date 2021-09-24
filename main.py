alive = 1
row = 3
def run():
    what = row
    input.on_button_pressed(Button.A, on_button_pressed_a)
    def on_button_pressed_a():
        row = what - 1

        if row == 1:
            basic.show_leds("""
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            """)
        if row == 2:
            basic.show_leds("""
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            """)
        if row == 3:
            basic.show_leds("""
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            """)
        if row == 4:
            basic.show_leds("""
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            """)
        if row == 5:
            basic.show_leds("""
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            """)
        pass
    
    


while alive == 1:
    run()


