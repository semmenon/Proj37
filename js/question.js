class Question{
    constructor(){
        this.questions = createElement("h3")
        this.option1 = createElement("h3")
        this.option2 = createElement("h3")
        this.option3 = createElement("h3")
        this.option4 = createElement("h3")
        this.button = createButton ("submit")
        this.input = createInput("name")
        this.input1 = createInput("answer")

    }

    hide(){
        this.questions.hide()
        this.button.hide()
        this.input.hide()
        this.input1.hide()
    }
    display(){
        var title = createElement("h2")
        title.html("MyQuiz Game");
        title.position(350,0);

        this.questions.html("Question: What starts and ends with the letter 'E', but only has one letter? ")
        this.questions.position(150, 80);
        this.option1.html("1: Everyone ");
        this.option1.position(150, 100);
        this.option2.html("2: Envelope");
        this.option2.position(150, 120);
        this.option3.html("3: Estimate");
        this.option3.position(150, 140);
        this.option4.html("4: Example");
        this.option4.position(150, 160);
        this.input.position(150,230)
        this.button.position(200,300)
        this.input1.position(500,230)

        
        this.button.mousePressed(()=>{
        this.input.hide()
        this.input1.hide()
        this.button.hide()
        contestant.name = this.input.value()
        contestant.answer = this.input1.value()
        contestantCount += 1
        contestant.index = contestantCount
        contestant.update()
        contestant.updateCount(contestantCount)

        })
        
    }
}