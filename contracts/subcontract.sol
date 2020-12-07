// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

// 계약서에 담기는 내용의 갯수가 많고 solidity의 특성상 배열 return을 하기 위해서는 ABIEncoderV2를 사용해야 하지만 메모리적인 문제로 인해 사용하는 것에 부정적인 의견들이 많아
// 계약서에 담기는 내용을 하나의 항목으로 합쳐서 저장 후 js 서버단에서 ',' split으로 배열 형태로 바꿔서 진행
// uint는 양수만 가능 int는 음수 양수 가능 uint의 기본은 uint256과 같다. 
//

contract subcontract {
    struct contract_info{
        string contract_info;   //계약서에 담기는 total 내용
        string total_cost;      //계약금
        uint8 state;            //계약의 상태 0:계약서 등록 1:계약서 하청 서명(하청의 wallet address로 대체) 2:계약서 원청 확인 및 서명(원청의 wallet address로 대체) 9:계약서 서명 거절
        address a_company;      //원청의 주소 
        address b_company;      //하청의 주소
    }
    struct payment_list{
        uint64 contract_num;    //계약서의 문서번호
        uint8 state;            //대금 지급 상태 1:대금 지급 요청 2:대금 입금 3:대금 입금 확인
        string total_cost;      //계약금
        uint128 ready_made_cost;//기성금
        uint128 labor_cost;     //노무비
        uint128 exception_cost; //예외금
        string etc;             //예외금 신청 사유
    }
    
    mapping (uint64 => contract_info) internal sub_contract;    //계약서 문서번호를 통한 계약서 내역 mapping 선언
    mapping (uint64 => payment_list) internal payment_state;    //계약서 문서번호를 통한 대금 지급 상태 mapping 선언
    
    payment_list[] public payments;     //대급 지급 내역 배열 선언
    
    
    function enroll_contract (uint64 _contract_num, string memory _contract_info, string memory _total_cost) public {   //계약서 등록 function
        require(sub_contract[_contract_num].state == 0);    //계약의 state가 0인 경우에만 실행
        sub_contract[_contract_num].contract_info = _contract_info; //계약서에 담기는 total 내용을 sub_contract mapping의 contract_info에 저장
        sub_contract[_contract_num].total_cost = _total_cost;      //계약서의 계약금을 sub_contract mapping의 total_cost에 저장
    }
    
    function sign_contract (uint64 _contract_num) public {  //계약서 하청의 서명 function
        address b_company = sub_contract[_contract_num].b_company;      
        address signer = msg.sender;        //msg.sender는 contract 요청자의 주소
        require(b_company ==  0x0000000000000000000000000000000000000000);  //sub_contract의 b_company의 등록된 주소가 없는 경우에만 실행
        
        sub_contract[_contract_num].b_company = signer;     //sub_contract mapping의 b_company에 contract 요청자의 주소를 저장
        sub_contract[_contract_num].state = 1;              //sub_contract mapping의 state를 1로 변환
    }
    
    function refuse_contract (uint64 _contract_num) public { //하청이 계약서를 거절 할때 function
        address b_company = sub_contract[_contract_num].b_company;
        require(b_company ==  0x0000000000000000000000000000000000000000);  //sub_contract의 b_company의 등록된 주소가 없는 경우에만 실행
        address refuser = msg.sender;
        
        sub_contract[_contract_num].b_company = refuser;    //sub_contract mapping의 b_company에 contract 요청자의 주소를 저장
        sub_contract[_contract_num].state = 9;              //sub_contract mapping의 state를 9로 변환
        
    }
    
    function confirm_contract (uint64 _contract_num) public {   //원청이 하청이 서명한 계약서를 확인 및 서명 하는 function
        address confirmer = msg.sender;
        
        sub_contract[_contract_num].a_company = confirmer;  //sub_contract mapping의 a_company에 contract 요청자의 주소를 저장
        sub_contract[_contract_num].state = 2;              //sub_contract mapping의 state를 2로 변환
    }
    
    function view_contract (uint64 _contract_num) public view returns(string memory, uint8, address, address){  //mapping에 있는 data를 return에 주는 view function
        string memory contract_info_ = sub_contract[_contract_num].contract_info;
        uint8 state = sub_contract[_contract_num].state;
        address a_company = sub_contract[_contract_num].a_company;
        address b_company = sub_contract[_contract_num].b_company;
        return (contract_info_, state, a_company, b_company);   //입력받은 _contract_num에 mapping data를 return
    }
    
    function request_payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost, string memory _etc) public{ //대금 지급을 요청하는 function
        require(sub_contract[_contract_num].state == 2);    //sub_contract의 state 2인 경우에만 실행
        address checker = msg.sender;
        address b_company = sub_contract[_contract_num].b_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == b_company);      //contract 요청자가 sub_contract의 b_company가 맞는 경우에만 실행
        payment_state[_contract_num].contract_num = _contract_num;  //입력받은 계약 문서번호를 payment_state mapping에 저장
        payment_state[_contract_num].ready_made_cost = _ready_made_cost;    //입력받은 기성금을 payment_state mapping에 저장
        payment_state[_contract_num].labor_cost = _labor_cost;  //입력받은 노무비를 payment_state mapping에 저장
        payment_state[_contract_num].exception_cost = _exception_cost;  //입력받은 예외금을 payment_state mapping에 저장
        payment_state[_contract_num].state = 1;     //대금 지급 요청 state 1로 변환
        payment_state[_contract_num].etc = _etc;
        payments.push(payment_list(_contract_num, 1, total_cost, _ready_made_cost, _labor_cost, _exception_cost, _etc));    //입력 받은 모든 값을 payments 배열에 저장
    }

    function payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost, string memory _etc) public{
        require(sub_contract[_contract_num].state == 2);
        address checker = msg.sender;
        address a_company = sub_contract[_contract_num].a_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == a_company);  //contract 요청자가 sub_contract의 a_company가 맞는 경우에만 실행
        payment_state[_contract_num].state = 2;     //대금 지급 요청 state 2로 변환
        payments.push(payment_list(_contract_num, 2, total_cost, _ready_made_cost, _labor_cost, _exception_cost, _etc));    //입력 받은 모든 값을 payments 배열에 저장
    }

    function confirm_payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost, string memory _etc) public{
        require(sub_contract[_contract_num].state == 2);
        address checker = msg.sender;
        address b_company = sub_contract[_contract_num].b_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == b_company);      //contract 요청자가 sub_contract의 b_company가 맞는 경우에만 실행
        payment_state[_contract_num].state = 3;     //대금 지급 요청 state 3로 변환
        payments.push(payment_list(_contract_num, 3, total_cost, _ready_made_cost, _labor_cost, _exception_cost, _etc));    //입력 받은 모든 값을 payments 배열에 저장
    }

    function refuse_payment (uint64 _contract_num, uint128 _ready_made_cost, uint128 _labor_cost, uint128 _exception_cost, string memory _etc) public{
        require(sub_contract[_contract_num].state == 2);
        address checker = msg.sender;
        address a_company = sub_contract[_contract_num].a_company;
        string memory total_cost = sub_contract[_contract_num].total_cost;
        require(checker == a_company);  //contract 요청자가 sub_contract의 a_company가 맞는 경우에만 실행
        payment_state[_contract_num].state = 9;     //대금 지급 요청 state 9로 변환
        payments.push(payment_list(_contract_num, 9, total_cost, _ready_made_cost, _labor_cost, _exception_cost, _etc));    //입력 받은 모든 값을 payments 배열에 저장
    }
    
    function view_count() public view returns(uint256){     //payments 배열의 길이를 return
        return(payments.length);
    }
    
    function view_payment(uint _index) public view returns (uint64, uint8, string memory, uint128, uint128, uint128){       //입력 받은 _index의 payments 배열값을 return -> 대금지급 내역을 보여준다.
        return(payments[_index].contract_num, payments[_index].state, payments[_index].total_cost, payments[_index].ready_made_cost, payments[_index].labor_cost, payments[_index].exception_cost);
    }

    function view_payments (uint64 _contract_num) public view returns(string memory, uint8, address, address, uint8){       //apply_list에서 사용하기 위한 변수 값을 return하는 function
        string memory contract_info_ = sub_contract[_contract_num].contract_info;
        uint8 state = sub_contract[_contract_num].state;
        address a_company = sub_contract[_contract_num].a_company;
        address b_company = sub_contract[_contract_num].b_company;
        uint8 p_state = payment_state[_contract_num].state;
        return (contract_info_, state, a_company, b_company, p_state);
    }
    
    function view_payment_state(uint64 _contract_num) public view returns(string memory, uint128, uint128, uint128, uint8, string memory){  //입력 받은 계약 문서번호 대금 지급 상태를 return 하는 function
        string memory total_cost = payment_state[_contract_num].total_cost;
        uint128 ready_made_cost = payment_state[_contract_num].ready_made_cost;
        uint128 labor_cost = payment_state[_contract_num].labor_cost;
        uint128 exception_cost = payment_state[_contract_num].exception_cost;
        uint8 state = payment_state[_contract_num].state;
        string memory etc = payment_state[_contract_num].etc;
        return(total_cost, ready_made_cost, labor_cost, exception_cost, state, etc);
    }
        
}