import { IChapterInstruction } from '../../../../typings';

const l1 = `
## Lesson 1: Map1 - Declaration

In the last chapter, we learned how to declare some variables associated with the player and then change them as required.
However, we were still storing the details of a single player. For any actual game, we'll usually need to store the details of many players.
In order to do this, we'll be using \`Maps\`.
\`Map\` values provide key-value store.
Which means that you can store the value against a particular key value which should be unique.
Then, you can later provide the key and request to retrieve the value stored against it.
Keys can have types \`IntX\`, \`UintX\`, \`String\`, \`ByStr32\` or \`ByStr20\`. Values can be of any type.

Largely, there are three types of operations that we'll be performing with maps:
1. Declaring a map
2. Modifying the values within a map
3. Retrieving value from a map

We'll go through these operations step by step to build a database for storing the details of the players.

The first thing to decide while declaring a map is what should be the key-pair value for the map.
Here, we first want to store the name of the player who calls the function. To do so, we've to store it against a key which is unique in value.
It will be ideal to use \`Wallet address\` as the key in this case, since each wallet address is unique,
 and by doing this we can ensure that one wallet doesn't create more than one players.

So the key will be of type \`ByStr20\` and value will be of type \`String\`
The format for declaration of a map can vary depending upon the type of key and value chosen,
 the part of the contract where it's declared and also depending on the initial values being fixed or empty.
(Full list of Scilla variable declaration formats can be found [here](https://docs.google.com/spreadsheets/d/17h6q3QJi_tDUsakzzNpKKXaAGJs5Ctg5tlR1y7i5o64/edit#gid=0)

For this case, let's start with declaring a map  that's empty, i.e. it's initialized without values.
The format for that is:
\`\`\`
field a: Map [variabletype1] [variabletype2] = Emp [variabletype1] [variabletype2]
\`\`\`

Eg.
\`\`\`
field a: Map Int32 Uint32 = Emp Int32 Uint32
\`\`\`

**Task:**

Declare the map in the main body of the contract that's empty and has a key of type \`ByStr20\` and value of type \`String\`.
`;
const l2 = `
## Lesson 2: Reading map value in a temporary variable

Now that we've declared an empty map, we'll need to populate it with data.
As mentioned earlier, adding a value to a map is done in multiple steps.
Before we make any changes, we ensure that the map's value is stored in another variable as a safety measure. It can be done in the following format within a transition:

\`x <- f\` : Read from a mutable field \`f\` into \`x\`

Do notice that there is no variable type involved in such declaration.
The new variable that is created will be of the same type as the variable that it reads from.

**Task:**

Create a variable "r" that reads the existing value of the map "map_Name"

`;
const l3 = `
## Lesson 3: Map 3 - Put

Our objective is to add a new key value pair to the map that we have created.
In order to do so, in the last chapter we got one of the variables to store the \`value\` of the map.
Now this allows us to securely do any operations on the original value.

We have to add a new value to the map, the format to do so is:

[New Variable] = builtin put [Map Variable] [New Key] [New Value]

Let's look at the various parts of this format:
builtin
We can have two types of functions, one that are pre-defined and one that are defined by the user in the library of the contract.
To distinguish them, we use \`builtin\` before any other keywords used for pure operations.
Finally, the expression of "put [Map Name] [New Key] [New Value]" returns a new map with the newly inserted key/value in addition to the key/value pairs contained earlier.
Since this returns a new map, it has to be stored in a variable and we can do it as shown in the format above.

An example will be:

\`
tempvar1 = builtin put map1 keyvar valuevar
\`

Where tempvar1 need not be declared, it will be the same type of map as map1 which is a mutable variable.
Do note that keyvar and valuevar need to be variables which have been defined before either in the main body or in the transition.
We can't use direct values in this expression.
So rather than directly putting a value of 5 against a key, we will need to first store the value 5 in a variable, say valuevar, and then assign it here in the expression.

**Task:**

We want to store the name that we receive from the user in the map. The unique id of the user is his wallet.
So, put the value of "newname" received from the user when the transition is called, against the key "_sender" which is an implicit variable included in the call, in the map "map_Name".
Store the new map obtained  it in a variable r1.
`;

const l4 = `
## Lesson 4: Map 4 - Updating the original map

Our final stage of updating the map is simple.
So far, we have a variable \`r\` that's storing the value of the map
before the operation; we have a variable r1
that is storing the value of the map as it should be after the operation.
Now we need to assign the value of r1 to the original map to update the map.
We can do this in the same way that we've been updating the other mutable fields so far.

\`\`\`
m := variable1
\`\`\`

**Task:**

Update the desired state of the map stored in \`r1\` in the original map \`map_Name\`

`;

