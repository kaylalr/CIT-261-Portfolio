const calculator = {
    number1: 0,
    number2: 0,
    operation: '',
    inputOutput: document.getElementById('calcInput'),
    // you can also do this function the traditional way like: function clear() {}
    clear: function () {
        this.inputOutput.value = '';
    },
//    add: function () {
//        let num1 = this.inputOutput.value;
//        //this.inputOutput.value = num1;
//        this.inputOutput.value = '';
//        let num2 = this.inputOutput.value;
//        this.inputOutput.value = num1 + num2;
//    },
//    equals: function () {
//          
//    },
    buttonClicked: function (button) {
        console.log(button.innerHTML);
        let inputBox = this.inputOutput;

        switch (button.innerHTML) {
            case 'M':
                break;
            case 'C': 
                this.clear();
                break;
            case '/':
                break;
            case 'X':
                break;
            case '-':
                break;
            case '+':
                break;
            case '=':
                break;
            default:
                //if it made it to here it's a number
                inputBox.value = inputBox.value + button.innerHTML;
        }
    },
}
