import { ILessonCode, ChapterCodeType } from '../../typings';

const l1: ILessonCode = {
  initialCode: `(* Start typing from the line below. *)`,
  answerCode: `(* Start typing from the line below. *)
scilla_version 0

contract SocialMediaPayment`
};

const l2: ILessonCode = {
  initialCode: `scilla_version 0

(* Insert the immutable variable declaration in parantheses after the contract name below *)
contract SocialMediaPayment

`,
  answerCode: `scilla_version 0
(* Insert the immutable variable declaration in parantheses after the contract name below *)
contract SocialMediaPayment (owner: ByStr20)`
};

const l3: ILessonCode = {
  initialCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
(* Start typing from the line below. *)
`,
  answerCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
(* Start typing from the line below. *)
field username : String = "Alice"`
};

const l4: ILessonCode = {
  initialCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"

(* Start typing from the line below *)
`,
  answerCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"

(* Start typing from the line below *)
transition changeName()
end`
};

const l5: ILessonCode = {
  initialCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"

transition changeName()
    (* Start typing from the line below *)
end`,
  answerCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"

transition changeName()
    (* Start typing from the line below *)
    newname = "Bob"
end`
};

const l6: ILessonCode = {
  initialCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"

transition changeName()
     newname = "Bob" (*Now that we’ll be having another line, don’t forget to include a semicolon at the end of of the previous line, i.e. after "Bob" *)
    (* Start typing from the line below *)
end`,
  answerCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"

transition changeName()
     newname = "Bob"; (*Now that we’ll be having another line, don’t forget to include a semicolon at the end of the previous line, i.e. after "Bob" *)
    (* Start typing from the line below *)
    username := newname
end`
};

const l7: ILessonCode = {
  initialCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"


(* Start typing in the parentheses below *)
transition changeName()
   username := newname 
end
`,
  answerCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"

(* Start typing in the parentheses below *)
transition changeName(newname: String)
    username := newname
end`
};

const l8: ILessonCode = {
  initialCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"
(*Declare the two new mutable variables below. You don’t need to use any semicolons to separate the lines outside the transitions*)

transition changeName(newname: String)
    username := newname
    (*Use ‘accept’ command in the line below which will accept the amount sent to this transition.*)

    (*Assign the value of the implicit variables to the new mutable variables in the lines below. You’ll need to use the semicolons to separate the lines in the transition*)

end
`,
  answerCode: `scilla_version 0

contract SocialMediaPayment (owner: ByStr20)
field username : String = "Alice"
field user_address : ByStr20 = 0x1234567890123456789012345678901234567890
field  user_tokens: Uint128 = Uint128 0

transition changeName(newname: String)
    username := newname;
    (*Use ‘accept’ command in the line below which will accept the amount sent to this transition.*)
    accept; 
    (*Assign the value of the implicit variables to the new mutable variables in the lines below. You’ll need to use the semicolons to separate the lines in the transition*)
    user_address := _sender;
    user_tokens := _amount

end`
};

const l9: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"
field player_address : ByStr20 = 0x1234567890123456789012345678901234567890
field player_zeal: Uint128 = Uint128 0

Transition changeName(newname: String)
    player_name := newname;
    player_address := _sender;
    player_zeal := _amount
end
`,
  answerCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"
field player_address : ByStr20 = 0x1234567890123456789012345678901234567890
field player_zeal: Uint128 = Uint128 0

Transition changeName(newname: String)
    player_name := newname;
    player_address := _sender;
    player_zeal := _amount
end`
};

const chapter1: ChapterCodeType = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

export default chapter1;
