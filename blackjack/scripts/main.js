/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand)
{
  let value = 0;
  let blackjack = 21;

  for (let i = 0; i < hand.length; i++)
  {
    if(hand[i] === "2" || hand[i] === "3" || hand[i] === "4" || hand[i] === "5" || hand[i] === "6" || hand[i] === "7" || hand[i] === "8" || hand[i] === "9" || hand[i] === "10")
    {
         let cardVal = hand[i]
         value = value + parseInt(cardVal);
    }
    else if(hand[i] === "K" || hand[i] === "Q" ||hand[i] === "J")
    {
      let placeHolderValue = 10;
      value = value + placeHolderValue;
    }
    else if (hand[i] === "A")
    {
      let option1 = 1;
      let option2 = 11;

      if((value + option2) > blackjack)
      {
        value = value + option1;
      }
      else
      {
        value = value + option2;
      }
    }
  }
  if(value > blackjack)
  {
    value = value - 10;
  }
  console.log(value);
  return value;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
