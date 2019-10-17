
/**********************************************************************
John and his family went to 5 different restaurants. The bills were 
$124, $48, $268, $180 and $42. John likes to tip 20% of the bill when 
the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills 
and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an 
array containing final paid amounts (bill + tip).


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 
different restaurants. The bills were $77, $375, $110, and $45. Mark 
likes to tip 20% of the bill when the bill is less than $100, 10% when 
the bill is between $100 and $300, and 25% if the bill is more than $300 
(different than John).

5. Implement the same functionality as before, this time using Mark's 
tipping rules
6. Create a function (not a method) to calculate the average of a given 
array of tips.
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
 */

/********************************************************************* 
* Coding Challenge 
 */

var familyJohn = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    check: [],
    calcTip: function() {
        for (i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 50) {
                this.tip[i] = this.bill[i] * 0.2;
            } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
                this.tip[i] = this.bill[i] * 0.15;
            } else if (this.bill[i] > 200) {
                this.tip[i] = this.bill[i] * 0.1;
            }
        };
        return this.tip[i];
    },
    calcCheck: function() {
        for (i = 0; i < this.bill.length; i++) {
            this.check[i] = this.tip[i] + this.bill[i];
        };
        return this.check;
    }
};
familyJohn.calcTip();
familyJohn.calcCheck();
console.log(familyJohn);

//Extra

var familyMark = {
    bill: [77, 375, 110, 45],
    tip: [],
    check: [],
    calcTip: function() {
        for (i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 100) {
                this.tip[i] = this.bill[i] * 0.2;
            } else if (this.bill[i] >= 100 && this.bill[i] <= 300) {
                this.tip[i] = this.bill[i] * 0.10;
            } else if (this.bill[i] > 300) {
                this.tip[i] = this.bill[i] * 0.25;
            }
        };
        return this.tip[i];
    },
    calcCheck: function() {
        for (i = 0; i < this.bill.length; i++) {
            this.check[i] = this.tip[i] + this.bill[i];
        };
        return this.check;
    }
}

familyMark.calcTip();
familyMark.calcCheck();
console.log(familyMark);

function averageTip(familyTip) {
    var tipSum = 0;
    for (i = 0; i < familyTip.length; i++) {
        tipSum += familyTip[i];   
    };
    var tipAvg = tipSum / familyTip.length;
    return tipAvg;
};

averageTip(familyJohn.tip);
averageTip(familyMark.tip);

if (averageTip(familyJohn.tip) > averageTip(familyMark.tip)) {
    console.log("John's family had a higher tip average of " + 
    averageTip(familyJohn.tip));
} else if (averageTip(familyJohn.tip) < averageTip(familyMark.tip)) {
    console.log("Mark's family had a higher tip average of " + 
    averageTip(familyMark.tip));
} else {
    console.log('Both families had an average tip of ' + 
    averageTip(familyJohn.tip));
};


/* Alternate method for creating the object for the bonus question using 
classes that I am proud of.*/
class family {
    constructor(bill){
        this.bill = bill;
        this.tip = [];
        this.check = [];
    }
    calcTip(){
        for (i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 100) {
                this.tip[i] = this.bill[i] * 0.2;
            } else if (this.bill[i] >= 100 && this.bill[i] <= 300) {
                this.tip[i] = this.bill[i] * 0.10;
            } else if (this.bill[i] > 300) {
                this.tip[i] = this.bill[i] * 0.25;
            }
        };
        return this.tip[i];
    }
    calcCheck(){
        for (i = 0; i < this.bill.length; i++) {
            this.check[i] = this.tip[i] + this.bill[i];
        };
        return this.check;
    }
}
var familyMark = new family([77, 375, 110, 45])