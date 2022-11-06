def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P0, 1)
    led.plot(0, 0)
    led.enable(True)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P0, 0)
    led.plot(0, 0)
    led.enable(False)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.clear_screen()