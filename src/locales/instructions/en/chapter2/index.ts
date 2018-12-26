import { IChapterInstruction } from '../../../../typings';

const l1 = `
## Lesson 1: Map1- Declaration\n
In the last chapter, we learned how to declare some variables associated with the player and then change them as required.
However, we were still storing the details of a single player. For any actual game, we’ll usually need to store the details of many players.
In order to do this, we’ll be using ‘Maps’.
\`Map\` values provide key-value store.
Which means that you can store the value against a particular key value which should be unique. Then, you can later provide the key and request to retrieve the value stored against it.
 Keys can have types \`IntX\`, \`UintX\`, \`String\`, \`ByStr32\` or \`ByStr20\`. Values can be of any type.

Largely, there are three types of operations that we’ll be performing with maps:
1. Declaring a map
2. Modifying the values within a map
3. Retrieving value from a map

We’ll go through these operations step by step to build a database for storing the details of the players.

The first thing to decide while declaring a map is what should be the key-pair value for the map.
Here, we first want to store the name of the player who calls the function. To do so, we’ve to store it against a key which is unique in value.
It will be ideal to use ‘Wallet address’ as the key in this case, since each wallet address is unique, and by doing this we can ensure that one wallet doesn’t create more than one players.

So the key will be of type \`ByStr20\` and value will be of type \`String\`
The format for declaration of a map can vary depending upon the type of key and value chosen, the part of the contract where it’s declared and also depending on the initial values being fixed or empty.
(Full list of Scilla variable declaration formats can be found [here](https://docs.google.com/spreadsheets/d/17h6q3QJi_tDUsakzzNpKKXaAGJs5Ctg5tlR1y7i5o64/edit#gid=0)


For this case, let’s start with declaring a map  that’s empty, i.e. it’s initialized without values.
The format for that is:
\`\`\`
field a: Map [variabletype1] [variabletype2] = Emp [variabletype1] [variabletype2]
\`\`\`

Eg.
\`\`\`
field a: Map Int32 Uint32 = Emp Int32 Uint32
\`\`\`

**Task:**

Declare the map in the main body of the contract that’s empty and has a key of type \`ByStr20\` and value of type \`String\`.
`;
const l2 = `
## Lesson 2: Reading map value in a temporary variable \n

Now that we’ve declared an empty map, we’ll need to populate it with data.
As mentioned earlier, adding a value to a map is done in multiple steps.
Before we make any changes, we ensure that the map’s value is stored in another variable as a safety measure. It can be done in the following format within a transition:


\`x <- f\` : Read from a mutable field \`f\` into \`x\`


Do notice that there is no variable type involved in such declaration. The new variable that is created will be of the same type as the variable that it reads from.


**Task:**

Create a variable “r” that reads the existing value of the map “map_Name”

`;
const l3 = `
## Map 3: \`Put\`\n
Our objective is to add a new key value pair to the map that we have created.
In order to do so, in the last chapter we got one of the variables to store the ‘value’ of the map.
Now this allows us to securely do any operations on the original value.

We have to add a new value to the map, the format to do so is:


[New Variable] = builtin put [Map Variable] [New Key] [New Value]

Let’s look at the various parts of this format:
builtin
We can have two types of functions, one that are pre-defined and one that are defined by the user in the library of the contract.
To distinguish them, we use ‘builtin’ before any other keywords used for pure operations.
Finally, the expression of “put [Map Name] [New Key] [New Value]” returns a new map with the newly inserted key/value in addition to the key/value pairs contained earlier. Since this returns a new map, it has to be stored in a variable and we can do it as shown in the format above.
An example will be:
tempvar1 = builtin put map1 keyvar valuevar
Where tempvar1 need not be declared, it will be the same type of map as map1 which is a mutable variable.
Do note that keyvar and valuevar need to be variables which have been defined before either in the main body or in the transition. We can’t use direct values in this expression. So rather than directly putting a value of 5 against a key, we will need to first store the value 5 in a variable, say valuevar, and then assign it here in the expression.

**Task:**

We want to store the name that we receive from the user in the map. The unique id of the user is his wallet.
So, put the value of “newname” received from the user when the transition is called, against the key “_sender” which is an implicit variable included in the call, in the map “map_Name”.
Store the new map obtained  it in a variable r1.
`;

