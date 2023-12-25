export const generateRandomItem = (arr: any[]) => {
    let max = arr.length 
    let idx = Math.floor(Math.random() * max);

    return arr[idx]
}