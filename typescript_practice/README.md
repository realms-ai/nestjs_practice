1. TS Type System

   - helps us catch errors during development
   - uses 'type annotations' to analyze our code
   - only active during development
   - doesn't provide any performance optimization

2. install typescript ts-node globally

   ```
     npm install -g typescript ts-node
   ```

   - verfiy typescript is installed

     ```
       tsc --help
     ```

3. Install VS-Code

   - install code to path
   - install **prettier** from extensions
   - enable **format on save** in _preferences => settings_
   - use **single quotes** wiht prettier in _preferences => settings_
   - tab-size to **2**
   - use your theme _solarized light_

4. Create an app and install a bug intentionally

   - It's prints a JSON data (jsonplaceholder.typicode.com)

   ```
     npm init -y
     yarn add axios
     npm install axios
     tsc --init
   ```

5. Deisgn Patterns with TS

   - How do we use interfaces to write re-usable code
   - Course Goal
     - understand bais types in TS
     - Function typing + annotations
     - Type definition files
     - Arrays in TS
     - Module systems
     - Classes + Refresher in OOP
     - Projects

6. What is **Type** in TS

   - easy way to refer to the **different properties + functions** that a value has
   - Different type of **Types**
     - Primitive Types
       - number
       - string
       - boolean
       - void
       - undefined
       - symbol
       - null
     - Object Types
       - functions
       - arrays
       - classes
       - objects
   - why do we care about types
     - types are used by the typescript compiler to analyze our code for errors
     - types allow other engineers to understand what values are flowing aroung our codebase
   - Type Annotations
     - code we add to tell Typescript what type of value a variable will refer to
     - when to use
       - when function returns the 'any' type and we need to clarify the value
       - when we declare a variable on one line then initialize it later
       - when we want a variable to have a type that can't be inferred
   - Type Inference
     - Typescript tries to figure out what type of value a variable refers to
     - when to use
       - ALWAYS
   - Typed Arrays
     - TS can do type inference when extracting values from an array
     - TS can prevent us from adding incompatible values to the array
     - We can get help with 'map', 'forEach', 'reduce' functions
     - Flexible - arrays can still contain multiple different types
   - Tuples
     - array-like structure where each element represents some property of a record

7. Interfaces

   - along with classes, (we get really strong code reuse in TS)

8. Classes

   - blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

9. Building an app with PARCEL

   ```
     mkdir 03_app
     cd 03_app
     echo "" > index.html
     npm init -y
     tsc -init
     yarn add --dev parcel
     yarn start
   ```

   - install fake data from *https://github.com/faker-js/faker*
   -
