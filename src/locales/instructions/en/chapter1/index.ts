import { IChapterInstruction } from '../../../../typings';

const l1 = `
## Lesson 1: Contract declaration

**Declaring a contract:**

Let’s begin from the basics.
First of all, you’ll need to specify which Scilla version you’re working with. At the moment of writing, Scilla is at version 0.2.0. We only need to be concerned with the first digit, which is zero here, so you will need to type:

\`\`\`
scilla_version 0
\`\`\`

Now, we can start with the main part of the smart contract coding. The contract that you’ll be deploying to the blockchain has to have a name by which it could later be identified.
The format for specifying the contract name is simply:


\`\`\`
contract ContractName
\`\`\`

Where you replace the \`ContractName\` with the actual name for your contract.

Do note that the contract name has to start with a capital letter.

## Task

1. Begin with the version declaration of Scilla as shown above.
2. Then, in next line, declare a contract which should be called \`SocialMediaPayment\`.



`;
const l2 = `
## Lesson 2: Immutable variables

Any contract deployed on the blockchain is immutable. In other words, that code can’t be changed. This is one of the main reasons why security of smart contracts is a fundamental concern from the very start of the coding stage, or perhaps even before that.

Now, while deploying the contract on the blockchain, you can also initiate certain parameters. Once initialized, the values of these parameters won’t change, i.e. the values of these variables can’t be changed later. They are called immutable variables.

For instance, when somebody finally deploys a contract code on the blockchain, their wallet address is also passed along with the code. It’s often useful to store this address as an immutable variable because wallet addresses can serve as an identity, just like unique email addresses. But instead of sending and receiving emails, wallet addresses are primarily used for sending and receiving digital assets. You may want to store a wallet address as the address of the contract’s owner to uniquely identify the owner and grant her different access rights if required.

You can then use this immutable variable that stores the owner’s wallet address as a check, so that certain operations in the contract can only be carried out by the owner. The important part about storing the address as an immutable variable is that by doing this, the address of the owner can’t be changed by a third party. (Or else, there’s a possibility that a hacker might be able to change the owner address to her own wallet address and then act maliciously as the new owner)

To declare an immutable variable, we need to pay attention to two factors:-

Variable name: This is the identifier of the variable to be used by various operators later in the contract.

Variable type: Variable types represent the kind of data stored in the variable, such as text or numbers etc. We’ll discuss variable types in more detail shortly.

The format for specifying an immutable variable is:

\`\`\`
contract ContractName
(variablename1: variabletype1)
\`\`\`
Where \`variablename1\` and \`variabletype1\` can be replaced by the chosen variable name and type.

For e.g. ,
\`\`\`
contract  Example123 (var1: ByStr20)
\`\`\`


If there are multiple immutable variables, then you can include them as follows:
\`\`\`
contract ContractName
(
    variablename1: variabletype1,
    variablename2: variabletype2,
    variablename3: variabletype3
)
\`\`\`

For e.g.,
\`\`\`
contract  Example123 (a: Uint128, b: String)
\`\`\`


Here, multiple immutable variables are declared by separating them with commas.
The language supports several datatypes, such as  \`Int32\` (to represent 32-bit integers),
\`ByStr20\` ( a sequence of hexadecimal characters that represents 20 bytes. This data type is most convenient to store wallet addresses and will be often used in smart contracts).
A detailed list can be seen in the cheat sheet in the left bottom corner of the website.

There are many such data types in Scilla with different types of declaration and that is intentional so that later automated checks on the program can be run more easily.

As Robin Milner once said: *"Well typed programs don’t go wrong"*

We’ll only be introducing some of the data types through these tutorials.
For a detailed list of all the types, kindly refer to the 'cheat sheet' in the navigation menu above.

## Task

In our last exercise, we had declared a contract called \`SocialMediaPayment\`. It should have one immutable variable with the name \`owner\` and the variable should be of type \`ByStr20\`.


`;
const l3 = `
## Lesson 3: Mutable variables

A smart contract is not much different from a regular program. It takes certain inputs, operates on them and returns an output. Any operation may also require reading other data from the memory or storage.

For doing operations on data, we usually need to have variables whose value will be changed by the code in the contract.

These variables, which can be updated but are still stored on the blockchain are known as mutable variables.

At this point, new students often ask how you can store something mutable on an immutable blockchain. The answer is that what remains immutable is the history of how that variable’s value changed over the time. But only the latest value is actually considered by the contract to be the true value of the variable.

For e.g. , If you had USD 100 at the beginning of the month and spent USD 40 by the end of it then the bank will have a clear transaction history which you can’t change even though you can certainly change your current balance by depositing or withdrawing more money. In this example your current balance is a mutable variable but the balance-sheet itself is immutable.

To declare a mutable variable, we need to pay attention to three factors:-
Variable name: This is the identifier of the variable to be used by various operators later in the contract.
Variable type: Choose the appropriate type of the variable. Such as \`Uint128\` for amounts, String for names, \`ByStr20\` for addresses etc.
Variable value: We may choose to declare a variable with or without an initial value.

The format for the mutable variable declaration might slightly vary depending on the variable type and variable value. You can access the list of the most important permutations in the variable declarations in the Cheat Sheet given in bottom left corner of this page. For now, let’s look at the format for a simple mutable variable that will contain a text/string value.


\`\`\`
field variableName : variableType = "Variable Text"
\`\`\`

The VariableType is ‘String’ in the current case.

Eg.
\`\`\`
field a : String = "hello"
\`\`\`

The important point to know is that in the smart contract security, changing the value of a mutable variable is a very important step and if done wrong, such a change could inadvertently result in major security vulnerabilities. We’ll see later how that issue can be handled in a methodical way in Scilla.


## Task

Let’s start with having a simple variable that stores the name of a user.
Declare a variable with following details:
* Variable name: \`username\`
* Variable type: \`String\`
* Variable value: \`Alice\`
`;

