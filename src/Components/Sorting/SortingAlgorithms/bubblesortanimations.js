import { SwapCalls } from "@mui/icons-material";

export function bubbleSortAnimaions(array) {
    function swap(array, xp, yp) {
        var temp = array[xp];
        array[xp] = array[yp];
        array[yp] = temp;
    }

    const animations = [];
    if (array.length <= 1) return array;
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            animations.push([0, j, j + 1]);
            if (array[j] > array[j + 1]) {
                animations.push([2, j, j + 1]);
                animations.push([3, j, j + 1, array[j], array[j + 1]]);
                animations.push([1, j, j + 1]);
                swap(array, j, j + 1);
            } else {
                animations.push([1, j, j + 1]);
            }
        }
        animations.push([4, n - 1 - i]);
    }
    return animations;
}
