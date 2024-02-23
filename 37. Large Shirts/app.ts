/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size: string = "Large", message: string = "I love TypeScript!"): void {
    return console.log(`Size ${size}, Message: ${message}`);
}

// Large Shirt with default message:

make_shirt();

// Medium Shirt with default message:

make_shirt("Medium");

// Custom Shirt with a different message and size:

make_shirt("Small", "Hello, TypeScript!");

