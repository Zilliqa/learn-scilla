import { ILessonCode, ChapterCodeType } from '../../typings';

const l1: ILessonCode = {
  initialCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
(*Start typing from the line below*)
`,
  answerCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
(*Start typing from the line below*)

transition deposit()

end 
`
};

const l2: ILessonCode = {
  initialCode: `scilla_version 0

(*Start typing from the line below*)


contract SocialMediaPayment(owner: ByStr20)

transition deposit()

end
`,
  answerCode: `scilla_version 0

(*Start typing from the line below*)
import BoolUtils

contract SocialMediaPayment(owner: ByStr20)

transition deposit()

end`
};

const l3: ILessonCode = {
  initialCode: `scilla_version 0
  import BoolUtils

contract SocialMediaPayment(owner: ByStr20)

transition deposit()
(*Start typing from the line below. The answer will be a single line within the transition so you won’t need to use semicolon at the end*)

end
`,
  answerCode: `scilla_version 0
  import BoolUtils

contract SocialMediaPayment(owner: ByStr20)

transition deposit()
(*Start typing from the line below. The answer will be a single line within the transition so you won’t need to use semicolon at the end*)

sender_is_owner = builtin eq _sender owner


end`
};

const l4: ILessonCode = {
  initialCode: `scilla_version 0
  import BoolUtils

contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner
(*Start typing from the line below. *)

end
`,
  answerCode: `scilla_version 0
  import BoolUtils

contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
(*Start typing from the line below. *)
match sender_is_owner with
     | False =>

     | True =>

     end
end`
};

const l5: ILessonCode = {
  initialCode: `scilla_version 0
  import BoolUtils
  (*Start typing from the line below. First define the library*)
  
  (*Now define the variable zero for Uint128 0*)


  (*Now, in the line below, define the variable not_owner_code of type Uint32 and value 1*)


contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>

     | True =>

     end
end
`,
  answerCode: `
  scilla_version 0
  import BoolUtils
  (*Start typing from the line below. First define the library*)
  library SocialMediaPayment
  
  (*Now define the variable zero for Uint128 0*)
  let zero = Uint128 0


  (*Now, in the line below, define the variable not_owner_code of type Uint32 and value 1*)
  let not_owner_code = Uint32 1

contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>

     | True =>

     end
end`
};

const l6: ILessonCode = {
  initialCode: `
  scilla_version 0
  import BoolUtils
  
  library SocialMediaPayment
  (*Start typing from the line below. Copy paste the code given in the first task below to define the variable one_msg*)
  
  
  let zero = Uint128 0
  let not_owner_code = Uint32 1

contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>
     (*Start typing from the line below. Define the variable msg below with the values given in the second point of the task*)


    (*Start typing from the line below. Copy the two lines given in the third point of the task below. *)


     | True =>

     end
end
`,
  answerCode: `
  scilla_version 0
  import BoolUtils
  
  library SocialMediaPayment
  (*Start typing from the line below. Copy paste the code given in the first task below to define the variable one_msg*)
  let one_msg = 
    fun (msg : Message) => 
    let nil_msg = Nil {Message} in
    Cons {Message} msg nil_msg
  
  let zero = Uint128 0
  let not_owner_code = Uint32 1

contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>
     (*Start typing from the line below. Define the variable msg below with the values given in the second point of the task*)

          msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: not_owner_code};
    (*Start typing from the line below. Copy the two lines given in the third point of the task below. *)
          msgs = one_msg msg;
          send msgs

     | True =>

     end
end
  `
};

const l7: ILessonCode = {
  initialCode: `
    scilla_version 0
  import BoolUtils
  
  library SocialMediaPayment
  
  let one_msg = 
    fun (msg : Message) => 
    let nil_msg = Nil {Message} in
    Cons {Message} msg nil_msg
  
  let zero = Uint128 0
  let not_owner_code = Uint32 1
(*Start typing from the line below. declare a Uint32 type of variable with variable name “accepted_code” and value “0” *)



contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>
     
          msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: not_owner_code};
          msgs = one_msg msg;
          send msgs

     | True =>
        (*Start typing from the line below for task 2, 3 and 4*)
        
        
     end
end
`,
  answerCode: `
 scilla_version 0
  import BoolUtils
  
  library SocialMediaPayment
  
  let one_msg = 
    fun (msg : Message) => 
    let nil_msg = Nil {Message} in
    Cons {Message} msg nil_msg
  
  let zero = Uint128 0
  let not_owner_code = Uint32 1
    (*Start typing from the line below. declare a Uint32 type of variable with variable name “accepted_code” and value “0” *)
  let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>
     
          msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: not_owner_code};
          msgs = one_msg msg;
          send msgs

     | True =>
        (*Start typing from the line below for task 2, 3 and 4*)
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end
  `
};

const l8: ILessonCode = {
  initialCode: `
    scilla_version 0
  import BoolUtils
  
  library SocialMediaPayment
  
  let one_msg = 
    fun (msg : Message) => 
    let nil_msg = Nil {Message} in
    Cons {Message} msg nil_msg
  
  let zero = Uint128 0
  let not_owner_code = Uint32 1
(*Start typing from the line below. declare a Uint32 type of variable with variable name “accepted_code” and value “0” *)



contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>
     
          msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: not_owner_code};
          msgs = one_msg msg;
          send msgs

     | True =>
        (*Start typing from the line below for task 2, 3 and 4*)
        
        
     end
end
`,
  answerCode: `
 scilla_version 0
  import BoolUtils
  
  library SocialMediaPayment
  
  let one_msg = 
    fun (msg : Message) => 
    let nil_msg = Nil {Message} in
    Cons {Message} msg nil_msg
  
  let zero = Uint128 0
  let not_owner_code = Uint32 1
    (*Start typing from the line below. declare a Uint32 type of variable with variable name “accepted_code” and value “0” *)
  let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

transition deposit()
sender_is_owner = builtin eq _sender owner;
match sender_is_owner with
     | False =>
     
          msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: not_owner_code};
          msgs = one_msg msg;
          send msgs

     | True =>
        (*Start typing from the line below for task 2, 3 and 4*)
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end
  `
};

const chapter2: ChapterCodeType = [l1, l2, l3, l4, l5, l6, l7, l8];

export default chapter2;
