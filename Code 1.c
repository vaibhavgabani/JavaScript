#include<REG51.h>
int a,b,c;
main(){
	IE = 0x85;
	TCON = 0x05;
	while(1){
		a = 0xff+b;
	}
}

void interrupt0_ISR (void) interrupt 0 using 1 {
	a = 5;
	P1 = 0x00;
	P1 = 0xff;
}

void interrupt1_ISR (void) interrupt 2 using 3 {
	b = 5;
	P1 = 0x00;
	P1 = 0xff;
}