#include <REG51.h>

int a, b , c; // Declare global variables

main(){
	IE = 0x82;   
	TCON = 0X10;
	TMOD = 0X01;
	TH0 = 0XFF;
	TL0 = 0XFA;
	
	while(1){
		a = a+b;
		P0 = 0x00;
	}
}

void Timer0_ISR(void) interrupt 1 using 1{
b = 0x05;
a = 0x01;
P0 = 0xff;
} 