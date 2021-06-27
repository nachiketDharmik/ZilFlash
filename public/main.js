var ContractAddress;
var Zilliqa;
var MultiSenderContract;
var oracleAddr;
let list={wallets:[], tokens:[]} ;
let arrTest = [] ;



//=============Test========
window.addEventListener("load", async () => {
if (typeof window.zilPay !== 'undefined') {
    //enable zilpay deposits
   // document.getElementById("createDepositTX").addEventListener("click", setupTransaction);
    console.log("ZilPay Walletttttttttt Detected");
     zilliqa = window.zilPay;
 Zilliqa = window.zilPay;
    utils = zilPay.utils;
    contractsUtils = zilPay.contracts;
    if (!zilPay.wallet.isConnect) {
      const status = await connect();
    }
    if (zilPay.wallet.isConnect) {
        zilliqa.wallet.observableAccount().subscribe(account => {
             console.log("Account changed to " + account.bech32);
        var txt = "Active Account: " + account.bech32;
        // document.getElementById("CurrentUsedAccount").innerHTML = txt;
        console.log(txt);
        });
  
     //Old address
    //ContractAddress = "zil1lf8awxf9fg0cdfp2m5jnlc2nmt8chtp3wgx6gp";
    //new address
      ContractAddress = "zil1pf56rsqv5rtshekktd75m0rmdp9hrg0zjc22kn";  
      
          MultiSenderContract = Zilliqa.contracts.at(ContractAddress);
    }
} else {
    //no zilpay
   console.log("Zilpay Notttttttttttttt Detected.");
}
});

function connect() {
return zilPay.wallet.connect();
}
//========================================================

//contract address 0xfa4fd719254a1f86a42add253fe153dacf8bac31 , zil1lf8awxf9fg0cdfp2m5jnlc2nmt8chtp3wgx6gp
function test(){
  Zilliqa =  window.zilPay;
  if (Zilliqa){
    console.log("ZilPay Wallet Detected");
    if(Zilliqa.wallet.connect()){
      console.log("Connected successfully");
      console.log("DefaultAddress is " + Zilliqa.wallet.defaultAccount.bech32);
      
      Zilliqa.wallet.observableAccount().subscribe(function (account) {
        console.log("Account changed to " + account.bech32);
        var txt = "Active Account: " + account.bech32;
        // document.getElementById("CurrentUsedAccount").innerHTML = txt;
       console.log(txt);
        // Display result declare section only to oracle address
        // if(oracleAddr == account.base16){
          // document.getElementById("forOracle").style.display = "";
        // }else{
          // document.getElementById("forOracle").style.visibility = "hidden";
        // }
      });

      // Track network change
      Zilliqa.wallet.observableNetwork().subscribe(function (net) {
        console.log("Network changed to " + net);
      });

      ContractAddress = "zil1lf8awxf9fg0cdfp2m5jnlc2nmt8chtp3wgx6gp";
     // oracleAddr = "0x2fCEC8dDeEBaB3cad24065c1184b3e0DfCa46e0E";

      // Fetch Miracle contract at zil1umn3vdehln68stmwxjxh2005jjwuk6ukueyhcz
      MultiSenderContract = Zilliqa.contracts.at(ContractAddress);

      // MultiSenderContract.getInit().then(function(Inits){
        // console.log("Miracle Contract fetched successfully.");
        // console.log("Miracle Contract Inits fetched successfully.");

     //   Dynamically build table to display contract inits
        // dat = "<table width='100%' border=1><tr><td colspan='2'><b>Contract Init Data</b></td></tr>";
        // for (i in Inits) {
          // dat += "<tr><td>" + Inits[i].vname + "</td><td>" + Inits[i].value + "</td>";
        // }
        // dat += "</table>"

        // document.getElementById("ContractInits").innerHTML = dat;

        // MultiSenderContract.getState().then(function(StateData){
          // console.log("Miracle Contract state fetched successfully.");
          // console.log("Questions List fetch successfully.");

         // Dynamically build table to display questions list and contrals to trigger transition
          // dat = "<table width='100%' border=1><tr><td colspan='3'><b>Questions List and Ids</b></td></tr>";
          // for(i in StateData.questionMapping){
            // dat += "<tr><td>" + i + "</td><td>" + StateData.questionMapping[i].arguments[0] + "</td><td align='right'><button onclick='userAnswer(" + i +")'>Answer qId" + i + "</button></td>";
          // }
          // dat += "<tr><td><button onclick='redeem()'>Redeem</button></td><td align='right' colspan='2'><button onclick='addQuestion()'>Add Question</button><input id='NewQuestionDesc' placeholder='New Question' type='text' /></td></tr></table>";

          // document.getElementById("QuestionMapping").innerHTML = dat;
        // });

     // });

    }else{
      console.log("Failed to connect. Try again later.");
    }
  }else{
    console.log("Zilpay Not Detected.");
  }
}

