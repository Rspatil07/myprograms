//even odd program in cpp?
#include<iostream>
using namespace std; // usually considered bad practice
int main()
{
    int i, j=0, c=0;

    for(i = 0; i < 5; i++) 
    {
        cout << "enter 5 numbers " << i;
        cin >> i; // you are overwriting your loop variable!!!
                  // how do you think your program will go on if you enter
                  // e. g. 7 right in the first loop run?
                  // additionally, you did not check the stream state afterwards
                  // if user entered something invalid (e. g. S), cin sets the
                  // fail flag and stops further reading - attemps doing so yield
                  // 0 (since C++11) or don't modify the variable (before C++11)
    }

    // this section is outside the loop already!
    // so you are only checking the number you read in your loop in the very last run
    if(i == 0)
    {
        cout << "0 is not even number" << endl;
    }
    else if(i % 2 == 0)
    {
        j++;
    }
    // this check is redundant: it is the complement to your previous
    // check, so if the first went wrong, the second cannot be false any more
    // (compare: you did not check for i != 0 either before doing the modulo check)
    else /* if(i % 2 != 0) */
    {
        c++;
    }

    cout << "total exists even: " << j << endl;
    cout << "total exists odd:  " << c << endl;   
    return 0;
}


