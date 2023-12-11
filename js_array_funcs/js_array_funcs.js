function compareTriplets(a, b) {
    console.log(a.length);
    const res = [0,0];
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            res[0]++;
        } else if (a[i] < b[i]) {
            res[1]++;
        }
    }
    
    return res;
}

compareTriplets([1,2,3], [3,2,1]);
