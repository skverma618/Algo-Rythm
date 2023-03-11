import { AnimationSharp } from "@mui/icons-material";

export function insertionsortanimations(array) {
    console.log(array);

    if (array.length <= 1) return array;
    let n = array.length;
    const animations = [];
    let i, j;

    for (i = 1; i < n; i++) {
        j = i;
        animations.push([0, j]);
        while (j > 0 && array[j] < array[j - 1]) {
            animations.push([1, j - 1]);
            animations.push([2, j - 1, j, array[j - 1], array[j]]);

            // Swap V[j] and V[j-1]
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            // Decrement j by 1

            animations.push([3, j]);
            animations.push([0, j - 1]);
            j = j - 1;
        }

        console.log(array);
        animations.push([3, j]);
    }

    console.log(array);
    return animations;
}
