import { IChapterInstruction } from '../../../../typings';

const l1 = `
## Lesson 1: Making a transition for depositing tokens

In the last chapter, we learned about various kinds of variables, including implicit variable. 
Let’s build a transition that actually uses that. 
We’ll first wipe the variables from the first chapter, and from now onwards all the code that we’ll be using will help us directly build the social media payment application that we discussed. 

First of all, in order to give ZIL tokens as rewards, the contract must have access to them. 
In order to ensure that, we need to build a transition where the ZIL tokens can be deposited in the contract. 



## Task

 1. Declare a \`transition\` with the name 'deposit’. Make sure to close it with \`end\` keyword.

`;

const l2 = `
## Lesson 2: Boolean operations

Now, we’ve to ensure that this transition can accept any amount of ZILs sent to it. We’ve already seen how to do this at the end of chapter 1. 
We can simply repeat that process here and technically that’s fine. 
However, for any actual application, you probably want to ensure that not everybody can send tokens to this transition. Can you think of a reason why you would deny getting an additional amount? 
Well, for one thing, it will make your auditing really difficult if you don’t have a clear track of who’s sending the tokens to your contract. Also, it’s generally a good coding practice to manage access to transitions in a controlled manner. 
So, we’ll program this transition so that only the owner can send money to it. 

We’ve two variables: \`owner\` which is an immutable variable and will always remain constant and \`_sender\` which is an implicit variable and contains the wallet address of the user who has invoked the transition for that operation. We need to have a condition that ensures that deposit happens only when the two variables’s values are the same. 

To do this, we’ll need to use comparison operators which are available in Scilla. These operators check whether the given comparison (such as, is a= b, or is a>b, or is a <b)  is true or false, and accordingly return a boolean (i.e. a value that is ‘true’ or ‘false’) value. 

In order to process these boolean values, we will need to include a boolean library in our code. 

You can do this by using import function for any library. 
The format for that is:

\`\`\`
import LibraryName
\`\`\`

E.g., 
\`\`\`
import ListUtils
\`\`\`

If there are multiple libraries, then you can simply include more libraries by providing a space between their names after the keyword import

\`\`\`
import LibraryName1 LibraryName2
\`\`\`

E.g.,
\`\`\`
import ListUtils IntUtils
\`\`\`



Note: You have to use ‘import’  before the contract declaration. 


You can find the complete list of libraries here: https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=boolutils#standard-libraries


For now, we only need to include one library: BoolUtils




## Task

 After the scilla version declaration and before the contract declaration, do the following:
 
 1. Import the following library: \`BoolUtils\`. Use the keyword \`import\` to do so. 


`;

const l3 = `
## Lesson 3: Builtin operators

Now, we’ll run an operation to see whether sender and owner variable are the same and will store the value in a temporary variable which we had earlier learned about in chapter 1. 

In order to check whether two variable values are equal to each other, we use the following expression: 
\`\`\`
builtin eq i1 i2 
\`\`\`
This expression checks whether variable  \`i1\`  is equal to \`i2\`
It returns a boolean value ‘True’ or ‘False’ which can be stored in a variable. 

For e.g., 
\`\`\`
transition abc()
empvar1 = builtin eq var1 var2
end

\`\`\`


##  Task:

In the transition ‘deposit’: 

1. Check whether the value of ‘owner’ and ‘_sender’ variables are the same using ‘builtin eq’ keywords. 
2. Store the result in a variable named ‘sender_is_owner’


`;