const l4 = `
## Lesson 4: Transition

The smart contract code on blockchain needs to be able to interact with the external world for the contract to be actually useful; in other words it needs some interfaces so that the commands, data or tokens can be sent to the smart contract or be requested from it.
This is achieved by having transitions in the smart contract.
Transitions are similar to ‘functions’ or ‘methods’ in other languages.
A transition is declared using the keyword ‘transition’. The end of a transition scope is declared using the keyword ‘end’. The transition keyword is followed by the transition name. Then follows the input parameters within (). Each input parameter is separated by a comma and is declared in the following format: variablename : variabletype


The format is:
\`\`\`
transition transitionName (variablename : variabletype)

end
\`\`\`
Example:
\`\`\`
transition setHello (msg : String)
end
\`\`\`
In order to use a smart contract, a transition within the smart contract will have to be called.
It can be called directly or by another program or smart contract.

## Task

So far, we have a fixed value for our username variable, which is "Alice".
Let’s have an option that the name could be changed. To change a mutable variable, we’ll need a transition.

Declare a transition with the name \`changeName\`.
You don’t need to pass any variables to it right now, so the brackets after the name will be empty.

There will be no code in the body of the transition at the moment.
We’ll fill it in later. For now, just declare an empty transition named \`changeName\`,
and close it by using the keyword \`end\`
`;

