let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance <= 15) {
        BitRacer.motorRun(BitRacer.Motors.M_L, -300)
        BitRacer.motorRun(BitRacer.Motors.M_R, -300)
        basic.pause(50)
        BitRacer.motorRun(BitRacer.Motors.M_L, 200)
        BitRacer.motorRun(BitRacer.Motors.M_R, -200)
        basic.pause(100)
    }
    if (distance > 15 && distance < 400) {
        BitRacer.motorRun(BitRacer.Motors.M_L, 300)
        BitRacer.motorRun(BitRacer.Motors.M_R, 300)
    }
})
