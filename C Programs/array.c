#include <stdio.h>

int main() 
{
    // Define an array of integers.
    int array[10];

    // Initialize the array with some values.
    for (int i = 0; i < 10; i++) {
        array[i] = i + 1;
    }

    // Print the array to the console.
    for (int i = 0; i < 10; i++) {
        printf("array[%d] = %d\n", i, array[i]);
    }

    return 0;
}