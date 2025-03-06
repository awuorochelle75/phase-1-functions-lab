// Code your solution in this file!
    let distance
function distanceFromHqInBlocks(distance){
    if (distance < 42){
        return (42-distance);
    }else {
        return (distance - 42)
    }
}distanceFromHqInBlocks();

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264;

}distanceFromHqInFeet();
function distanceTravelledInFeet(start,destination){
    if(start > destination){
        return ((start-destination)*264)
    }else{
        return ((destination - start)*264)
    }
}distanceTravelledInFeet();
function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400){
        return 0;
    }

    if (distance >= 400 && distance <= 2000){
        return (distance-400) * 2/100;
    }else if(distance >= 2000 && distance <= 2500){
        return 25;
    }else if (distance > 2500){
        return "cannot travel that far"
    }


}