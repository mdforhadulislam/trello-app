const curd = require("../lib/curdOparations");
const utilites = require("../utils/utilites");
const { convartHash, compeaData, tokenGenaretor, tokenVerify, tokenDestroy } = require("../utils/utilites");
const hash = compeaData("hello", "$2b$05$oUUMDeHReDIo3JzbfckHre53.u2HVXTQYbPpj4QWXmIcqHUHnaJsS")

// console.log(hash);
// curd.create("token", { id: "122", token:'sdgjdgvjdjjnggv' }, (err, data) => {
//    if (err) {
//       console.log(err, data);
//    }
// });

utilites.tokenGenaretor("u3oe_1nymg", (err, data) => {
   console.log(err, data);
})
