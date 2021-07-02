import randexec from "./Probability";

var count = [ 0, 0, 0, 0, 0, 0, 0 ];

for (var i=0 ; i<100000 ; i++)
{
  count[randexec()]++;
}

var s = '';
var f = [ "common", "nine", "uncommon", "rare", "epic", "legendary", "mythical" ];

// eslint-disable-next-line no-redeclare
for (var i=0 ; i<7 ; i++)
  s += (s ? ', ':'') + f[i] + ' = ' + count[i];

console.log(s)

const Nineum = [
    {
        id: 1,
        rarity: "Common",
        total: 3000,
        percentage: "",
        yours: ""
    },
    {
        id: 2,
        rarity: "Nine",
        total: "2000",
        percentage: "",
        yours: ""
    },
    {
        id: 3,
        rarity: "Uncommon",
        total: "1000",
        percentage: "",
        yours: ""
    },
    {
        id: 4,
        rarity: "Rare",
        total: "500",
        percentage: "",
        yours: ""
    },
    {
        id: 5,
        rarity: "Epic",
        total: "100",
        percentage: "",
        yours: ""
    },
    {
        id: 6,
        rarity: "Legendary",
        total: "50",
        percentage: "",
        yours: ""
    },
    {
        id: 7,
        rarity: "Mythic",
        total: "5",
        percentage: "",
        yours: ""
    },    
];

export default Nineum;