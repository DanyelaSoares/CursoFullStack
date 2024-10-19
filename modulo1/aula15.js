getData(index); {
    if (index < 0 || index >= this.size) {
      return console.log("Index fora dos limites!");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  removeAt(index){
    if(index < 0 || index >= this.size){
        return console.log("Index fora dos limites!")
    }

    let current = this.head

    if(index === 0){
        this.head = this.head.next

        if(this.head !== null){
            this.head.previous = null
        } else {
            this.tail = null
        }
    } else if(index === this.size -1){
        this.tail = this.tail.previous
        this.tail.next = null
    }}

    if (index > -1 && index < this.count){
        let current = this.head;
        let i = 0;
        while (i++ < index){
            current = current.next;
        }
        return current.data;
    } else {
        return null;
    }

    removeFrom(index);{
        if(index < 0 || index > this.size){
            return console.log("Index fora dos limites")}
        let current = this.head
        let previous

        if(index === 0){
            this.head = current.next} else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next}
            previous.next = current}}