const l4 = `
## Lesson 4: Match

Based on the previous exercise’s condition, there could be two outputs: True or False. For each of these outputs there should be a different response. If the key is present then our program should prohibit user from trying to register again, but if it doesn't exist then the user should be allowed by the contract to register. This is very similar to the If-Else structure in programming. However, in Scilla we use pattern matching because of the flexibility and additional functionalities inherent in pattern matching. This pattern matching is done with the keyword \`match\`. Its format is as follows:

\`\`\`
match [variablename] with
| [pattern 1] =>
       [statements…]
| [pattern 2] =>
       [statements…]
| _  => (*Wild Card*)
       [statements…]
end
\`\`\`

Here variablename (without the square brackets) is the variable that we are running the test against. Based on the different values of this version, we want different code lines to be executed. After deciding the variable that we're running the checks for, we need to code the patterns that we'll be matching it against. The pattern to be matched can be a variable binding, an ADT or the wildcard symbol of underscore \`(_)\` which matches against anything (naturally, wild card symbol, if used, should be used last in the series of the patterns being matched or else, let's say, if it's used first then everything will match against it and the other patterns won't be used at all) Finally the end keyword declares the end of the patterns. Any variables declared in the statements for a particular match clause are valid only within that clause. Their values won't be externally recognised i.e. the scope of a variable declared within a pattern in a match condition is limited to that clause.
An example of a match condition is:

\`\`\`
match check1 with
| True  =>
       a:=b
| False =>
       a:=c
end
\`\`\`

Here, if \`check1\` variable is true, we fix the value of the variable \`a\` equal to variable \`b\` or else if it's false, then we fix it to be equal to be variable \`c\`. (Assuming that variables check1, a, b and c have all been previously defined.)

 ##  Task:

In the transition ‘deposit’, make a ‘match’ that compares ‘sender_is_owner’ with two branches, ‘True’ and ‘False’ 

You can leave the body blank for now. 

Close the match condition properly with ‘end’

`;

const l5 = `
## Lesson 5: Library

Now, we have two conditional branches. 

For each of them, a different behaviour will be programmed. Also, once the programmed action is finished, we’d want to generate some kind of a message regarding that execution.

For the branch, ‘True’, which implies that sender and owner addresses are the same, we will use the ‘accept’ keyword, to accept the payment sent. 

But when the condition yields ‘False’, we don’t want to accept the payment, but we still want to have some action to signal that the execution of the program has finished. 

For doing this, we’ll be sending a message to the sender. 

We’ll learn more details about how to send such messages in the next chapter, but for now let’s first define a code that indicates that the sender is not the owner. 

We can define this code in the \`library\` section of our code. 

A library is declared in the preamble of a contract using the keyword \`library\` followed by the name of the library. In our current example a library declaration would look as follows:


\`\`\`
library SocialMediaPayment

\`\`\`


This library will be used to store program constants (with a scope that covers the entire contract) and also some utility functions using the \`let x = y in expr\` construct. We’ll discuss utility functions later. 

For now, we need to define a program constant (or what we’ll later refer to as ‘code’) for the error message that says that the sender is not the owner. 

You can see the details of syntax in the cheat sheet given at the bottom of this page. The general format for doing so is: 

\`\`\`
let code_being_defined = Uint32 1
\`\`\`

You can, of course, change the variable name, variable type and the variable value as per the requirements of the contract. 




##  Task:

1. Declare the library before the contract, and give it the same name as that of the contract, i.e., \`SocialMediaPayment\`

2. In the library section, declare a \`Uint32\` type of variable with variable name \`not_owner_code\` and value \`1\`

3. For the next chapter, we’ll also need to define a code for the unsigned integer value 0. In the library section, define a \`Unit128\` type of variable with variable name \`zero\` and value \`0\`


`;

