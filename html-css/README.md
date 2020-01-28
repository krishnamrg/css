# css selectors
 * id selector
 * class selector
 * element selector
 * global selector
 * group selector
 * attribute selector
 * descendent selector
 * adjacent selector

 ## id selector
    * #id {
        props:prop;
    }
## class selector
    * .class-name{
        props:props;
    }
## element selector
    * HtmlElementName{
        props:props;
    }
## global selector
    * *{
        props:props;
    }
## group selector
    * HtmlElementName1, HtmlElementName2, ..{
        props:prop;
    }
## attribute selector
    * HtmlElement[attribute-property="attribute-value"]{
        props:prop;
    }
    ** example of attribute selector
    a[href="https://www.google.com"]{
        background-color:#fefefe;
    }
    (Or)
    a[href*="https://www.google.com"]{ //signifies contains
        prop:value;
    }
## descendent selector
    HtmlElement1 Htmlelement2 {
        ....
    }
    (Or)
    HtmlElement .class-name{
        ....
    }
    (Or)
    HtmlElement #id-name{
        ....Visual Studio Code
    }
    (Or)
    *** A combination of all of the above.

## direct child selector
    * this is used to select only the direct children of the parent element.
    ** example
    <main>
        <p></p>
        <p></p>
        <div>
            <p></p>
        </div>
    </main>

    * to select only the first level p use > operator

    main > p{
        color:red;
    }


## adjacent seletors
    ** example
    input:checked + label[for="webdevelopment"], 
    input:checked + label[for="photoshop"],
    input:checked + label[for="singingmadonnasongs"]{
        background-position: 0 -64px;
        color:#ce1010;
    }

## pseudo classes
    * :focus, :hover, :valid, :first-child, :nth-child(index), :last-child
    (list of psuedo classes can be found at w3schools)
    ** they are used to style the elements when they are in a particular state.
    ** example 
    nav li a:hover{
        prop:value:
    }

## pseudo elements
    * pseudo elements are mostly like psuedo classes but they let you manipulate content before/after/between content.
    ** example
    ** a li p::first-line{
        prop:value;
    }
    ** section.item p::selection{
        background-color:red;
    }
    * following ... content will be inserted after paragraph element.
    ** p::after{
        content: '...'
    }

## box-sizing : border-box
    * this property tells that padding is inclusive of the total width of the container.
    * normally ```width = widht + padding```.
    * ```box-sizing : border-box``` resets that property.

# interms of specifity, the more specific the selector, the rule with more specific rule wins. css works top down for same selectors.

# ```!important``` declaration is used to override this behavior.