// Call to addQuestion transition
// function addQuestion(){
  // const gasPrice = Zilliqa.utils.units.toQa('1000', Zilliqa.utils.units.Units.Li);
  // var newq = document.getElementById("NewQuestionDesc").value;

  // MultiSenderContract.call('addQuestion',[{
    // vname: "qDesc",
    // type: "String",
    // value: newq
  // }],
    // {
      // gasPrice: gasPrice,
      // gasLimit: Zilliqa.utils.Long.fromNumber(9000)
    // });
// }

// Call to multiSendV3 transition
// var recipients = ["0x78eb69306AEf70d195D2eE6B84755A2234135d18","0x78eb69306AEf70d195D2eE6B84755A2234135d18"];
// var amounts = "000000000000000000000000000001000000000000_000000000000000000000000000001000000000000";
  function  multisend(){
   console.log("inside multisend Functionnnnnnnnnnnnn");
  // var userResp = prompt("Pl enter answer for QId "+qId+":");
  // if(userResp){
  var recipients = list.wallets ;
  var amounts = list.tokens ;
  var output = [];
  var totalAmount = 0 ;
  
  
  // =================Adding leading zeros==========================================
            // amountsCopy = [];

      // for (i = 0; i < amounts.length; i++) {
        
        // temp = amounts[i];
        // temp = temp * 1000000000000 ;
        // for (var j = temp.toString().length; j <42; j++) {
        
        // temp = "0" + temp;
        
        // amountsCopy[i] = temp;
        // //console.log(temp);
        // }
       
       // // to calculate the total amount of zil needed to be transferred
                // totalAmount = totalAmount + parseInt(amountsCopy[i]) ;
      
      // }
               // amounts = [] ;
       // //amounts = amountsCopy.join();
        // amounts = amountsCopy;
                // console.log("amount copy " +amountsCopy);
      // console.log("recipients" +recipients);
      // console.log("amounts " + amounts);
      // console.log("TotalAmount " + totalAmount);
  // =============================================================
  
  
        // =================Alternative of above code (Adding leading zeros) 10/6/2021==========================================
            amountsCopy = [];

      for (i = 0; i < amounts.length; i++) {
        
        //temp = amounts[i];
        temp = Zilliqa.utils.units.toQa(amounts[i], Zilliqa.utils.units.Units.Zil) ;   //Zil to Qa
        // for (var j = temp.toString().length; j <42; j++) {
        
         temp = "0" + temp;
        
        amountsCopy[i] = temp;
        //console.log(temp);
        // }
       
       // to calculate the total amount of zil needed to be transferred
                totalAmount = totalAmount + parseInt(amountsCopy[i]) ;
      
      }
               amounts = [] ;
       //amounts = amountsCopy.join();
        amounts = amountsCopy;
                console.log("amount copy " +amountsCopy);
      console.log("recipients" +recipients);
      console.log("amounts " + amounts);
      console.log("TotalAmount " + totalAmount);
  // =============================================================
  
  
  //=============json format (final implementation)===========================
  
  
  
  
                  
                  // Looping to get each walt and amnt to get json
            for (i=0; i<recipients.length; i++) {

              
                           
              var arr = {
                "constructor" : "Pair",
                "argtypes" : ["ByStr20","Uint128"],
                "arguments": [recipients[i],amounts[i]], 
                

              }
                               console.log( "amoiunt "+amounts[i]);
                console.log( "recipient "+recipients[i]);
              console.log(arr);

               // to store every iteration objects to an array
               

              output.push(arr);
              
              
                

              } 
              
              console.log(output);

              //  Loop part end
                  
                  
  
  
  
  //========================================
  
  
  
  
  
  
  const gasPrice = Zilliqa.utils.units.toQa('1000', Zilliqa.utils.units.Units.Li);
  
  //commenting for testing below code 27/6/2021
  MultiSenderContract.call('multiSendV6',[{
    vname: "recipients",
    type: "List(Pair(ByStr20)(Uint128))",
    value: output
  }],
  {  
    amount: totalAmount,
    gasPrice: gasPrice,
    gasLimit: Zilliqa.utils.Long.fromNumber(50000)
  });

  
  // const callTx = await MultiSenderContract.call('multiSendV6',[{
  //   vname: "recipients",
  //   type: "List(Pair(ByStr20)(Uint128))",
  //   value: output
  // }],
  // {  
  //   amount: totalAmount,
  //   gasPrice: gasPrice,
  //   gasLimit: Zilliqa.utils.Long.fromNumber(50000)
  // },
  // 33,
  // 1000,
  // false,);
     
  
  
  //     console.log("hellllllllllllllllllllooooo"+JSON.stringify(callTx.receipt, null, 4));
  //     console.log("tesssssst"+callTx.result);
  //     alert("transacton confirmed");
  //     break;
   
  

  // MultiSenderContract.call('multiSendV3',[{
    // vname: "recipients",
    // type: "List(ByStr20)",
    // value: recipients
  // },{
    // vname: "amounts",
    // type: "String",
    // value: amounts
  // }],
  // {
    // gasPrice: gasPrice,
    // gasLimit: Zilliqa.utils.Long.fromNumber(50000)
  // });
       
  
  // }
      
      
output = [] ;
list.wallets = [];
list.tokens = [] ;
totalAmount = 0 ;
}

