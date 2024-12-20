#include<stdio.h>

int cal(int x, int y);
int cal(int x, int y)

{
    return x+y;

}
void main()
{
   
    int a=0,b=0;
    printf("Enter two numbers\n");
    scanf("%d%d",&a, &b);

    int ans = cal(a,b);
    printf("Addition is = %d",ans);

}