// let add = {
//     type:'ADD'
// }

let add = (num) =>{
    console.log('add--action',num);
    return {
        type:'ADD'
    }
}

export default add;