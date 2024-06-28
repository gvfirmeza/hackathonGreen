#include "EmonLib.h"
#define PIN_SENSOR A5

EnergyMonitor sct;
float corrente;
 
void setup(){
  sct.current(PIN_SENSOR, 60.607);
  Serial.begin(9600);
}
 
void loop(){
  double Irms = sct.calcIrms(1480);
  corrente = Irms - 0.30;
  if (corrente < 0) {
    Serial.println(0.00);
  }
  else {
  Serial.println(corrente);
  }
  delay(1000);
}