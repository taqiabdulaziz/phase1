function getSummary(reviewCount, ratingMovie) {
    
    switch (Math.round(ratingMovie/reviewCount)) {
        case 5:
            return `Excellent`
            break;
        case 4:
            return `Very Good`
            break;
        case 3:
            return `Good`
            break;
        case 2:
            return `Bad`
            break;
        default:
            return `Very Bad`
            break;
    }
}

module.exports = getSummary