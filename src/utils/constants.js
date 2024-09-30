export const artistIds = "ids=70B80Lwx2sxti0M1Ng9e8K,3gBKY0y3dFFVRqicLnVZYz,4K6blSRoklNdpw4mzLxwfn,1mYsTxnqsietFxj1OgoGbG,2oSONSC9zQ4UonDKnLqksx,5wJ1H6ud777odtZl5gG507,6Mv8GjQa7LKUGCAqa9qqdb,1tqysapcCh1lWEAc9dIFpa,7uIbLdzzSEqnX0Pkrb56cR,74OaRjmyh0XyRZsQQQ5l7c,0y59o4v8uw5crbN9M3JiL1,0oOet2f43PA68X5RxKobEy,1dVygo6tRFXC8CSWURQJq2,6WOdPJmexxFINcKMkP2jMG,1mBydYMVBECdDmMfE2sEUO";

export const albumIds = "ids=5zOQcWFM4kDlS3OmeOKuxv,4BnXfdW0D6AzhF8wBPy9Xm,4JQh6ess2Ke2aJYGKQEzYg,1ujIERX0vWqw9kcYr6VMRp,5pMiKOXRZOxoJtW76E10xs,6uxRlKbjePj7hvCiHV5y3k,4hpRbxQk65dMezDhRjN9T5,3IbKcMtNRze5t0ANwdp45H,6peCIjlKHw5WZI7dQ3DkJK,4WELDMV021TUCe87ryn25t,7llA4sKQTicmiKLplwLrTm,578g6r9ZxMgsjiVl0usXHh";

export const EpisodesIds = "ids=4A5iWnXCpEB6IFlFBgqSKu,55GrZz2YeX5WC14eUbKKkS,3VuoFnDuKcdLEnWylc0m3r,5p98JDGZ6kkIgfXlF0E6HL,3xfV5p8qbgxHjgJUUPQdFZ,6kkxA3xw8ybQdJf5nLUoaX,3MoFP9JQOLns5d6eW0phdu,5GN1lVfEO78RqAHu1sKAlh";

export const ShowsIds = "ids=5hTbZWb0RUDAqJzWdndzkZ,30dtmFEHT0QMsOixP10VyK,7pe04gevyTiFF1bs0L9AUQ,2M2yZw7h9gKokV4y2BwNVy,79AetaluWwFnIDISICFH8C,3CZoEtk7RowCfNOoSR8mqP,4Z6X3bj7X8aNp7eh0HZIkV,6gKJWHYTAriO5AcUuS7OGR,0piyXStw2RnPBcJYuJyypY,41tDNp5y2sQXe4MvYmESlR,54kDdyPk8SqYIOeOPIe93D,6AreVcUhrylRH3OjW9aM2e,0hw296cW322V5M6P9oXEsl,7EG0lejJjKyiLnEjfaOcjI";

export function Millis_To_MinSec(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000); // Convert to hours
    const minutes = Math.floor((milliseconds % 3600000) / 60000); // Remaining minutes
    const seconds = Math.floor((milliseconds % 60000) / 1000); // Remaining seconds

    // Ensure minutes and seconds are always two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    if (hours > 0) {
        return `${hours}:${formattedMinutes}:${formattedSeconds}`; // Return hours:minutes:seconds
    } else {
        return `${formattedMinutes}:${formattedSeconds}`; // Return minutes:seconds
    }
}

export function capitalizeFirstLetter(str) {
    if (!str) return ''; // Check for empty string or null
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function FollowersConversion(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'; // For millions
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K'; // For thousands
    } else {
        return num.toString(); // For numbers less than 1000
    }
}