var express = require("express");
var router = express.Router();
var Web3 = require("web3");
var product_contract = require("../contract/contract.js");

var mysql = require('mysql2');
const contract = require("../contract/contract.js");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'subcontract'
})


var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var smartcontract = new web3.eth.Contract(
  product_contract.abi,
  product_contract.address
);


module.exports = function () {
  router.get("/", function (req, res, next) {
    res.render("payment/payment_company");
  });

  router.route("/apply_list").get(function (req, res, next) {web3.eth.getAccounts(function(err, ass){
    if(err != null){
      console.log(err);
      return
    }
    if(ass.length == 0){
      console.log("Account defind")
    }
    console.log(ass[0]);
    connection.query(
      `select count(*) as cnt from contract`,
      function(err, result){
        if(err){
          console.log(err)
        }else{
          const count = result[0].cnt;
          console.log(count);
          connection.query(
            `select contract_num from contract`,
            function(err, result2){
              if(err){
                console.log(err)
              }else{
                var contract_list = new Array();
                var contract_state = new Array();
                var payment_list = new Array();
                for(var i =0; i < count; i++){
                  console.log(result2[i].contract_num);
                  smartcontract.methods
                  .view_contract(result2[i].contract_num)
                  .call()
                  .then(function (receipt) {
                    console.log(receipt[0]);
                    console.log(receipt[1]);
                    const contract_info = receipt[0].split(",");
                    contract_list.push(contract_info);
                    contract_state.push(receipt[1]);
                    
                    smartcontract.methods
                    .view_payment_state(result2[i].contract_num)
                    .call()
                    .then(function (receipt2) {
                      const payment_state = receipt2[4];
                      payment_list.push(payment_state);
                  });
                  });
                }
                setTimeout(() => {
                  console.log(contract_list);
                  res.render("payment/apply_list", 
                  {
                    contract_info : contract_list, 
                    contract_state : contract_state, 
                    payment_list: payment_list
                  })
                }, 2000);
              }
            }
          )
        }
      }
    )    
  })
}
);

router.route("/list").get(function (req, res, next) {web3.eth.getAccounts(function(err, ass){
  if(err != null){
    console.log(err);
    return
  }
  if(ass.length == 0){
    console.log("Account defind")
  }
  console.log(ass[0]);
  connection.query(
    `select count(*) as cnt from contract`,
    function(err, result){
      if(err){
        console.log(err)
      }else{
        const count = result[0].cnt;
        console.log(count);
        connection.query(
          `select contract_num from contract`,
          function(err, result2){
            if(err){
              console.log(err)
            }else{
              var contract_list = new Array();
              var contract_state = new Array();
              for(var i =0; i < count; i++){
                console.log(result2[i].contract_num);
                smartcontract.methods
                .view_contract(result2[i].contract_num)
                .call()
                .then(function (receipt) {
                  console.log(receipt[0]);
                  console.log(receipt[1]);
                  const contract_info = receipt[0].split(",");
                  contract_list.push(contract_info);
                  contract_state.push(receipt[1]);
                });
              }
              setTimeout(() => {
                console.log(contract_list);
                res.render("payment/contract_list", 
                {
                  contract_info : contract_list, 
                  contract_state : contract_state,
                })
              }, 2000);
            }
          }
        )
      }
    }
  )    
})
}
);

router.route("/p_list").get(function (req, res, next) {
  const contract_num = req.query.contract_num;
  console.log(contract_num);
  web3.eth.getAccounts(function(err, ass){
    if(err != null){
      console.log(err);
      return
    }
    if(ass.length == 0){
      console.log("Account defind")
    }    
    smartcontract.methods
    .view_count()
    .call()
    .then(function (receipt) {
      console.log(receipt);
      var payment_list = new Array();
      for(var i=0;i < receipt;i++){
        smartcontract.methods
        .view_payment(receipt)
        .call()
        .then(function (receipt2) {
          payment_list.push(receipt2);
        });
      }
      res.render("payment/payment_list", {payment_list: payment_list});
    });
  })
});

  router.route("/request").get(function (req, res, next) {
    res.render("payment/request_payment");
  });

  router.route("/pay").get(function (req, res, next) {
    res.render("payment/request_payment");
  });
  
  router.route("/confirm").get(function (req, res, next) {
    res.render("payment/request_payment");
  });

  router.route("/view").get(function (req, res, next) {
    res.render("payment/view_payment");
  });

  router.route("/refuse").get(function (req, res, next) {
    res.render("payment/refuse_payment");
  });

  return router;
};
