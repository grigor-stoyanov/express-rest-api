// enum LoggingLevel{
//     ERROR,
//     INFO,
//     WARN,
//     DEBUG,
//     TRACE
// }
// const appMaxLoggingLevel = LoggingLevel.DEBUG;

// function Log(level: LoggingLevel) {
//     return (value: any, context: ClassMethodDecoratorContext)=>
//         {
//             return function (...args: any[]) {
//                 if(level <= appMaxLoggingLevel) {
//                     console.log(`>> LOG: ${String(context.name)}, ${JSON.stringify(args)}`)
//                 }
//                 return value.apply(this, args)
//             }
//         };
// }

// function Perf(){
//     return (value:any, context: ClassMethodDecoratorContext) => {
//         return function (...args:any[]){
//             const start = new Date().getTime();
//             const result = value.apply(this,args);
//             console.log('Elapsed: ' + (new Date().getTime() - start)/1000 + " seconds");
//             return result;
//         }
//     }
// }

// // experminetal legacy way
// // function Perf():MethodDecorator{
// //     return (target:any, propertyKey:string, descriptor:PropertyDescriptor) =>{
// //         const originalFunction:Function = descriptor.value;
// //         descriptor.value = function (...args: any[]){
// //             const start = new Date().getTime();
// //             const result = originalFunction.apply(this,args);
// //             console.log("Elapsed Time:" + (new Date().getTime() - start) + "ms");
// //             return result
// //         }
// //         return descriptor;
// //     }
// // }

// function SealClass():ClassDecorator{
//     return (constructor: Function) =>{
//         Object.seal(constructor);
//         Object.seal(constructor.prototype);
//     }
// }
// function id() {
//     return function (value: undefined, context: ClassFieldDecoratorContext) {
//         context.addInitializer(function () {
//             Object.defineProperty(this, context.name, {
//                 get() {
//                     if (!this._id) {
//                         this._id =
//                             Date.now().toString(36) +
//                             Math.random().toString(36).slice(2);
//                     }
//                     return this._id;
//                 }
//             });
//         });
//     };
// }

// @SealClass()
// class DbService {
    
//     @id()
//     id:string;
    

//     @Perf()
//     @Log(LoggingLevel.DEBUG)
//     saveData(data: any) {
//         console.log("saving to database...");
//     }
// }




// const db = new DbService();
// db.saveData({hello:"World"});

// // Object.defineProperties(DbService.prototype,{"hello":{
// //     value:function(){console.log("helloworld")},
// // }});

// // (db as any).hello();
// console.log(db.id)
// const db2 = new DbService();
// console.log(db2.id)
// const db3 = new DbService();
// db2.id="3";
// console.log(db2.id)