//Call to resultDeclartion transition
// function resultDeclartion(qId){
  // var userResp = prompt("Pl enter answer for QId "+qId+":");
  // if(userResp){
  // const gasPrice = Zilliqa.utils.units.toQa('1000', Zilliqa.utils.units.Units.Li);

  // MultiSenderContract.call('resultDeclartion',[{
    // vname: "qId",
    // type: "Uint32",
    // value: ""+qId
  // },{
    // vname: "userResp",
    // type: "String",
    // value: userResp
  // }],
  // {
    // gasPrice: gasPrice,
    // gasLimit: Zilliqa.utils.Long.fromNumber(25000)
  // });
  // }
// }

//Call to redeem transition
// function redeem(){
  // var qId = prompt("Pl enter QId to redeem:");
  // if(qId){
  // const gasPrice = Zilliqa.utils.units.toQa('1000', Zilliqa.utils.units.Units.Li);

  // MultiSenderContract.call('redeem',[{
    // vname: "qId",
    // type: "Uint32",
    // value: ""+qId
  // }],
  // {
    // gasPrice: gasPrice,
    // gasLimit: Zilliqa.utils.Long.fromNumber(25000)
  // });
  // }
// }

// Code to upload csv
function Upload() {
// let list={wallets:[], tokens:[]}
var fileUpload = document.getElementById("fileUpload");
var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
if (regex.test(fileUpload.value.toLowerCase())) {
    if (typeof (FileReader) != "undefined") {
        var reader = new FileReader();
        reader.onload = function (e) {
            var table = document.createElement("table");
            var rows = e.target.result.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");
      //Added for testing 12/6/2021 wallets and tokens combined
      arrTest.push(cells);
      //============
                if (cells.length > 1) {
                    list.wallets.push(cells[0].trim());
                    list.tokens.push(cells[1].trim());
                    var row = table.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                }
            }
            // var dvCSV = document.getElementById("dvCSV");
            // dvCSV.innerHTML = "";
            // dvCSV.appendChild(table);
            // console.log(list);
            // document.getElementById('wallets').value = list.wallets.join(',');
            // document.getElementById('amounts').value = list.tokens.join(',');
    // Added for testing to combine list.wallets and list.tokens array
    
    document.getElementById('walletAmount').value = arrTest;
    
        }
        reader.readAsText(fileUpload.files[0]);
    } else {
        alert("This browser does not support HTML5.");
    }
} else {
    alert("Please upload a valid CSV file.");
}
}


test();
