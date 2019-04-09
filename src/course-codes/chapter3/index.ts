import { ILessonCode, ChapterCodeType } from '../../typings';

const l1: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end

(*Start typing from the line below*)

`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end

(*Start typing from the line below*)

transition register_user ()


end

  
  `
};

const l2: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end

(*type within  the brackets in the line below*)
transition register_user ()


end

`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end

(*type within  the brackets in the line below*)
transition register_user (user_address: ByStr20, twitter_username: String)


end
  
  `
};

const l3: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)


(*Start typing from the line below*)

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)


end
  
`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg
  
let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

(*Start typing from the line below*)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)


end
  
  `
};

const l4: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

(*Start typing from the line below*)

end
  


`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

(*Start typing from the line below*)
    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username]

end
  `
};

const l5: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username]
    
    
    (*Start typing from the line below*)


end
  


`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    
    
    (*Start typing from the line below*)

    already_exists = orb user_exists username_exists
end
  
  
  `
};

const l6: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists
    
      (*Start typing from the line below*)
      
end


`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0


contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists;
    
      (*Start typing from the line below*)
      
      match already_exists with
    | True =>
    
    | False =>


    end

      
end
  
  
  `
};

const l7: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
  (*Start typing from the line below to define the variable ‘user_exists_code’ of type Uint32 and value ‘2’*)

contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
    (*start typing from the line below*)

    | False =>


    end

      
end
  

`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
  (*Start typing from the line below to define the variable ‘user_exists_code’ of type Uint32 and value ‘2’*)
let user_exists_code = Uint32 2
  
contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
    (*start typing from the line below*)
     msg = {_tag: ""; _recipient: _sender; _amount: zero; code: user_exists_code};
     msgs = one_msg msg;
     send msgs


    | False =>


    end

      
end 
  
  `
};

const l8: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
let user_exists_code = Uint32 2
  
(*Start typing from the line below definition of a boolean  variable true ‘let true =True’ *)
  
  
contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
     msg = {_tag: ""; _recipient: _sender; _amount: zero; code: user_exists_code};
     msgs = one_msg msg;
     send msgs


    | False =>
    
        (*start typing from the line below*)

    end

      
end

`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
let user_exists_code = Uint32 2

(*Start typing from the line below definition of a boolean  variable true ‘let true =True’ *)
let true = True
  
contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
     msg = {_tag: ""; _recipient: _sender; _amount: zero; code: user_exists_code};
     msgs = one_msg msg;
     send msgs


    | False =>
    
        (*start typing from the line below*)
         users[user_address] := twitter_username;
         used_usernames[twitter_username] := true


    end

      
end  
  `
};

const l9: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
let user_exists_code = Uint32 2

let true = True
  
contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
     msg = {_tag: ""; _recipient: _sender; _amount: zero; code: user_exists_code};
     msgs = one_msg msg;
     send msgs


    | False =>
   
      users[user_address] := twitter_username;
      used_usernames[twitter_username] := true
      
       (*Start typing from the line below.  Don’t forget to use a semicolon at the end of the previous line *)   

    end

      
end   


`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
let user_exists_code = Uint32 2

let true = True
  
contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
     msg = {_tag: ""; _recipient: _sender; _amount: zero; code: user_exists_code};
     msgs = one_msg msg;
     send msgs


    | False =>
   
      users[user_address] := twitter_username;
      used_usernames[twitter_username] := true;
      
       (*Start typing from the line below.  Don’t forget to use a semicolon at the end of the previous line *)  
       
       e = {_eventname : "register_user";
                user: user_address;
                username: twitter_username};
        event e

    end

      
end 
  `
};

const l10: ILessonCode = {
  initialCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
let user_exists_code = Uint32 2

let true = True
  
contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
     msg = {_tag: ""; _recipient: _sender; _amount: zero; code: user_exists_code};
     msgs = one_msg msg;
     send msgs


    | False =>
   
      users[user_address] := twitter_username;
      used_usernames[twitter_username] := true
      
       (*Start typing from the line below.  Don’t forget to use a semicolon at the end of the previous line *)   

    end

      
end   


`,
  answerCode: `scilla_version 0
import BoolUtils

library SocialMediaPayment

let one_msg = 
  fun (msg : Message) => 
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg

let zero = Uint128 0
let not_owner_code = Uint32 1
let accepted_code = Uint32 0
let user_exists_code = Uint32 2

let true = True
  
contract SocialMediaPayment(owner: ByStr20)

field users: Map ByStr20 String
    = Emp ByStr20 String

field used_usernames: Map String Bool
    = Emp String Bool

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
        accept;
        msg = {_tag: "";
                _recipient: _sender;
                _amount: zero;
                code: accepted_code};
        msgs = one_msg msg;
        send msgs
        
     end
end


transition register_user (user_address: ByStr20, twitter_username: String)

    user_exists <- exists users[user_address];
    username_exists <- exists used_usernames[twitter_username];
    already_exists = orb user_exists username_exists ;     
    match already_exists with
    | True =>
    
     msg = {_tag: ""; _recipient: _sender; _amount: zero; code: user_exists_code};
     msgs = one_msg msg;
     send msgs


    | False =>
   
      users[user_address] := twitter_username;
      used_usernames[twitter_username] := true;
      
       (*Start typing from the line below.  Don’t forget to use a semicolon at the end of the previous line *)  
       
       e = {_eventname : "register_user";
                user: user_address;
                username: twitter_username};
        event e

    end

      
end 
  `
};

const chapter3: ChapterCodeType = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

export default chapter3;
