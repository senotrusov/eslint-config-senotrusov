'use strict';

let foo;

foo = foo
  ? foo
  : foo
    ? foo
    : foo;

foo =
  foo
    ? foo
    : foo
      ? foo
      : foo;

foo = foo ? foo
  : foo ? foo : foo;

foo = foo
  ? foo
  : foo;

foo =
  foo
    ? foo
    : foo;

// I would like to have support for that kind of ternary one day
// foo = foo ? foo
//           : foo;

foo();
