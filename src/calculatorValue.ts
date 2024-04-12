import { makeAutoObservable } from "mobx"

class calculatorValue {

  value = ''
  constructor() {
    makeAutoObservable(this)
  }


  addNumber(newValue: string) {
    const maxLength = 15;

    // Check if updating the value will exceed the maximum length
    if (this.value.length + newValue.length <= maxLength) {
      this.value = this.value + newValue;
    } else {
      // If exceeding the maximum length, you can choose to reject the update or truncate the value
      // Example: Truncate the value to fit within the limit
      this.value = (this.value + newValue).substring(0, maxLength);
    }
  }

  delete() {
    this.value = ''
  }

  getResult() {
    this.value = eval(this.value)
  }

}

export default new calculatorValue()