// # This is a demo code

//-- ===============================================================================================
/* -- About this snippet
    All code blocks here is intended solely for demonstration only -    //-- This SC produces no output when executed
    All basic variables, primitive data strucutres, functions and basic 
    - encapsulation will be contained on this fil

    For better visuals, we highly suggest all users to install "better comments" vs code extension
    https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

    and change the comment-tags.json file soruce code from the settings according to the following
    1.) '?' to '#' 
    2.) "TODO" to "--"

    i.e: from Json
        {
            "tag": "?",   // -- Change this to "#"
            "color": "#FF2D00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
 */

        /// One characteristic of Java script is it being weakly typed and nominal - meaning
        /// every variables are only specified using a variable specifier (never a type) and dynamically 
        /// determines the data type that could change along the run time
        /// -- The JS superset - Type script - supports Types on writing source codes
//-- ================================================================================================

// Running main method like in other OOP languages
Main.main();

// Defining class in JS
class Demo{

    // Java script doesn't have any structs - however, it can be replicated using pnjectcs

    //# JS VARIABLES - - 
    static Declare_variables(){
        
        // this is a constant
        const VALUE = 12;
        const VALID = true;

        // using "let" -- Only accessible within this code blocl

        let a = 10;                              // number (int)                                        
        let b= 10.1                              // float 
        let c = 'c';                             // character
        let d = "Name";                          // String
        let e = true;                            // Bolean

        let f = [1,3,4,5,6];                     // List 
        let g = ["Name", 12, true]               // list - treated as a tuple

        let object = {                           // onjects - can be treated as structs and enums
            trait: "keen",
            level: 12
        }

        let enum_object = {                      // objext as an enum
            RED: "red",
            YELLOW: "yellow",
            BLUE: "blue "
        }

        // Using "var" --- ignores '{}' in scoping - accessible outside of this code scope

        var h = 10;
        var i= 10.1
        var j = 'c';
        var k = "Name";
        var l = true;

        var m = [1,3,4,5,6];
        var n = ["Name", 12, true] 

        // Explecit Global variable - accessible anyware - even outside of this code scope
        global_a = 12
        global_b = true;

        // -- NOTE
        // java script is nominally and weakly typed language
        // it does not define a variable type to declare a variable
        // it utilizes a rule on defining specifiers for scope (using "let", "var" and )
    }

    // # Functions example

    // function functionName (a) {  -- A function in JS can onluy be declared outside of the class
    //     return ""
        
    // }

    static method_(param1, param2){
        // code
    }

    method2(params){
        // code
    }

}

// Correct way of defining function
function a_function(){
    // code
}

class Main{
    static main() {
        let a = new Demo();
        a.Declare_variables(); // function is called to show that theres no error in the typing
    }
}





































// -- Resources

/*//--============================================================================
 *  src = https://www.w3schools.com/js/ - W3 school
 *  src = https://dev.to/joelbonetr/structs-in-javascript-1p9l - structs in js
 * 
 * 
 * 
 */
//--===============================================================================

