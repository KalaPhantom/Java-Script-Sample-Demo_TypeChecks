// -- =============================================================> 
/** Overview | Conversions and Type Checking 
 * 
 * 
 * Sources: 
 * https://www.w3schools.com/js/js_type_conversion.asp 
 * https://www.w3schools.com/js/js_datatypes.asp - JS Data types
 * https://www.freecodecamp.org/news/javascript-type-checking-how-to-check-type-in-js-with-typeof/ - type checking
 */

// # code runner |       node "Demo\Conversions.js"
// -- =============================================================> 


//--===============================================================

/** Overview
 * This code snippet contains all demonstration for Type Checking and Conversions
 * Some lines are commented for it is intended to produce errors (for demonstration)
 * 
 
|  For better visuals, we highly recommend all users to install "better comments" vs code extension via: 
|  https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

    and change the comment-tags.json file soruce code from the settings according to the following
    1.) '?' to '#' 
    2.) "TODO" or "todo" to "--"

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
 * 
 */
//--===============================================================


line = "==================================================================" 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// # Code space starts here


class Conversions{

    // Converting types to strinf   -- Not allowed in rust
    static to_String(){  

        let a = String(12)                              // converting all to strings
        let b = String(true)                            //
        let c = String([1,2,true,12.5])                 //

        console.log(line)
        console.log("\n\n[] Output from string conversions ==")
        console.log("Type of \"a\" " + typeof(a) + "\n" + "Type of \"b\" " + typeof(b) + "\n" + "Type of \"c\" " + typeof(c));
        console.log("Outputs of the elements after the conversion: " + a +  " " + b + " {" + c + "}")
        console.log(line + "\n")
    }

    // Converting other non-integer elements to Number type-- Not allowed in Rust unless it is another number types
    static to_Number(){

        let a = 12.45                                            // float
        let b = "Tango"                                          // string
        let c = ["{"+12,6789.4879,true,"str" +"}"]               // collection array
        let col = Number([a,b,c])                                // Converting all elements to Number 
        let col2 = [a,b,c]                                       // Non - Converted elements 

        // Displays
        console.log(line)
        console.log("\n[] Converion outputs to number \n Outputs: \n" + Number(a) + " " + Number(c) + "  {" + Number(c) + "}" )
        console.log("\n[] Collection before conversion: \n " + col2 + "\n")   
        console.log("Type of [a]: " + typeof(a)  + "\nType of [b]: " + typeof(b) + "\nType of [c:] " + typeof(c))
        console.log("\n"+line + "\n\n")

        // -- Converting booleans to number types
        console.log(line)
        console.log("\n []Converting booleans to number === ")
        
        let b1 = true
        let b2 = false
        let b_col = [b1,b2]         // for display purposes          

        // Displays
        console.log("> Eleemnts before conversion: " + b_col )
        console.log("> Elements after conversion: " + Number(b1) + ", " + Number(b2) + "\n")
        console.log(line)
    }

    // Not allowed in rust
    static automatic_type_conversions(){

        
        let a = 5 + null;                   // Outputs  5         - for null is automatically converted to 0
        let b = "5" * "5";                  // Outputs 25         - for both strings are automatically converted to number
        let c = "5" + 7;                    // Outputs "57"       - for the language pervieves it as a concatenation
        let d = "5" - 3;                    // Outputs 2          - for the "5" is converted to number and the operation is "-"
        let e = "34" + null;                // Outputs "34null"   - because null is converted to "null" and is percieved to be a concatenation

        console.log(line)                   // line                 as defined in line 13 

        //display
        console.log("\nAutomatic Type conversions ===")
        console.log("5 + null: " + "Outputs: " + a + "    Type:" + typeof(a))
        console.log("\"5\" * \"5\": " + "Outputs: " + b + "    Type:" + typeof(b))
        console.log("\"5\" + 7: " + "Outputs: " + c + "    Type:" + typeof(c))
        console.log("\"5\" - 3: " + "Outputs: " + d + "    Type:" + typeof(d))
        console.log("\"34\" + null: " + "Outputs: " + e + "    Type:" + typeof(e))

        console.log("\n" + line )    
    }

}

// Call example functions here
function main(){
    Conversions.to_String();       
    Conversions.to_Number(); 
    Conversions.automatic_type_conversions();
}

main()





// -- ===========================<informatices>================================> 
/**
 * Variables and types in JS (Vanilla )
 * 
 *       .---------.------------------------------------------.
 *       |  Type   |                Description               |
 *       :---------+------------------------------------------:
 *       | String  | Series of characters enclosed in quotes  |
 *       :---------+------------------------------------------:
 *       | Number  | A number (Integer)                       |
 *       :---------+------------------------------------------:
 *       | Bigint  | A number that represent a large integer  |
 *       :---------+------------------------------------------:
 *       | Boolean | A value representing true or false       |
 *       :---------+------------------------------------------:
 *       | Object  |  A collection of key value-pairs of data |
 *       :---------+------------------------------------------:
 *       | Symbol  |  A unique and primitive identifier       |
 *       '---------'------------------------------------------'
 * 
 *     Note: 
 *          When a variable becomes an output (on either .document() or .log() ) the variable type becomes string automaticially
 *          Operations between all number types (number, float, big-int) is allowed
 *          String concatenation between symbol and string is also allowed
 *          
 *  Conversion methods 
 * 
 * 
 * 
 * 
 */


// -- ====================================================================> 





