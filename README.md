### Programming Style and The Way You Think
  - #### The Way We Think
    - A fundamental assumption of economics is not true: **Any party can be expected to pursure their interests.** Because people do NOT think the way economics think they think.
    - Generally, we don't think the way we think we think.
    - Tobacco, how people reasonable or unreasonable think of it?
  - #### The Programming Though Process
    - Programs, the most complicated things people make.
    - Artificial Intelligence, building programs built by programs.
    - Programs must be perfect **at any possible inputs**.
      - In fact, we would not recognize perfection if it ever occurred.
    - Programming uses Head and Gut.
    - Programming always makes tradeoffs.
    - Prefer forms that are error resistant.
    - In fact, most of time we're making mistakes and correcting them.
  - #### Understanding Good Programming Style
    - "That hardly ever happen." is another way saying "It happens."
    - A good style can help produce better programs.
      - Style is should not be about personal preference and self-expression.
    - Good use of style can help reduce the occurrence of errors.
    - Programs must communicate clearly to people.
    - Never rely on automatic semicolon insertion.
  - #### Avoiding Confusing Code
    - **Confusion** must be avoided.
      - Always use '===' instead of '=='
    - Avoid forms that are difficult to distinguish from common errors.
    - Avoid writing program ambiguous.
    - Make your programs look like what they do.
    - Declare all variables at the top of the function.
    - Declare all functions before you call them.
    - Avoid global variables.
    - Write in a way that clearly communicates your intent.
    - Always put curly braces after if() statement.
    - As our processes become more agile, our coding must be more resilient.
    - Optimizing everything does NOT make sense
    - Language Subsetting
      - Only a mad man would use all of C++
      - User has power to choose the subset of language to use
    - Performance
      - Sometimes work against to programming style
      - Performance specific code is usually crufty
      - Clean code is easier to reason about
      - "Premature Optimization is the root of all evil." --Donald Knuth
      - Most of the code has a negligible impact on performance. Only optimize the code that is taking the time.
      - Algorithm replacement is vastly more effective than code fiddling.

### And Then There Was JavaScript
  - #### Classes vs Prototypes
    - Create new instances inherit from that object.
    - Customize the new objects.
    - Taxonomy and classification are not necessary.
    - Delegation, differential inheritance
    - What 'new' key word does:
  ```js
  function new(func, args){
    var that = Object.create(func.prototype);
    var result = func.apply(that, args);
    return (typeof result === 'object' && result) || that;
  }
  ```
    - Keys must be string, automatic type coercion
  - #### There is one number type in JavaScript
    - 64-bit floating point
    - IEEE-754 ("Double")
    - JavaScript borrowed a lot of bad ideas from Java, one of these is Math object.
    - It would be better to put Math object methods into Number.
    - NaN, not a number, but typeof NaN is 'number'
  - #### Strings and Arrays
    - UCS-2, not quite UTF-16.
    - Strings are Immutable.
    - Array inherits from Object.
    - Indexes are converted to strings and used as names for retrieving values.
    - Very efficient for sparse arrays.
    - No need to provide length or type when creating an array.






