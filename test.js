// let cap2 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("1", this.firstName);
//         const iAmInner = () => {
//             console.log("2", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap2.sayHi();
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};
 
// ladder.up();
// ladder.up();
 
// ladder.up();
// ladder.down();
// ladder.showStep();
ladder.up().up().up().down().showStep();