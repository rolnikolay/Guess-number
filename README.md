# Guess a number

[This web page](https://rolnikolaygmailcom.github.io/guess_a_number.github.io/) guesses a number between 1 and 1000 in less or exactly 10 attempts. In this game the user picks a number and tells if the number is higher or lower than a number given by machine.

The machine uses the help of **binary search** instead of linear search, which allows to decrease the number of possible trials (to guess the correct number) from 1000 to **just 10 attempts**.

_Why it is 10 or less?_
After each attempt we divide the length of our range by 2. To go from 1000 to 1 it takes just 10 divisions. So it can be presented as following in javascript:

```
//The logarithm of 1000, base 2 is 9,96 (around 10)
console.log(getBaseLog(2, 1000));
// expected output: 9,96
```

# To see the web page in action click [here](https://rolnikolaygmailcom.github.io/guess_a_number.github.io/) 
