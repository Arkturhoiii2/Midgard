

    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');

    // Fill Listeners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);

    //Loop throught empties and call drag events
    for(const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }


    //Drag Functions
    class dragStart {
    constructor() {
        this.className += ' hold';
        setTimeout((AnimationFrame) => (this.className = 'invisible'), 0);
    }
}
    class dragEnd {
    constructor() {
        this.className = 'fill';
    }
}
    function dragOver(e) {
        e.preventDefault();

    }
    function dragEnter(e) {
        e.preventDefault();
        this.className += ' hovered';

    }
    class dragLeave {
    constructor() {
        this.className = 'empty';

    }
}
    class dragDrop {
    constructor() {
        this.className = 'empty';
        this.append(fill);
    }
}