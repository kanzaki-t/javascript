/*
* 直接引用带有import关键字的JS脚本会报错：Access to script at ‘file:’ from origin ‘null’ has been blocked by CORS policy
* Live Server插件即可完美解决
*/

const a = "m1模块中的变量a的值"
export const b = 2 // 命名导出
export const c = 3 // 命名导出

// 命名导出
export const fn = () => {
    console.log("first")
}


/*
*
*
*
*
*
*
*/




export default a;
export {} // 同样是命名导出