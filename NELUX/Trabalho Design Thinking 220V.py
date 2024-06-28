import serial
import os
import time

sensor = serial.Serial('COM3', 9600)
total = 0
while True:
    i = sensor.readline().decode().rstrip()
    if i:
        corrente = float(i)
        kwh = (((220 * corrente) * 0.00028) / 1000)
        total += kwh
        toti = round(total * 1.1, 4)
        fat_atu = '{:0.4f}'.format(toti)
        corr_atu = '{:0>5.2f}'.format(corrente)
        print("CORRENTE ATUAL", corr_atu, "A    FATURA ATUAL R$", fat_atu)
        time.sleep(1)
        os.system('cls')