const l5 = `
## Lesson 5: Variable declaration in a transition

We can also declare variables within a transition.
Do note that these variables are not immutable variables nor are they mutable variables like the ones we learned about earlier even though the values of these variables that exist within a transition can also be changed. This is because their value is never stored on the blockchain. Rather they are temporary variables whose scope is limited within the transition for the duration of that single call.

The temporary variable declaration format is different from the format in which the mutable variables are declared. For instance, a String variable is declared in the following format:
\`\`\`
variableName = "value"
\`\`\`
Example:
\`\`\`
a = "hello"
\`\`\`

**Note:**
In a transition, if there are multiple lines, then they are separated by \`semicolons\`.
Let’s take a look at an example of a transition with two variables declared in it:

Example:
\`\`\`
transition foo()
    a= "hello";
    b= Int32 5
end
\`\`\`
In this example, we declare two variables in a transition named "foo".
The first variable is a string type variable that stores the value hello.
The second variable is an integer type variable that stores the value 5.

Notice two points in this example:
The two lines within the transition are separated by a single semicolon. We don’t use a semicolon after the declaration of the variable “b” because there are no further lines in the transition seen in the example. Those who’re familiar with other computer languages might be used to using a semicolon to end a line of code. However, here the semicolon can be thought of as being used in the capacity of a conjunction rather than a period, so just like we won’t normally use the conjunction ‘and’ at the end of a sentence, similarly we don’t use the semicolon here at the end but instead to join the various lines.
The format of the declaration of a string variable is different from the format of declaration of an integer variable. You can find the full list of the declaration format of all the major variable types (in the main body of the contract, and in the transition) in the ‘Cheat Sheet’ given at the bottom left corner of this page.
	However, for the sake of the exercise at the hand, you can just refer to the content provided in this lesson.


## Task

We want to replace the original user name declared in mutable variable \`username\` in this transition. To do that, we will need a new name.

Declare a new variable with the name \`newname\` and type \`String\` and give it a value \`Bob\`.

`;
const l6 = `
## Lesson 6: Changing a mutable field

As stated earlier, the variable declared in the transition is a temporary variable that isn’t stored on the blockchain and exists only while the contract is being run.
We can use these temporary variables to get values from the user input, mutable variables etc. and then we can perform operations on these values. Then, in order to ensure that blockchain contains the final value, it has to be transferred to a mutable variable.
You’ll note that the design of Scilla language is making a user be very cautious about updating any value assigned to a mutable variable. That is so because changing a mutable variable is a critical operation and if done in a wrong manner, it could lead to security issues.
We’ll explore this in more detail in later chapters. At the moment, we simply need to assign the value of the temporary variable to the mutable variable.
The format of such an assignment is:

\`\`\`
MutableVariableName := TemporaryVariableName
\`\`\`
Example:
\`\`\`
mutvar1 := tempvar1
\`\`\`

## Task

Update the mutable variable \`username\` with the value of the temporary variable \`newname\` in the body of the transition.

`;
const l7 = `
## Lesson 7: Getting values

You’ll notice the issue with the previous lesson that the new user is always changed to a fixed value each time that the transition is called. Ideally, we’ll like to have options other than “Bob” about the new name which is updated. This can be done by letting the user pass on a value to the transition whenever she’s calling it.
Similar to how we could have passed variables to the contract while creating it, we could also pass variables to a transition while calling it.
The format for declaring these temporary variables that have to be sent by a user when she calls the transition is as follows:

\`\`\`
transition transitionName (parameterName_1 : parameterType_1)


end
\`\`\`


In case we want to declare multiple variables here, then we can do so by separating the variable name and variable types by commas, as shown below:
\`\`\`
transition transitionName (parameterName_1 : parameterType_1, parameterName_2 : parameterType_2, parameterName_3 : parameterType_3)

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

## Task

We want to change the name of the user ‘Alice’ that we’ve earlier stored in the mutable variable ‘username’. To do this, we created the transition ‘changeName’ and assigned a value to ‘username’. In order to make the change more flexible, we’ll also need the new name each time the transition is called. So, we’ll delete the old variable declaration in the body of the transition. Now do the following:

Include the parameter with name “newname” and variable type “String” in the declaration of the transition so that a user has to send a new name for the user each time she wishes to change the old value.

`;
const l8 = `
## Lesson 8: Implicit variables

In addition to parameters that are explicitly declared in the definition, each transition also has the following implicit parameters available to it for each call:
\`\`\`
_sender : ByStr20
\`\`\`

This variable contains the account address that triggered this transition. In case, the transition was called by a contract account instead of a user account, then _sender contains the contract address.


\`\`\`
_amount : Uint128
  \`\`\`


This contains the incoming amount (ZILs) sent by the sender. This amount *must be explicitly accepted using the \`accept\` statement within the transition*. The money transfer does not happen if the transition does not execute accept.


## Task

1. Declare two new mutable variables in the contract:
* \`user_address\` of type \`ByStr20\` with value \`0x1234567890123456789012345678901234567890\`
* \`user_tokens\` of type \`Uint128\` with value \`0\` in the contract.

2. Then in the transition, assign these variables the value of \`_sender\` and \`_amount\` respectively.

3. Remember that the implicit variable _amount has to be explicitly accepted. Use a simple ‘accept’ command in the first line of the transition ‘changeName’.

As mentioned earlier, you can refer to the variable declaration format of all types in the ‘Cheat Sheet’ given at the bottom left corner of this page.
`;
const l9 = `
## Lesson 9: Summary

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

You’ve defined a user which has certain attributes such as name, address and tokens.


`;

const chapter1: IChapterInstruction = {
  title: 'Elementary',
  lessons: [l1, l2, l3, l4, l5, l6, l7, l8, l9]
};

export default chapter1;
