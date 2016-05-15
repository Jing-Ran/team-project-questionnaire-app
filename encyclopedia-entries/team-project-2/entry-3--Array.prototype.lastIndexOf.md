# The `Array.prototype.lastIndexOf()` method

Type: ***JavaScript method (function).***

`Array.prototype.lastIndexOf()` is a function that is defined on the `Array` object prototype. That means that every array created in the javascript program will have access to this function. The specific name for functions defined only for certain types of objects is a 'method', so in the rest of this article we will use term 'method' to follow the convention.

A given array element may appear multiple times in the array, and the `lastIndexOf` method will find the last position in the array where the element appears. `lastIndexOf` will return the numeric value of the index for the matched element. If the element is not found in the array then this method returns `-1`.

When `lastIndexOf` searches for the given element, it does that from the end of the array unless it is given a different starting point through a parameter.

## Syntax

The syntax for using the `lastIndexOf` method is the following:

```
  arrayName.lastIndexOf( elementToFind[, fromIndex = arrayName.length - 1] )
```

The `lastIndexOf` method is applied to the array instance, it can not be called by itself. Because of that, the syntax has this part: `arrayName.lastIndexOf`, the method name must be applied to the name of the array with dot between them.

Inside the parentheses there are two parameters, `elementToFind` and `fromIndex`.

### Parameters

#### `elementToFind` - *required*

`elementToFind` parameter is required, the method has to know what to search for. This can be any data type an array can hold, like: string, number, boolean, array, object.

#### `fromIndex` - *optional*

`fromIndex` parameter is optional. If it is not provided, the default value is `arrayName.length - 1` which is the position of the last element in the array. So, by default, this method searches from the last element in the array.

If `fromIndex` is provided then the `lastIndexOf` method searches from the position given by `fromIndex` towards the first element in the array.

If `fromIndex` has value equal or larger to the length of the array then all array will be searched.

If `fromIndex` has negative value, then the search starts from the position that is offset by that value from the end of the array. For example, if the value for `fromIndex` is -3 and the array has 15 elements (the last element will have index 14), the search will start from index 12 (15 - 3 = 12).

If `fromIndex` has negative value whose absolute value exceeds the length of the array, then the array will not be searched. For example, if `fromIndex = 17`, and the array has 15 elements, then 15 - 17 = - 2. Because position - 2 does not exist in the array, array will not be searched.

## Example 1

Finding last positions of numbers in the array.

```javascript
  var numbersArray = [2, 36, 5, 6, 2, 9, 7, 2, 3, 64, 7],
      len = numbersArray.length, // 11
      lastFoundOnIndex;

    lastFoundOnIndex = numbersArray.lastIndexOf(2);
    console.log('Number 2 is last found on index ', lastFoundOnIndex);
    // Number 2 is last found on index 7

    lastFoundOnIndex = numbersArray.lastIndexOf(7);
    console.log('Number 7 is last found on index ', lastFoundOnIndex);
    // Number 7 is last found on index 10

    lastFoundOnIndex = numbersArray.lastIndexOf(2, 6);
    console.log('Number 2 is last found on index ', lastFoundOnIndex);
    // Number 2 is last found on index 4

    lastFoundOnIndex = numbersArray.lastIndexOf(7, 3);
    console.log('Number 7 is last found on index ', lastFoundOnIndex);
    // Number 7 is last found on index -1
    /* the element is not found */
```

## Example 2

`lastIndexOf` method uses strict equality, like the `===` operator. That means that compared values must be the same type and the same value to be equal.

```javascript
  var dataMix = ['5', 6, 23, 5, 14, 'hi', true, 'true'],
      len = dataMix.length, // 8
      lastFoundOnIndex;

      lastFoundOnIndex = dataMix.lastIndexOf(5);
      console.log('Element 5 is last found on index ', lastFoundOnIndex);
      // Element 5 is last found on index 3

      lastFoundOnIndex = dataMix.lastIndexOf("5");
      console.log('Element "5" is last found on index ', lastFoundOnIndex);
      // Element "5" is last found on index 0

      lastFoundOnIndex = dataMix.lastIndexOf(5, 2);
      console.log('Element 5 is last found on index ', lastFoundOnIndex);
      // Element 5 is last found on index -1
      /* it is not found, because "5" is not strictly equal to 5 */

      lastFoundOnIndex = dataMix.lastIndexOf(true);
      console.log('Element true is last found on index ', lastFoundOnIndex);
      // Element true is last found on index 6
      /* string 'true' on last position is not the same as boolean value true */
```

