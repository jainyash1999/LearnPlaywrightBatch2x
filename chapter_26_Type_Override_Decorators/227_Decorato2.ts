function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]): any {
        console.log("called decorator");
        return originalMethod.apply(this, args);
    };
}

class Greeter {

    @logged
    hello(): string {
        return "Hi";
    }
}

let m = new Greeter().hello();
console.log(m);