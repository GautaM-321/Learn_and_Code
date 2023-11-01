abstract class drinking {
  abstract storingDrinkInAbdomen(): void;
  abstract passingToKidneys(): void;
  abstract storingToGallBladder():void;
  

  Urination() {
    this.storingDrinkInAbdomen();
    this.passingToKidneys();
    this.storingToGallBladder();
  }
}

class purifying extends drinking {
  storingDrinkInAbdomen(): void {
    console.log("drink is getting stored in abdomen...........");
  }

  passingToKidneys(): void {
    setTimeout(() => {
      console.log(" passing to kidneys through blood vessels.....");
    }, 5000);
  }

  storingToGallBladder() {
    setTimeout(() => {
      console.log("getting stored in gallbladder.....");
    }, 10000);
  }
}

const purifyingObj = new purifying();
purifyingObj.Urination();
