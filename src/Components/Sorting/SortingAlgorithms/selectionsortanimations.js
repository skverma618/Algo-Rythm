import { AnimationSharp } from "@mui/icons-material";

export function selectionsortanimations(array) {
    function swap(array, xp, yp) {
        var temp = array[xp];
        array[xp] = array[yp];
        array[yp] = temp;
    }

    const minidxarray = [];
    const animations = [];
    if (array.length <= 1) return array;
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let min_idx = i;
        minidxarray.push(i);
        animations.push([0, min_idx]);
        for (let j = i + 1; j < n; j++) {
            animations.push([1, j]);
            animations.push([2, j]);
            if (array[j] < array[min_idx]) {
                min_idx = j;
                animations.push([2, minidxarray[minidxarray.length - 1]]);
                animations.push([0, min_idx]);
                minidxarray.push(min_idx);
            }
        }
        animations.push([3, min_idx, i]);
        animations.push([4, min_idx, i]);
        animations.push([5, min_idx, i, array[min_idx], array[i]]);
        animations.push([6, i]);
        // Swap the found minimum element with the first element
        swap(array, min_idx, i);
    }
    animations.push([6, n - 1]);

    return animations;
}
