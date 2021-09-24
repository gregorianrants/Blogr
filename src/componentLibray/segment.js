function getFx(x1, y1, x2, y2){
    const dx = x2-x1
    const dy = y2-y1
    const m = dy/dx;
    const c = y1 - m*x1
    return (x)=>m*x+c
}

function getInterval([[x1,y1],[x2,y2]]){
    return {
        x1,
        x2,
        fx: getFx(x1,y1,x2,y2)
    }
}

function getPairs(pointsArray){
    //takes an array of points [p1,p2,p3....]
    //returns [[p1,p2],[p2,p3].....]
    const result = []
    for (let i=0; i<pointsArray.length-1; i ++){
        result.push([[...pointsArray[i]], [...pointsArray[i + 1]]])
    }
    return result
}

function findInterval(x,intervals){
    const result = intervals.filter(interval=> interval.x1 <= x && x < interval.x2 )

    if(result.length===0){
        throw new Error('make sure x is represented in the intervals')
    }
    else if(result.length>1){
        throw new Error('something wrong with implementation of findInterval function')
    }
    else{
        console.log(result)
        return result[0]
    }
}

function findY(x,intervals){
    const interval = findInterval(x,intervals)
    return interval.fx(x)
}

/*const pairs = [[2,3],[5,7],[9,12]]*/



/*
console.log(findInterval(5,intervals))*/

//TODO add ability to continuue bellow interval and above and have a min and max value for y
export default function configure(points){
    const intervals = getPairs(points)
        .map(pair=>(
            getInterval(pair)
        ))
    return (x)=>{
        return findY(x,intervals)
    }
}
