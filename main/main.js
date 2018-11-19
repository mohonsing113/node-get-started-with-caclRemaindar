// Write your cade below:
function caclRemaindar(v1,v2) { return v1%v2};

function caclSum(array) {

    var sum =0;
    for(var i = 0 ; i<array.length;i++){
        sum+=array[i];
    }
    return sum;
};

function caclSumInConditon(array, val) {
    var sum =0;
    for(var i = 0 ; i<array.length;i++){
        if (val>array[i]){
            sum+=array[i];
        }
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}