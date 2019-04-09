import { IChapterInstruction } from '../../../../typings';

const l1 = `
## Lesson 1: Making a transition for registering users

Earlier, in the first chapter, we stored user names using variables. However, there might be thousands (or millions) of users for an application. We will need a better way to store those names, than the ones we discussed in the last chapter. 

Before we move towards that objective, first let’s simply create a transition  which  will collect  information from the user and allow them to register. 

## Task

 1.  After the end of the previous transition, declare a new \`transition\` with the name \`register_user\`. You can currently leave the brackets after the transition name empty. Also, make sure to end the declaration of the transition with \`end\` keyword. 
`;

const l2 = `
## Lesson 2: parameters for 'register_user' transition
When users will call the ‘register_user’ transition, they'll have to provide some data to the  transition so that they could be uniquely registered. 
We’ll ask the users to provide: 

a. Their twitter id
b. Their wallet id

We have covered this in the first chapter but for a quick reference, in case we want to declare multiple parameters for a transition, then we can do so by separating the parameter names and  types by commas, as shown below: 

\`\`\`
transition transitionName (parameterName_1 : parameterType_1, parameterName_2 : parameterType_2, parameterName_3 : parameterType_3)
  
end

\`\`\`


## Task
 In  the bracket after the transition  ‘register_user’ declare two variables: 
 
1. Declare variable ‘user_address’ of  the type \`ByStr20\`. This will hold the wallet address of the user. 

2. Declare variable ‘twitter_username’ of  the type \`String\`. This will hold the twitter id of the user. 

`;

const l3 = `
## Lesson 3: Map- declaration

Now, we want to limit the possibility of a same account creating multiple registrations.

In order to do so, we want to impose two conditions: 

i) Same wallet id shouldn't be able to register twice. 
ii) Same twitter id shouldn’t be able to register twice. 

In order to impose these conditions, we’ll first have to create two records, one of already registered wallet ids and second of already registered twitter ids.

We’ll do so using ‘map’ feature.  

A map of type \`map kt vt\` provides a key-value store where \`kt\` is the type of keys and \`vt \`is the type of values. \`kt\` may be any one of String, IntX, UintX, ByStrX or ByStr. \`vt\` may be any type except a function type.

We often provide the key-value \`kt\` as an input and look for the \`vt\` as the output value. For eg, \`kt\` could be a bank account number and \`vt\` could be the corresponding bank balance. 

The declaration for an empty map is done as follows at the start of the contract: 

\`\`\`
field a: Map FieldType1 FieldType2 = Emp FieldType1 FieldType2
\`\`\`

Then the values are added to that empty map. (You can also check the other ways of declaring map in the cheat sheet.)





## Task
 After the start of the contract, declare two maps with no initial values: 

1. A \`map\` with name \`users\` with key type \`ByStr20\` and value type \`String\`

2. Then declare another \`map\` with name \`used_usernames\` with key type \`String\` and value type \`Bool\`
 
 
`;

const l4 = `
## Lesson 4: Map- Checking the existence of a value. 

In order to check whether or not the user id or wallet id being sent by a user have been previously registered, we’ll need to read the value from the map. In this particular case, we simply need to check whether such value exists or not in a given map. 

The format for doing that is as follows: 
\`\`\`
b <- exists m[k]
\`\`\`

This is also called In-place existence check. It check whether in map \`m\`, any value corresponding to key \`k\` exists or not and accordingly returns a Bool which in above example is stored in variable \`b\`. 

Existence checks through nested maps is supported with the syntax \`v <- exists m[k1][k2][...]\`. If one or more of the intermediate key(s) do not exist in the corresponding map, the result is False.


## Task

  In the transition ‘register_user’ do the following two actions:

1. Check if the value of the variable \`user_address\` exists in the map \`users\` through the keyword \`exists\`, and then store the value in a new variable \`user_exists\`. This will all be done in a single line as shown in the example above. 

2. Then, in the next line, check if the value of the variable \`twitter_username\` exists in the map \`used_usernames\` through the keyword \`exists\`, and then store the value in a new variable \`username_exists\`. This will all be done in a single line as shown in the example above.

`;

const l5 = `
## Lesson 5: OR operation in Scilla

Now, we have two boolean values stored in the variables \`user_exists\` and \`username_exists\`.  We are interested in checking whether any of these conditions are true.  
To check that, we’ll use the boolean operator \`orb\` in scilla which returns true if any of the arguments are true, or else it will return false only if both arguments are false. 
The format for using it is: 

\`\`\`
a = orb boolVar1 boolVar2
\`\`\`

Here, \`boolVar1\` and \`boolVar2\` are two bool type variables. Using them with operator ‘orb’ returns a bool variable which is then being stored in variable \`a\`. 




## Task

1. Use \`orb\` operator with the variable \`user_exists\` and \`username_exists\` and store the result in a new variable \`already_exists\`. This will all be done in a single line as shown in the example above.  
`;

