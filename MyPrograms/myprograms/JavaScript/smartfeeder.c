#include <SoftwareSerial.h>
#include <Servo.h>
servo servoMain;
const int trig = 12;
const int echo = 13;
const int LED1 = 7;
const int LED3 = 6;
int trigpin = 4;
int echopin = 5;
int distance2;
int duration = 0;
int distance = 0;
float duration2;
float cm;

void setup() 
{
  Serial.begin(9600);
  pinMode(trigpin, OUTPUT);
  pinMode(echopin, INPUT);
  pinMode(LED1 , OUTPUT);
  pinMode(LED3 , OUTPUT);
  servoMain.attach(9);
  pinMode(trig , OUTPUT);
  pinMode(echo , INPUT);
  
}

void loop()
{
  digitalWrite(trig , HIGH);
  delayMicroseconds(1000);
  digitalWrite(trig , LOW);

  duration = pulseIn(echo , HIGH);
  distance = (duration/2) / 28.5 ;
  Serial.println(distance);

  if ( distance <= 5 )
  {
    digitalWrite(LED1, HIGH);
  }
  else
  {
    digitalWrite(LED1, LOW);
  }
  if ( distance > 5 )
  {
    digitalWrite(LED3, HIGH);
  }
  else
  {
    digitalWrite(LED3, LOW);
  }
   digitalWrite(trigpin, LOW);
delay(2);
digitalWrite(trigpin, HIGH);
delayMicroseconds(10);
digitalWrite(trigpin, LOW);
duration2 = pulseIn(echopin, HIGH);
cm = (duration2/58.82);
distance2 = cm;
if(distance2<30)
{
servoMain.write(360); // Turn Servo back to center position (90 degrees)
delay(1500);

}
else
{ 
servoMain.write(0);
delay(500); }
}