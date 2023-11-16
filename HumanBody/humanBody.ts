import * as readlineSync from 'readline-sync';
// import maleBody from './maleBody';
// import femaleBody from './femaleBody';
abstract class humanBody {
  abstract chewingFood(): void;
  abstract swallowingFoood(): void;
  abstract storingIntoStomach(): void;
  abstract goingThroughLargeIntestine(): void;
  abstract goingThroughSmallIntestine(): void;
  abstract absorbingMinerals(): void;
  abstract passingWasteThroughRectum(): void;

  Digestion(): void {
    this.chewingFood();
    this.swallowingFoood();
    this.storingIntoStomach();
    this.goingThroughLargeIntestine();
    this.goingThroughSmallIntestine();
    this.absorbingMinerals();
    this.passingWasteThroughRectum();
  }
}
class femaleBody extends humanBody{
    chewingFood(): void {
        console.log("Chewing food usally 28 times.... ");
    }

    swallowingFoood(): void {
        console.log("swallow Food through easophageous....");
    }

    storingIntoStomach(): void {
        console.log(" Stores the food in stomach.....");
    }
    goingThroughLargeIntestine(): void {
        console.log("passing through large intestine....")
    }
    goingThroughSmallIntestine(): void {
        console.log("passing through small intestine......")
    }
    absorbingMinerals(): void {
        console.log("while passing from intestine it has been absorbed quicker than man....")
    }
    passingWasteThroughRectum(): void {
        console.log(" passing through rectum 💩....");
    }
}

class maleBody extends humanBody{
    chewingFood(): void {
        console.log("Chewing food usally 24 times.... ");
    }

    swallowingFoood(): void {
        console.log("swallow Food through easophageous....");
    }

    storingIntoStomach(): void {
        console.log(" Stores the food in stomach.....");
    }
    goingThroughLargeIntestine(): void {
        console.log("passing through large intestine....")
    }
    goingThroughSmallIntestine(): void {
        console.log("passing through small intestine......")
    }
    absorbingMinerals(): void {
        console.log("while passing from intestine it has been absorbed....")
    }
    passingWasteThroughRectum(): void {
        console.log(" passing through rectum 💩....");
    }
}



const gender: string = readlineSync.question(
  "Please enter the input as Male for Female of which you want to see the digestion "
);
if (gender === "Male" || gender==="male") {
  const malebody = new maleBody();
  malebody.Digestion();
} 
else if (gender === "Female"|| gender==="female") {
  const femalebody = new femaleBody();
  femalebody.Digestion();
} 
else {
  console.log("wrong Input");
}

export default humanBody;
