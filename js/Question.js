class Question {

  constructor() {
    
    this.title = createElement('h1')
    this.input1 = createInput("Your Name");
    this.input2 = createInput("Correct Option no.");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Brain Test");
    this.title.position(350, 0);

    this.question.html("Question: What is so delicate that even mentioning it breaks it ? " );
    this.question.position(86, 80);
    this.option1.html("1: Glass " );
    this.option1.position(150, 110);
    this.option2.html("2: Anger " );
    this.option2.position(150, 140);
    this.option3.html("3: Silence " );
    this.option3.position(150, 170);
    this.option4.html("4: Wall " );
    this.option4.position(150, 200);

    this.input1.position(150, 270);
    this.input2.position(350, 270);
    this.button.position(780, 370);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
