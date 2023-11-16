import humanBody from "./humanBody";
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


export default maleBody;