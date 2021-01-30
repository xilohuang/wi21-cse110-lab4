1: it will print out the number of i after for loop, because var will ignore code block
2:  it will print out the number of discountprice, because var will ignore code block
3:  it will print out the number of finalprice, because it change during the for loop
4: [50,100,150] it follows the logic of the for loop

5:it will raise error, because let do not ignore code block and i are undefined.
6:it will raise error, because let do not ignore code block and discountprice are undefined outside of for loop.
7: it will print out the finalprice, since it will change during the for loop.
8:[50,100,150] follows the logic of for loop

9: it will raise error, because let do not ignore code block and i are undefined.
10: it will raise error, because let do not ignore code block and discountprice are undefined outside of for loop.
11: it will print 0, because const cannot change
12:[0,0,0] assume it's no error before, so we will always push 0 into the array.

13-A: student.name
13-B: student['Grad Year']
13-C: student.greeting()
13-D: student['Favorite Teacher'].name
13-E: student.courseLoad[0]

14-A: 32  ex:2 will be converted to string, then it will add two string together.
14-B: 1     ex: '3' will be converted to number
14-C: 3     ex: null will be 0
14-D: 3null     ex:null can be convert to string
14-E: 4         ex: true will be 1
14-F: 0         ex:false and null are 0
14-G: error     ex:double quote will raise error
14-H: error     ex:double quote will raise error

15-A: true      ex:'2' convert to 2
15-B: false     ex:both convert to number and compare
15-C: true      ex:'2' convert to 2
15-D: false     ex:type are not same
15-E: false     ex:1 do not equal to 2
15-F: true      ex:both are bool type and true

16: == is checking whether two operand is equal. === is a strict equality that checks the value without the type conversation, it will check two operands' type. 

17: it will print 'how are you?', this is because true will be converted to 1 (true == 1), but 1 != 2. So it will pass the first condition. Then else if (2) condition. Any number except 0 consider to be true;

19: The function will return array[6,8,10]. Let's see how it will modify the first element (1). In the for loop, newArr will push a function callback(array[i], function(x)). We know that the callback parameter will be the dosomething function, so it will call dosomething with parameter (1, function((return 1 + 2)). So it will be dosomething(1, function(3)). Then it will return the function which return x * 2, so dosomething(1 function(3)) will return 6. And so on on the rest of array [1,2,3].

21: 1432