## Example 3

If `fromIndex` has negative value, that value represents the offset from the end of the array from where to start search. The search is still performed towards the first element of the array.

To calculate the starting position for the search, `fromIndex` is added to the length of the array. For example, if array has length 17 and `fromIndex = -8`, then the starting index will be `17 + (-8) = 17 - 8 = 9`. Search starts from index `9`.

If `fromIndex` has value that will give negative result in calculating the starting index, then the array will not be searched at all. For example, if array has length 17 and `fromIndex = -22`, then the starting index will be `17 + (-22) = 17 - 22 = -5`. There are no elements on indexes less than `0`, so the search will not start.

```javascript
  var numbersArray = [2, 36, 5, 6, 2, 9, 7, 2, 3, 64, 7],
      len = numbersArray.length, // 11
      lastFoundOnIndex;

      lastFoundOnIndex = numbersArray.lastIndexOf(5, -4);
      console.log('Number 5 is last found on index ', lastFoundOnIndex);
      // Number 5 is last found on index 2

      lastFoundOnIndex = numbersArray.lastIndexOf(64, -5);
      console.log('Number 64 is last found on index ', lastFoundOnIndex);
      // Number 64 is last found on index -1
      /* not found, because search starts from index 6 ( len - 5 => 11 - 5 ) */

      lastFoundOnIndex = numbersArray.lastIndexOf(5, -12);
      console.log('Number 5 is last found on index ', lastFoundOnIndex);
      // Number 5 is last found on index -1
      /* not found, search starts from index -1 ( len - 12 => 11 - 12 ) */
      /* in this case search does not even start */
```

## Example 4 - Complex

In this example the function `isLast` determines if the given item is on the last place in the given array. The function logs to the console if the element is found or not in the array. If it is found, it logs if the element is on the last position in the array or not, and it logs what is that position. If the element is not found, function returns `false` and if it is found it returns `true`.

```javascript
  var numbersArray = [2, 36, 5, 6, 2, 9, 7, 2, 3, 64, 7];    

  function isLast(item, array) {
    var lastFoundOnIndex = array.lastIndexOf(item),
        len = array.length;

    if (lastFoundOnIndex !== -1) {

      if (lastFoundOnIndex + 1 === len) {

        console.log('Element ' + item + ' is on the last position in the array.');
        console.log('The last position of element ' + item + ' in the array is ' + lastFoundOnIndex + '.');
        return true;

      } else {

        console.log('Element ' + item + ' is not on the last position in the array.');
        console.log('The last position of element ' + item + ' in the array is ' + lastFoundOnIndex + '.');
        return false;

      }

    } else {

      console.log('The element ' + item + ' does not exist in this array!');
      return false;

    }
  }

  isLast(8, numbersArray);
  // The number 8 does not exist in this array!
  // false

  isLast(7, numbersArray);
  // Number 7 is on the last position in the array.
  // The last position of number 7 in the array is 10.
  // true

  isLast(64, numbersArray);
  // Number 64 is not on the last position in the array.
  // The last position of number 64 in the array is 9.
  // false
```

## Special Notes

The `lastIndexOf` is added in the 5th edition of ECMAScript standard and it may not be supported in the previous versions of the standard. To enable this method in browsers that do not support it, a polyfill can be used. Polyfill is the function that enables features (functions, methods) that are not supported natively in the browsers. Polyfill is written in the supported standard and it emulates the functionality of the method defined by the new, unsupported standard. The polyfill for the `lastIndexOf` can be found on [MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf).

## Browser Support

`lastIndexOf` method is well supported in all major browsers. In IE it is supported starting from version 9.

___

**Author:** *Vojislav Grujić*  
**Posted on:** *May 09, 2016*  
**Career Path:** *Junior JavaScript Developer*
