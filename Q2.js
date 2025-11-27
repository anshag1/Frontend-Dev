// Q2 Multi-Type Data Summary
let data = {
 stringVal: "Hello",
 numberVal: 42,
 booleanVal: true,
 arrayVal: [1,2,3],
 objectVal: {a:1},
 nullVal: null,
 undefinedVal: undefined
};
console.table(Object.fromEntries(
 Object.entries(data).map(([k,v]) => [k,{value:v,type:Array.isArray(v)?'array':typeof v}])
));
