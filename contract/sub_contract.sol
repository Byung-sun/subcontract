pragma solidity ^0.6.0;

contract subcontract {
    struct contract_info{
        string contract_info;
        uint8 state;
        address a_company;
        address b_company;
    }
    
    mapping (uint64 => contract_info) internal sub_contract;
    
    function enroll_contract (uint64 _contract_num, string memory _contract_info) public returns (string memory) {
        require(sub_contract[_contract_num].state == 0);
        sub_contract[_contract_num].contract_info = _contract_info;
        return("enroll_contract complete");
    }
    
    function sign_contract (uint64 _contract_num, string memory _contract_info) public returns (string memory) {
        address b_company = sub_contract[_contract_num].b_company;
        address signer = msg.sender;
        require(b_company ==  0x0000000000000000000000000000000000000000);
        
        sub_contract[_contract_num].contract_info = _contract_info;
        sub_contract[_contract_num].b_company = signer;
        sub_contract[_contract_num].state = 1;
        return("sign_contract complete");
    }
    
    function refuse_contract (uint64 _contract_num, string memory _contract_info) public returns (string memory){
        address b_company = sub_contract[_contract_num].b_company;
        require(b_company ==  0x0000000000000000000000000000000000000000);
        address refuser = msg.sender;
        
        sub_contract[_contract_num].contract_info = _contract_info;
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
        address checker = msg.sender;
        string memory contract_info = sub_contract[_contract_num].contract_info;
        uint8 state = sub_contract[_contract_num].state;
        address a_company = sub_contract[_contract_num].a_company;
        address b_company = sub_contract[_contract_num].b_company;
        //require(checker == a_company || checker == b_company);
        return (contract_info, state, a_company, b_company);
    }
        
    
}