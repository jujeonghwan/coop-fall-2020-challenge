class EventSourcer {
  
  constructor() {
    this.num_arr = [];  // num list
    this.cur_pos = 0;   // current position
    this.value = 0;     // value
  }

  add(num) {
    this.value += num;   
    
    if (this.cur_pos === this.num_arr.length) {
      this.num_arr.push(num); // Add to num list
    }
    else {
      this.num_arr[this.cur_pos] = num;
    }
    
    this.cur_pos += 1;
  }

  subtract(num) {
    this.value -= num;    
    
    if (this.cur_pos === this.num_arr.length) {
      this.num_arr.push(-num); // Add to num list (minus)
    }
    else {
      this.num_arr[this.cur_pos] = -num;
    }

    this.cur_pos += 1;
  }

  undo() {
    // Check position
    if (this.cur_pos <= 0) {
      return;
    }

    // Undo
    this.value -= this.num_arr[this.cur_pos - 1];

    // Move cur position (-1)
    this.cur_pos -= 1;
  }

  redo() {
    // Check position
    if (this.cur_pos > this.num_arr.length - 1) {
      return;
    }

    // Redo
    this.value += this.num_arr[this.cur_pos];

    // Move cur position (+1)
    this.cur_pos += 1;
  }

  bulk_undo(num) {
    // Loop
    for (var i = 0; i < num; i++) {
      // execute undo()
      this.undo();
    }
  }

  bulk_redo(num) {
    // Loop
    for (var i = 0; i < num; i++) {
      // execute redo()
      this.redo();
    }
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
