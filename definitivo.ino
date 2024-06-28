#include "EmonLib.h"
#define PIN_SENSOR A5
#define RELAY_PIN 7

EnergyMonitor sct;
float corrente;

void setup() {
  sct.current(PIN_SENSOR, 60.607);
  Serial.begin(9600);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW); // Inicialmente, o relé está desligado
}

void loop() {
  double Irms = sct.calcIrms(1480);
  corrente = Irms - 0.30;

  if (corrente < 0) {
    corrente = 0.00;
  }

  Serial.println(corrente);

  // Controle do relé via comandos serial
  if (Serial.available() > 0) {
    String comando = Serial.readStringUntil('\n');
    comando.trim();

    if (comando == "LIGAR") {
      digitalWrite(RELAY_PIN, HIGH);
    } else if (comando == "DESLIGAR") {
      digitalWrite(RELAY_PIN, LOW);
    }
  }

  delay(1000);
}
