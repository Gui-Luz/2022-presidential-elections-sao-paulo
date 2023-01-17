function calculateGraphValues(x1,y1,x2,y2) {
    
    v1 = x1 - x2;
    v2 = y1 - y2;

    if (v1 > v2) {
        return [x2, v1, 0, y1];
    }else{
        return [x1, 0, v2, y2];
    };
}