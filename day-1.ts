function createHelloWorld() {
    const helloWorld = "Hello World"
	return function(...args): string {
        return helloWorld
    };
};
