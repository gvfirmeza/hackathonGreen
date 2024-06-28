from flask import Flask, jsonify, request
from flask_cors import CORS
#from datetime import datetime
import serial
import threading
import collections

app = Flask(__name__)
CORS(app)

# Inicializar a conexão serial
sensor = serial.Serial('COM3', 9600)

# Variáveis globais para armazenar os valores
total_kwh = 0
corrente = 0
watts = 0
previsao_30_dias = 0

historico_kwh = collections.deque(maxlen=1440)

def pevisao():
    global previsao_30_dias
    if len(historico_kwh) == 0:
        return jsonify({"error": "Sem dados suficientes para previsão"}), 400

    media_kwh_por_tick = sum(historico_kwh) / len(historico_kwh)
    kwh_por_dia = media_kwh_por_tick * 1440  # Assumindo que há 1440 ticks em um dia
    previsao_30_dias = kwh_por_dia * 30


def ler_sensor():
    global total_kwh, corrente, watts
    while True:
        linha = sensor.readline().decode().rstrip()
        if linha:
            corrente = float(linha)
            watts = corrente * 220
            kwh = ((watts * 0.00028) / 1000)
            total_kwh += kwh

# Iniciar a thread para ler os dados do sensor
thread = threading.Thread(target=ler_sensor)
thread.daemon = True
thread.start()

@app.route('/get_metricas', methods=['GET'])
def get_metricas():
    # Capturar o timestamp atual
    # timestamp = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')

    # Criar o dicionário com as métricas
    metricas = {
        "valorTotal": round(total_kwh * 0.8, 4),  # Com acréscimo de 10%
        "correnteAtual": round(watts, 2),
        "previsao": round(previsao_30_dias* 0.8, 4)
        # "timestamp": timestamp
    }

    # Retornar as métricas como JSON
    return jsonify(metricas)

@app.route('/ligar', methods=['POST'])
def ligar():
    sensor.write(b'LIGAR\n')
    return jsonify({"status": "Relé ligado"}), 200

@app.route('/desligar', methods=['POST'])
def desligar():
    sensor.write(b'DESLIGAR\n')
    return jsonify({"status": "Relé desligado"}), 200

if __name__ == '__main__':
    app.run(port=8000)