const l6 = `
## Lesson 6: Using match condition

We now have \`already_exists\` variable. If the value of this variable is true, then we don’t want to allow the user to register, however, if it’s false then we do want to allow the user to register. 

To implement this, we need to use a conditional structure which we learned in the previous chapter we can do through \`match\` keyword. 

For a quick reference, the format for \`match\` is: 
 
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


## Task

1. Use \`match\` on the variable \`already_exists\`. 

2. The two branches corresponding to \`match\` will be \`True\` and \`False\`

3. Make sure to use \`end\` to declare the end of the statements. 

We’ll fill in  the code for the individual branches over the next lessons.
 
`;

const l7 = `
## Lesson 7: Messages for the 'True' condition


In case \`already_exists\` variable is true, then we simply need to let the users know about that in a message. 

We’ll be sending that message in the same way as we did in chapter 2. 

## Task

1. First of all, we need to define the code for such an eventuality  in the \`library\`. 
So, in the library section define a variable \`user_exists_code\`  of \`Uint32\` type and value \`2\`

2. In the 'True'  branch of the conditions, declare a variable \`msg\` in the following format:

\`\`\`
msg = {_tag : "abc"; _recipient : abc; _amount : abc; code : abc};
\`\`\`

Where you will use the following values in stead of the dummy value ‘abc’ used above:

For \`_tag\`, value should be empty, i.e.,  \`""\`. 
For the \`_recipient\`, we want to send the message to the initial sender, so the value should be: \`_sender\`
For the \`_amount\`, the value should be zero. Since we’ve defined it as a \`Uint128\` 0 variable in the library already, use the variable name \`zero\`
For the _code, use the code that we have defined in the library to indicate that the user already exists, i.e., ‘\`user_exists_code\`

3. Finally, after you have defined \`msg\`, copy the two lines below that will put this message in the list defined in the step one (i.e. one_msg variable type) and then send it. 

\`\`\`
msgs = one_msg msg;
send msgs
\`\`\`


`;

const l8 = `
## Lesson 8: Map- Adding entries

After finishing the code in the \`True\` branch of the condition, let’s focus on the \`False\` branch of the condition. 

This branch implies that the user information  has  not previously existed in  the maps, so what we now have to do is to register the user by updating their information  in the maps of \`users\`and \`used_usernames\`. 

To add these values, we’ll be using in place insert operations that have the following format: 

\`\`\`
m[k] := v
\`\`\`

Where  \`m\` is the map variable, \`k\` is the key variable and  \`v\` is the value variable. 
Insertion into nested maps is supported with the syntax \`m[k1][k2][...] := v\`. If the intermediate key(s) does not exist in the nested maps, they are freshly created along with the map values they are associated with.



## Task

1. First, in the library section define a variable \`true\`  which will be equal to \`True\`
Hint: for boolean variables, you can do this by typing \`let true =True\` in the library section. See the Cheat sheet below for a quick refresher. 

2. Then, come to the 'False' branch in the transition. There, using the format described above, insert the value variable \`twitter_username\` with the corresponding key variable  \`user_address\` in the map \`users\`

3. Similarly, in the next line, insert the value variable \`true\` with the corresponding key variable  \`twitter_username\` in the map \`used_usernames\`
 
`;

const l9 = `
## Lesson 9: Event

So far, we have primarily used messages to send notifications for the users. However, there is another way of sending information back. 

A contract can also communicate to the outside world by emitting events.

Send is used to send messages to other accounts, either in order to invoke transitions on another smart contract, or to transfer money to user accounts. On the other hand, events are dispatched signals that smart contracts can use to transmit data to client applications.

 An event is a signal that gets stored on the blockchain for everyone to see. If a user uses a client application to invoke a transition on a contract, the client application can listen for events that the contract may emit, and alert the user.


\`event e\`: Emits a message \`e\` as an event. The following code emits an event with name \`e_name\`.

\`\`\`
e = { _eventname : "e_name"; <entry>_2 ; <entry>_3 };
event e
\`\`\`

An emitted event must contain the compulsory field \`_eventname\` (of type \`String\`), and may contain other entries as well. The value of the \`_eventname\` entry must be a string literal. All events with the same name must have the same entry names and types.
 
For the registration confirmation, we’ll be using event. 


## Task

1. After the previous step of updating the map entries,  define an event \`e\` with  \`_eventname\` equal  to \`register_user\`.  

2. For the second entry of the event, send the information about field \`user\` containing variable \`user_address\`

*Hint*: the \`<entry>_2 \` from the format above will look like \`user: user_address\` in this case. 

3. For the third entry of the event, send the information about field \`username\` containing variable \`twitter_username\`

4. Finally, in the next line, emit the event using \`event e\`
 
`;

const l10 = `
## Congratulations!

You've come to the end of the current content. 
More chapters will be  updated in the future. 

*The full code can be seen at:*  
https://github.com/AmritKumar/zil-twitter/blob/master/scilla/Twitter.scilla

*The javascript code for connecting the front-end and the blockchain can be seen at:* 
https://github.com/AmritKumar/zil-twitter/blob/master/frontend/src/zilliqa.js

*The online IDE is available at the following URL:* 
https://savant-ide.zilliqa.com/


*Scilla documentation is available at the following URL:*
https://scilla.readthedocs.io/en/latest/index.html


 *For any feedback, reach out to us at the channels in the footer*
 
 ##  Thanks!
`;

const chapter3: IChapterInstruction = {
  title: 'Intermediate - B',
  lessons: [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10]
};

export default chapter3;
