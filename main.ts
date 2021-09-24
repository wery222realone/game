let alive = 1
let row = 3
function run() {
    let what = row
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        let row = what - 1
        if (row == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            `)
        }
        
        if (row == 2) {
            basic.showLeds(`
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            `)
        }
        
        if (row == 3) {
            basic.showLeds(`
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            `)
        }
        
        if (row == 4) {
            basic.showLeds(`
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            `)
        }
        
        if (row == 5) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
            `)
        }
        
        
    })
}

while (alive == 1) {
    run()
}