const l6 = `
## Lesson 6: Message

Now that we have defined a code that implies that the sender to deposit transition is not the owner of the smart contract, we’ll have to send that code as a response. We’ll do this through sending a message using the instruction send.

Send is used to send messages to other accounts, either in order to invoke transitions on another smart contract, or to transfer money to user accounts. 
To construct a message we use the following syntax:

\`\`\`
msg = {_tag : "abc"; _recipient : abc; _amount : abc; code : abc};
\`\`\`

A message must contain the compulsory fields \`_tag\`, \`_recipient\` and \`_amount\`. The \`_recipient\` field is the blockchain address (of type \`ByStr20\`) that the message is to be sent to, and the \`_amount\` field is the number of ZIL to be transferred to that account.
The value of the \`_tag\` field is the name of the transition (of type \`String\`) that is to be invoked on the \`_recipient\` contract. If \`_recipient\` is a user account, then the value of \`_tag\` can be set to be \`""\` (the empty string). In fact, if the \`_recipient\` is a user account, then the value of \`_tag\` is ignored.

In addition to the compulsory fields the message may contain other fields, such as code above. However, if the message recipient is a contract, the additional fields must have the same names and types as the parameters of the transition being invoked on the recipient contract.

Sending a message is done using the \`send\` instruction, which takes a list of messages as a parameter. Since we currently only send one message at a time, we define a library function \`one_msg\` to construct a list consisting of one message:

\`\`\`
let one_msg =
  fun (msg : Message) =>
  let nil_msg = Nil {Message} in
    Cons {Message} msg nil_msg
\`\`\`    
 
To send out a message, we first construct the message, insert it into a list, and send it:

\`\`\`
msg = {_tag : ""; _recipient : owner; _amount : bal; code : got_funds_code};
msgs = one_msg msg;
send msgs
\`\`\`
 
The details of this include understanding the ‘list’ functionality for Scilla. In our program, it will only be used in this one instance, so rather than going in the details, we’ll simply be using the above format. However, for more details, please feel free to read it at the list section of the scilla documentation. 


##  Task:

1. In the library section of the code, copy paste the following standard code: 

\`\`\`
let one_msg =
   fun (msg : Message) =>
   let nil_msg = Nil {Message} in
   Cons {Message} msg nil_msg
\`\`\`


2. In the 'False' branch of the conditions, declare a variable \`msg\` in the following format: 

\`\`\`
msg = {_tag : "abc"; _recipient : abc; _amount : abc; code : abc};
\`\`\`

Where you will use the following values in stead of the dummy value ‘abc’ used above: 

For \`_tag\`, value should be empty, i.e., \` ""\`. 

For the \`_recipient\`, we want to send the message to the initial sender, so the value should be: \`_sender\`

For the \`_amount\`, the value should be zero. Since we’ve defined it as a \`Uint128\` variable in the library already, use that variable named \`zero\`

For the \`_code\`, use the code that we have defined in the library to indicate that sender is not the owner, i.e., \`not_owner_code\`

3. Finally, after you have defined ‘\`msg\`, copy the two lines below that will put this message in the list defined in the step one (i.e. \`one_msg\` variable type) and then send it. 

\`\`\`
msgs = one_msg msg;
send msgs
\`\`\`


`;

const l7 = `
## Lesson 7: Message (2)

While the last chapter may seem complex at first, the same format will be used again and again for sending messages, and you’ll get used to the syntax pretty soon. 

In fact, we’ll be using the format once more in this lesson too. Now, that we’ve sent a message to the user for an error in the last lesson (telling the user that the sender wallet address wasn’t the same as the owner wallet address and therefore the deposit couldn’t be accepted,) we’ll also send a message for success. 

So, this time we’ll focus on the ‘true’ condition of the branch. 



##  Task:
1. In the library section, declare a \`Uint32\` type of variable with variable name \`accepted_code\` and value \`0\`.

2. Then, in the \`True\` branch, we have to accept the money which has been sent. So use the \`accept\` keyword. 

3. Now, in the next line declare a variable \`msg\` in the following format: 
\`\`\`
msg = {_tag : "abc"; _recipient : abc; _amount : abc; code : abc};
\`\`\`

Where you will use the following values in stead of the dummy value ‘abc’ used above: 

For \`_tag\`, value should be empty, i.e.,  \`""\`. 

For the \`_recipient\`, we want to send the message to the initial sender, so the value should be: \`_sender\`

For the \`_amount\`, the value should be zero. Since we’ve defined it as a \`Uint128\` 0 variable in the library already, use the variable name \`zero\`

For the \`_code\`, use the code that we have defined in the first step of this task to indicate that sender is  the owner, i.e., \`accepted_code\`

4. Finally, after you have defined \`msg\`, copy the two lines below that will put this message in the list defined in the step one (i.e. \`one_msg\` variable type) and then send it. 

\`\`\`
msgs = one_msg msg;
send msgs
\`\`\`



`;

const l8 = `
## Congrats!
You've learned handling import and library sections. You've also learned working with boolean operators, conditional branches and sending response messages. 
In the next chapter, we'll learn about maps and events. We'll also learn working with another boolean operator in Scilla and will practice sending more messages as we continue to build our Social Media Payment smart contract. 
`;

const chapter2: IChapterInstruction = {
  title: 'Intermediate',
  lessons: [l1, l2, l3, l4, l5, l6, l7, l8]
};

export default chapter2;
