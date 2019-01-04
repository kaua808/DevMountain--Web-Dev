var tables = [
    {
      occupied: false,
      partNum: 0,
      id: 1,
      haveOrder: false
    },
     
    {
      occupied: true,
      partyNum: 3,
      id: 2,
      haveOrder: false
    },
   
    {
      occupied: true,
      partyNum: 4,
      id: 3,
      haveOrder: true
    }
];

alert(tables[2].haveOrder);

var restSum = function() {
    total = 0;
    for(var i = 0; i < tables.length; i++) {
       total = total + tables[i].partyNum;
       //or total += tables[i].partyNum; 
    }
    return total;
};
    