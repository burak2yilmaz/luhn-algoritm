const luhnAlgorithm = (numbers) => {
    if(numbers.length != 16)
      return false;

    let doubleControl = 0;
    let singleControl = 0;
    for(let i = 0; i<=15;i++)
    {
      if(i %2 === 0)
      {
        let string = String(parseInt(numbers[i]) * 2);
        if(string != undefined)
          singleControl += parseInt(string[0]) + ((string[1] != undefined) ? parseInt(string[1]) : 0);
      }
      else
        doubleControl += parseInt(numbers[i]);
    }
    if((doubleControl + singleControl) %10 === 0)
      return true;
    return false;
};