const l4 = `
## Lesson 4: Transition \n
The smart contract code on blockchain needs some interfaces so that the commands,
information or tokens can be sent to the smart contract or be requested from it.
Transitions are similar to functions or methods in other languages.
A transition is declared using the keyword transition. The end of a transition scope is declared using the keyword end.
The transition keyword is followed by the transition name. Then follows the input parameters within (). Each input parameter is separated by a , and is declared in the following format: variablename : variabletype

The format is:
\`\`\`
transition [transitionname] (variablename : variabletype)
end
\`\`\`
Example:
\`\`\`
transition setHello (msg : String)
end
\`\`\`
In order to use a smart contract, a transition within the smart contract will have to be called.
It can be called directly or by another program or smart contract.

Task:
So far, we have a fixed value for our playername variable, which is "Alice"
Let’s have an option that the name could be changed. To change a mutable variable, we’ll need a transition.
Declare a transition with the name "changeName".
You don’t need to pass any variables to it right now, so the brackets after the name will be empty.
There will be no code in the body of the transition at the moment.
We’ll fill it in later. For now, just declare an empty transition named "changeName",
and close it by using the keyword "end"
`;

const l5 = `
## Lesson 5: Declaring a temporary variable \n

We can also declare variables with a transition.
Do note that these variables are not immutable variables nor are they mutable variables
even though their values can be changed. This is because their value is never stored in the blockchain.
Rather they are temporary variables whose scope is limited within the transition for the duration of that single call.

The variable declaration format is different from the way that mutable variables are declared.
For instance, a String variable is declared in the following format:
\`\`\`
{varibale name} = {value}
\`\`\`
Example:
\`\`\`
a = "hello"
\`\`\`
In a transition, if there are multiple lines, then they are separated by semicolons.
Let’s take a look at an example of a transition with two variables declared in it:

Example:
\`\`\`
Transition foo()
a= "hello"
b= Int32 5
end
\`\`\`
In this example, we declare two variables in a transition named "foo".
The first variable is a string type variable that stores the value hello.
The second variable is an integer type variable that stores the value 5.

Notice two things in this example:
The two lines within the transition are separated by a single semicolon.
We don’t use a semicolon after the declaration of the variable "b" because there are no further lines in the transition seen in the example.
The format of the declaration of a String variable is different from the format of declaration of an integer variable.
You can find the full list of the declaration format of all the major variable types (in the main body of the contract, and in the transition) in the link below:
Link: -------------

Task:
We want to replace the original player name declared in mutable variable "player_name" in this transition. To do that, we will need a new name.
Declare a new variable with the name "newname" and type "String" and give it a value "Bob";
`;
const l6 = `
## Lesson 6: Changing a mutable field \n
As stated earlier, the variable declared in the transition is a temporary variable that isn’t stored in the blockchain
and exists for the duration that the transition is called.
In order to ensure that the value is stored in the blockchain,
it has to be transferred to a mutable variable.
Changing a mutable variable is a significant operation and if done in a wrong manner,
it could lead to security issues for the smart contract.
We’ll explore this in more detail in the later lessons.
At the moment, we simply need to assign the value of the temporary variable to the mutable variable.
The format of such an assignment is:
\`\`\`
{mutable variable name} := {temporary variable name}
\`\`\`
Eg.
\`\`\`
mutvar1 := tempvar1
\`\`\`
Task:

Update the mutable variable "player_name" with the value of the temporary variable "newname" in the body of the transition.
`;
const l7 = `
## Lesson 7: Getting values \n
You’ll notice the issue with the previous chapter that the new player is always changed to a fixed value each time that the transition is called.
Ideally, we’ll like to have options other than "Bob" about the new name which is updated. This can be done by letting the user pass on a value to the transition whenever she’s calling it.
Similar to how we could have passed variables to the contract while creating it, we could also pass variables to a transition while calling it.
The format for declaring these temporary variables- that have to be sent by a user when she calls the transition- is as follows:
\`\`\`
Transition {transition name} (
  {variable name_1} : {variabe type_1}
)
  ...
end
\`\`\`


In case we want to declare multiple variables here, then we can do so by separating the variable name and variable types by commas, as shown below:
\`\`\`
Transition {transition name} (
  {variable name_1} : {variabe type_1},
  {variable name_2} : {variabe type_2},
  {variable name_3} : {variabe type_3}
)
  ...
end
\`\`\`
Example:
\`\`\`
Transition foo (
  var1: String,
  var2: Int32,
  var3 Uint32
)
end
\`\`\`
Task:
We want to change the name of the player ‘Alice’ that we’ve earlier stored in the mutable variable ‘player_name’. To do this, we created the transition ‘changeName’ and assigned a fixed value variable declared there to ‘player_name’.
In order to make the change more flexible, we’ll also need the new name each time the transition is called. So, we’ll delete the old variable declaration in the body of the transition.
Now, include the parameter with name "newname" and variable type "String" in the declaration of the transition so that a user has to send a new name for the player each time she wishes to change the old value.
`;
const l8 = `
## Lesson 8: Implicit variables \n
In addition to parameters that are explicitly declared in the definition, each transition has available to it, the following implicit parameters:

The account address that triggered this transition. In case, the transition was called by a contract account instead of a user account, then _sender is the contract address.
\`\`\`
_sender : ByStr20
\`\`\`

Incoming amount (ZILs) sent by the sender. This amount must be explicitly accepted using the accept statement within the transition. The money transfer does not happen if the transition does not execute accept.
\`\`\`
_amount : Uint128
  \`\`\`
Task:
Declare two new mutable variables: player_address of type ByStr20 with value "0x1234567890123456789012345678901234567890" and player_zeal of type Uint128 with value 0 in the contract
Then in the transition, assign these variables the value of _sender and _amount respectively.


As mentioned earlier, you can refer to the variable declaration format of all types in the link below. [Link]
`;
const l9 = `
## Lesson 9: Summary \n
Chapter Number and title: Summary
Lesson contents (includes the task at the end)
Congrats!
You’ve learned:
* how to declare a new contract,
* how to declare a new transition,
* how to declare immutable variables,
* how to declare mutable variables,
* how to declare temporary variables in the transition,
* how to use the implicit variables in a transition,
* how to change the value of mutable variables in the transition.

You’ve learned the general structure of a contract which looks like the following:
(* Scilla contract structure *)

\`\`\`
(***************************************************)
(*               Associated library                *)
(***************************************************)

library MyContractLib


(* Library code block follows *)



(***************************************************)
(*             Contract definition                 *)
(***************************************************)

contract MyContract

(* Immutable fields declaration *)

(vname_1 : vtype_1, vname_2 : vtype_2)

(* Mutable fields declaration *)

field vname_1 : vtype_1 = init_val_1
field vname_2 : vtype_2 = init_val_2

(* Transitions *)

(* Transition signature *)
transition firstTransition (
  param_1 : type_1,
  param_2 : type_2
)
  (* Transition body *)
end

transition secondTransition (param_1: type_1)
  (* Transition body *)
end
\`\`\`

You’ve defined a player which has certain attributes such as name, address and a game specific stat called zeal.
However, we wouldn’t want to repeat these steps for every single player.
We need a way to store and retrieve a bunch of similar data.
In the next lesson, we’ll see how to use maps to do that.
`;

const chapter2: IChapterInstruction = {
  title: 'Intermediate',
  lessons: [l1, l2, l3, l4, l5, l6, l7, l8, l9]
};

export default chapter2;
