# String.prototype.substr()

*A JavaScript Method*

The object `String` is a JavaScript build-in constructor for strings. Constructors are functions that works with the `new` operator to create many similar objects which have same property names and methods. JavaScript objects can inherit properties and methods from other objects. The inherited properties and methods can be reused or extended. The object you're inheriting from is the prototype. Here the prototype in the `String.prototype` is a property that represents the `String` prototype object. The `substr()` is a method of the `String` object which extracts part of a string beginning at a specified location and having a specified length. 

## Syntax

To find part of a string using this method, you need to pass it a start location which is an index, and an optional length which is the number of characters you'd like to extract. The return value is a new string.

```
string.substr(startLocation[, length])
```

### Parameters

#### Start location

This parameter is required. It is the index you would like to start the extraction. The first character's index is 0. If the given start location index is greater than the string's last index, the return value is empty. If a negative number is given, this method extracts characters from the end of the string but doesn't reverse the original string. If IE8 and lower browsers are used, they treat the negative start location as 0. 

#### Length

It's optional. The length is the number of characters you'd like to extract. If the length is 0 or a negative number, an empty string is returned. 

## Example 1

![substr ex1](http://i.imgur.com/7yBosNw.png)

This variable str is a string with 10 characters (length = 10). If a negative length or 0 is given, an empty string is returned.

If a positive start position index (2) is given, it will find the character which index is 2. Then the extraction starts from that index and ends at the given length. In the first alert doesn't specify a length so the extraction starts at the character whose index is 2 ends at the last character of the original string. The second alert contains a length so the extraction will include 5 characters starting from the given start position. In the third alert, the given length is longer than the remaining characters starting from index 2. Thus, the remaining characters are returned.

If the start position is negative, the extraction begins from the end of the string. The given -5 means to extract characters from the 5th character of the end of the string which is "5". No matter the length is given, the code will be executed in the same way as the start position is non-negative. 

## Example 2 - Complex

What if the absolute value of the start position is greater than the last index of the original string, what will the return values be?

![substr ex2](http://i.imgur.com/GqianwC.png)

When the start position is a positive number and greater than the last index of the original string, an empty string is returned no matter what the length is. 

When the start position is a negative number and its absolute value is greater than the last index of the original string, the extraction always starts from the first character (index 0) and stops according to the length parameter.

## Browser Support

When the start position parameter is a non-negative number, this method works for the main browsers: Chrome, Firefox, Safari, IE and Opera. When a negative start position is given, IE8 or lower version browser doesn't support this method. They simply treat the negative start location as 0.

 



