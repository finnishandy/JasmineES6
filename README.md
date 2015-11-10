There’s many different ways to test the Falabella components. Unit testing is most useful for TDD approach when developing the components. Testing if some functionality on the component works as expected falls more to the QA department and their functional testing suite like WebDriver.

Basically writing unit tests on specs can be described as BDD, but that approach is a bit too heavy approach for plain old TDD so I’d stick to a framework which is BDD type of framework suitable for TDD i.e. Jasmine.

As the modules are ES6 we need to use jasmine-es6. (if you are using global jasmine you might want to uninstall it before installing jasmine-es6).

Here’s link for how to set up Jasmine with NPM. https://github.com/vinsonchuong/jasmine-es6

I will provide working test for one React component using this framework.
