// Q4 Custom Form Builder (logic only)
class FormBuilder{
 constructor(fields){ this.fields=fields; }
 getFormData(){ return Object.fromEntries(this.fields.map(f=>[f.label, "value"])); }
}
console.log(new FormBuilder([{type:"text",label:"Username"}]).getFormData());
