// Code your solution in this file!

function distanceFromHqInBlocks(dist){
    if (dist<42){
      return(42-dist);
    }
    else{return (dist-42)}
}

function distanceFromHqInFeet(dist){
  return distanceFromHqInBlocks(dist)*264;
}

function distanceTravelledInFeet(pointA,pointB){
  if (pointB>pointA){
    return((pointB-pointA)*264);
  } 
  else
  return((pointA-pointB)*264);
}

function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance <= 400){
    return 0;
  }
  if (distance>=400 && distance <=2000){
    return (distance-400)* 0.02;
  }
  else if(distance>=2000 && distance<=2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
}
//scribe('distanceFromHqInBlocks()', function() {
 //   it('returns a distance in blocks', function() {
 //     expect(distanceFromHqInBlocks(43)).to.equal(1);
   // });

      // describe('scuberGreetingForFeet()', function () {
   //     it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
    //      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
   //     });
   //     unction scuberGreetingForFeet(dist){
    //      // Write your code here!
   //       if (dist <= 400){
   //         return "This one is on me!";
   //       }
    //      else if (dist > 200 && dist < 2500){
  //          return "I will gladly take your thirty bucks.";
   //       }
   //       else if(dist > 2500){
   //         return "No can do.";
   //       }
 //         }