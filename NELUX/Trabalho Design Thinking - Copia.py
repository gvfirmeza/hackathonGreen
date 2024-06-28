import serial

sensor = serial.Serial('COM3', 9600)
total = 0
while True:
    i = sensor.readline().decode().rstrip()
    if i:
        corrente = float(i)
        print(corrente)