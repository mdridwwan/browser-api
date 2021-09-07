console.log('I am here');
// alert('ma is comming!!');
const maComing = () => {
    alert('ma is comming!!')
};
const askPiknik = () => {
    const response = confirm('Are you going to piknik');
    console.log(response);
    if (response === true) {
        alert('amake fee da vkash kore de');
    } else {
        console.log('DGM !!! Door giye mor')
    }
};
const askName = () => {
    const name = prompt('what is your name?');
    if (name) {
        console.log(name);
    }
}