const l5 = `
## Lesson 5: Map 5 - Contains

Alright! We've now declared a map and have learned to update it.
Now suppose we want to ensure that a single wallet can register only one account.
To do that, we have to run a basic check about whether a key already exists in the database

The method to check whether a value exists or not in a given map is to use \`contain\`
Its format is as follows:

\`\`\`
[somevariable] = contains [mapname] [keyname]
\`\`\`

If the key [keyname] and its associated values are present in the map [mapname]
then the expression returns a Bool type variable \`True\` and if not then it returns \`False\`

This value is usually stored in another variable.

Example:

\`\`\`
a = contains m k
\`\`\`

The variable \`a\` will now contain \`True\` or \`False\` based on whether the key \`k\` exists in the map \`m\` or not.

**Task:**
Use \`contains\` to check whether the wallet address of the message sender ( stored in the implicit variable \`_sender\`) exists in the map map_name.
Store the value in a temporary variable t1.

`;
const l6 = `
## Lesson 6: Match \n
In the last chapter, we used \`contains\` to check whether the sender's address already exists in the contrast.
Based on that there could be two outputs: True or False. For each of these outputs there should be a different response.
If the key is present then our program should prohibit user from trying to register again, but if it doesn't exist then the user should be allowed by the contract to register.
This is very similar to the \`If-Else\` structure in programming.
However, in Scilla we use pattern matching because of the flexibility and additional functionalities inherent in pattern matching.
This pattern matching is done with the keyword \`match\`. Its format is as follows:

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

Here [variablename] is the variable that we are running the test against. Based on the different values of this version, we want different code lines to be executed.
After deciding the variable that we're running the checks for, we need to code the patterns that we'll be matching it against.
The pattern to be matched can be a variable binding, an ADT or the wildcard symbol [ _ ] which matches against anything (naturally, wild card symbol, if used, should be sued last in the series of the patterns being matched or else, let's say, if it's used first then everything will match against it and the other patterns won't be used at all)
Finally the \`end\` keyword declares the end of the patterns.
Any variables declared in the statements for a particular match clause are valid only within that clause.
Their values won't be externally recognised i.e. the scope of a variable declared within a pattern in a match condition is limited to that clause.

An example of a match condition is:

\`\`\`
match check1 with
| True  =>
       a:=b
| False =>
       a:=c
end
\`\`\`
Here, if check1 variable is true, we fix the value of the variable \`a\` equal to variable \`b\` or else if it's false, then we fix it to be equal to be variable \`c\`.
(Assuming that variables check1, a, b and c have all been previously defined.)

**Task:**

In the last exercise, we used t1 variable to check whether the sender's address alredy exists in the map or not.

* Now match the value of variable t1 with True and False.
* For the True pattern, you can leave the statements part of the either conditions to be blank.
* For the False pattern, copy the existing lines for registering a new player under this.

`;
const l7 = `
## Lesson 7: Complete Initiate Player

Now our game will have some configurable statistics for each player.
If you've played a lot of games then you'd have come across most of them since they're pretty much a standard across various genres of games.

The statistics that a player will have in this game are:
* Attack (ATK) points
* Defense (DEF) points
* Login Status (LOG) points
* ZEAL, a statistic specific to this game that can be exchanged for the cryptocurrency ZIL (test tokens in this case!).
Player can play the game to get more ZEAL points and then exchange them to get more ZIL currency.

Now, we can have these values associated with a single player by using the same unique key (wallet address) that we've used so far and make 4 new maps where the values contain the initial value for the 4 variables stated above.

Task:
So far we have declared one map: map_name.
Declare 4 new maps with the following characterisitics:

* For the first new map, the name should be map_zeal, key type should be \`address\`, value type should be \`Uint128\`. Let the initial entry be empty.
* For the second new map, the name should be map_atk, key type should be \`address\`, value type should be \`Uint128\`. Let the initial entry be empty.
* For the third new map, the name should be map_def, key type should be \`address\`, value type should be \`Uint128\`. Let the initial entry be empty.
* For the fourth new map, the name should be map_log, key type should be \`address\`, value type should be \`Bool\`. Let the initial entry be empty.

`;
const l8 = `
## Lesson 8: Complete Initiate Player-II

We’ve earlier seen how we’ve updated a new entry in the map map_name.
There we had received the value from the input sent by the caller.

Now there are four new maps that we’ve to update and each of these variables should have a definite value for all the new players.
In particular, when the new player opens his account, he should see the follow values:

\`ATK = 50\`

\`DEF = 50\`

\`ZEAL = 100\`

\`LOG = TRUE\`

Thus, we have to update these maps with fixed values.
Let’s see an example on how to do that by updating map_atk in the usual 3 steps:-

\`\`\`
r2 <- map_ATK; (*Step 1*)
r3 = let fifty = Uint128 50 in builtin put r2_sender fifty; (*Step 2*)
Map_atk := r3 (*Step 3*)
\`\`\`

Now, we’ve seen similar 3 steps while we had earlier updated our first map, map_name.
However, step 2 is a bit different because we are first assigning a value to a variable and then assigning the variable to the value field in the map.
Let’s understand this step in a bit more detail.

Step 2 is:

\`\`\`
r3 = let fifty = Uint128 50 in builtin put r2_sender fifty
\`\`\`

This can essentially be seen as the following format:

\`\`\`
r3 = let [expression a] in [expression b]
\`\`\`

The [expression b] in the statement above is ‘builtin put r2 _sender fifty’. This is closer to our original method of declaration like we used for map_name. Here r2 is the map that reads from map_ATK. ‘_sender’ is an implicit variable, but fifty hasn’t been declared earlier. So we declare it before in [expression a] part by using

\`\`\`
let fifty = Uint 128
\`\`\`

You’ll see that this is similar to the declaration syntax in the library. [link]
The scope of \`expression a\` is only valid for the next parts of the statement which in this case means that it’s only valid till \`expression b\`

note : if there are any undefined variables in \`expression a\` like ‘fifty’ was undefined in \`expression b\`, then we can use similar format to describe them in the same statement.

I.e. you can do something like this:

\`\`\`
[somevariable] = let [expression z] in [expression a] in [expression b]
\`\`\`

\`expression z\`’s scope will be valid for the parts after it in the statement i.e. \`expression a\` and \`expression b\` and \`expression a\`’s scope will only be till \`expression b\`

This can continue recursively.
However, our problem is relatively simple, so we don’t need to use such a degree of recursion.

**Task:**

We’ve gone ahead and already updated the map_atk map as shown
* Follow similar steps to update \`map_def\` in a temporary variable \`r4\`.
* Then, update map \`r4\` with the key as \`_sender\` and value as \`fifty\` (define this ‘fifty’ as Uint128 50 in an earlier clause in the same line. A similar operation was done for map_atk, which can serve as a good reference.) Store this in \`r5\` variable.
* overwrite the \`map_DEF\` with \`r5\` by using \`:=\` notation.

Then,
* Follow similar steps to update map_zeal in a temporary variable r6.
* Then, update map \`r6\` with the key as \`_sender\` and value as \`hundred\` (define this ‘fifty’ as Uint128 100 in an earlier clause in the same line. A similar operation was done for map_atk, which can serve as a good reference.)
Store this in \`r7\` variable.
* overwrite the \`map_zeal\` with \`r7\` by using \`:=\` notation.

Now, we’ve to update map_log
* Follow similar steps to update map_log in a temporary variable r8.
* Then, update map r8 with the key as _sender and value as ‘True’. Store this in r9 variable.
* overwrite the map_log with r9 by using ‘:=” notation.

Notice that here, the map’s value won’t be of type \`Uint128\` like the previous time,
but will be of type Bool. While the declaration type of Uint128 in library format was “let fifty = Uint128 50”, the declaration type for a boolean value for the library format is similar to the following:
\`\`\`
let var1 = True
\`\`\`

So use appropriate declaration syntax.

`;
const l9 = `
## Lesson 9: Get

So far, we’ve learned how to update a key and value pair map and how to check if a key exists in the map or not.
However, storage alone is not sufficient, we’ll usually need to retrieve the value associated with the key.
This can be done through \`get\` function.

The format for this keyword is:

\`\`\`
[somevariable] = builtin get [mapname] [keyname]
\`\`\`

As you can see, the format is similar to the format of \`put\` used to add an entry to the map. The prime differences are the difference in the keyword- we use ‘get’ here to retrieve the value, instead of using ‘put’ which added an entry to the map- and there is no field for value, since that’s what we are retrieving and storing in the variable on the left hand side.
The most important point to note is that the variable on the left hand side will not store the [value] associated with the key, but will store “Option{value}”


Imp: This doesn’t make the \`{somevariable}\` store the \`{value}\` stored in the \`{mapname}\` against the \`{keyname}\`. Rather [somevariable] will end up storing the \`Option\` of the \`{value}\`
We’ll learn more about \`Option\` in the next chapter. For now, we can practice \`get\`

Task:
* Declare a new transition after the end of the previous one - initplayer - and name the new transition ‘deposit’. For now, it won’t take any input. (don’t forget to include ‘end’ keyword at the end. It’s a recommended practice so that you are always clearly aware of the scope of declared variables and don’t end up accidentally extending the scope more than you intended.)
* Within the body of the transition use the available r1 that reads from map_ZEAL using \`<-\` notation.
* Use \`get\` on map r1 and key \`_sender\` and store the value in a variable, say, \`r2\`.

`;

const chapter2: IChapterInstruction = {
  title: 'Intermediate',
  lessons: [l1, l2, l3, l4, l5, l6, l7, l8, l9]
};

export default chapter2;
