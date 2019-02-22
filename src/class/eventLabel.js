export class EventLabel {
    /**
     * 
     * @param {Number} eventLabelId 
     * @param {String} description Short description of label
     * @param {String} color Hexadec Color
     */
    constructor(eventLabelId, description, color) {
        this.eventLabelId = eventLabelId;
        this.description = description;
        this.color = color;
        this.linkedEvents = [];
    }
    edit(newDescription, newColor) {
        this.description = newDescription;
        this.color = newColor;
    }
    delete() {

    }
}