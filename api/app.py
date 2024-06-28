from flask import Flask, jsonify, request
from flask_cors import CORS
import serial
import threading

app = Flask(__name__)
CORS(app)

# Inicializar a conexão serial
sensor = serial.Serial('COM3', 9600)

# Variáveis globais para armazenar os valores
total_kwh = 0
corrente = 0
watts = 0

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
        "previsao": watts * 30
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

