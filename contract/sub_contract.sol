pragma solidity ^0.6.0;

contract subcontract {
    struct contract_info{
        string contract_info;
        string total_cost;
        uint8 state;
        address a_company;
        address b_company;
    }
    struct payment_list{
        uint64 contract_num;
        uint8 state;
        string total_cost;
        uint128 ready_made_cost;
        uint128 labor_cost;
        uint128 exception_cost;
    }
    
    mapping (uint64 => contract_info) internal sub_contract;
    
    payment_list[] public payments;
    
    
    function enroll_contract (uint64 _contract_num, string memory _contract_info, string memory _total_cost) public returns (string memory) {
        require(sub_contract[_contract_num].state == 0);
        sub_contract[_contract_num].contract_info = _contract_info;
        sub_contract[_contract_num].total_cost = _total_cost;
        return("enroll_contract complete");
    }
    
    function sign_contract (uint64 _contract_num) public returns (string memory) {
        address b_company = sub_contract[_contract_num].b_company;
        address signer = msg.sender;
        require(b_company ==  0x0000000000000000000000000000000000000000);
        
        sub_contract[_contract_num].b_company = signer;
        sub_contract[_contract_num].state = 1;
        return("sign_contract complete");
    }
    
    function refuse_contract (uint64 _contract_num) public returns (string memory){
        address b_company = sub_contract[_contract_num].b_company;
        require(b_company ==  0x0000000000000000000000000000000000000000);
        address refuser = msg.sender;
        
        sub_contract[_contract_num].b_company = refuser;
        sub_contract[_contract_num].state = 9;
        return("refuse_contract complete");
        
    }
    
    function confirm_contract (uint64 _contract_num) public returns (string memory) {
        address b_company = sub_contract[_contract_num].b_company;
        address confirmer = msg.sender;
        require(b_company !=  0x0000000000000000000000000000000000000000);
        
        sub_contract[_contract_num].a_company = confirmer;
        sub_contract[_contract_num].state = 2;
        return("confirm_contract complete");
    }
    
    function view_contract (uint64 _contract_num) public view returns(string memory, uint8, address, address){
        string memory contract_info = sub_contract[_contract_num].contract_info;
        uint8 state = sub_contract[_contract_num].state;
        address a_company = sub_contract[_contract_num].a_company;
        address b_company = sub_contract[_contract_num].b_company;
        return (contract_info, state, a_company, b_company);
    }
    
    function request_payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost) public returns(string memory){
        require(sub_contract[_contract_num].state == 2);
        address checker = msg.sender;
        address b_company = sub_contract[_contract_num].b_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == b_company);
        payments.push(payment_list(_contract_num, 0, total_cost, _ready_made_cost, _labor_cost, _exception_cost));
    }

    function payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost) public returns (string memory){
        require(sub_contract[_contract_num].state == 2);
        address checker = msg.sender;
        address a_company = sub_contract[_contract_num].a_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == a_company);
        payments.push(payment_list(_contract_num, 1, total_cost, _ready_made_cost, _labor_cost, _exception_cost));
    }

    function confirm_payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost) public returns(string memory){
        require(sub_contract[_contract_num].state == 2);
        address checker = msg.sender;
        address b_company = sub_contract[_contract_num].b_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == b_company);
        payments.push(payment_list(_contract_num, 2, total_cost, _ready_made_cost, _labor_cost, _exception_cost));
    }

    function refuse_payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost) public returns (string memory){
        require(sub_contract[_contract_num].state == 2);
        address checker = msg.sender;
        address a_company = sub_contract[_contract_num].a_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == a_company);
        payments.push(payment_list(_contract_num, 9, total_cost, _ready_made_cost, _labor_cost, _exception_cost));
    }
    
    function view_count() public view returns(uint256){
        return(payments.length);
    }
    
    function view_payment(uint _index) public view returns (uint64, uint8, string memory, uint128, uint128, uint128){
        return(payments[_index].contract_num, payments[_index].state, payments[_index].total_cost, payments[_index].ready_made_cost, payments[_index].labor_cost, payments[_index].exception_cost);
    }
        
}