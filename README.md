# Prog1-Lesson
Lesson plan and project overview for the Programming 1 class

## Overview

This is a general overlook and review of some core concepts of Programming and Computer Science. All coding will be done in VB to follow the known curriculum of the course.

What will be covered:
  - Understanding of Loops and uses of repetitive programming concepts
  - Introduction to uses of simple data structures and arrays
  - Combined uses of looping practices and arrays to solve real world problems
  
#### Resources:
* none

# Concept 1: Loops

### What is a loop?

A loop is exactly as it sounds. Something that performs a repeated action. Loops exist in every modern programming language available and all follow a mostly similiar structure, use, and concept.

First, we will look at all the different types of Loops VB uses before comparing it to other popular modern languages.

##### Some key terms to keep in mind:
| Word | Definition |
| ------ | ------ |
| Index | An index refers to a numerical position within something a loop traverses. For instance, say you are looping through a list of customers. Each customer on the list is given an index which indicates their position and order. An important thing to keep in mind with an index is that it begins counting at 0 instead of 1. This means that the <strong>first</strong> item in a list will have an <strong>index</strong> of zero, the second item will have an index of 1, and so forth. |
| Iterator | ???? |
| Conditional | ???? |
| Initialization | ???? |


| Loop Type | Description |
| ------ | ------ |
| Do Loop | It repeats the enclosed block of statements while a Boolean condition is True or until the condition becomes True. It could be terminated at any time with the Exit Do statement. |

### Example
```
Dim index As Integer = 0
Do
    Debug.Write(index.ToString & " ")
    index += 1
Loop Until index > 10

Debug.WriteLine("")
' Output: 0 1 2 3 4 5 6 7 8 9 10
```
| Loop Type | Description |
| ------ | ------ |
| For...Next | It repeats a group of statements a specified number of times and a loop index counts the number of loop iterations as the loop executes. |

### Example
```
For index As Integer = 1 To 5
    Debug.Write(index.ToString & " ")
Next
Debug.WriteLine("")
' Output: 1 2 3 4 5
```

| Loop Type | Description |
| ------ | ------ |
| For Each...Next | It repeats a group of statements for each element in a collection. This loop is used for accessing and manipulating all elements in an array or a VB.Net collection. |

### Example
```

```

| Loop Type | Description |
| ------ | ------ |
| While...End While | It executes a series of statements as long as a given condition is True. |

### Example
```

```

| Loop Type | Description |
| ------ | ------ |
| With... End With | It is not exactly a looping construct. It executes a series of statements that repeatedly refer to a single object or structure. |

### Example
```

```

| Loop Type | Description |
| ------ | ------ |
| Nested Loops | You can use one or more loops inside any another While, For or Do loop. |

### Example
```

```

