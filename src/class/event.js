export class Event {
    /**
     * 
     * @param {Number} eventID 
     * @param {String} start Hour and date of beginning
     * @param {String} end Hour and date of end
     * @param {Number} eventLabelId Event of the label associated, default is 0
     */
    constructor(eventID, start, end, title, eventLabelId){
        this.eventID = eventID;
        this.start = start;
        this.end = end;
        this.title = title;
        this.eventLabelId = eventLabelId;
    }
    edit(newStart, newEnd,newTitle, newLabel = 0){
        this.start = newStart;
        this.end = newEnd;
        this.title = newTitle;
        this.newLabel = newLabel;
    }
    delete(){

    }
}