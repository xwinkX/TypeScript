
let age:number = 50;
let name:string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => { return 100 + a };

let anything:any;
anything = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';
let str: string;
if (typeof(some) === 'string') {
   str = some; 
}

let person: [string, number] = ['Max', 21];

