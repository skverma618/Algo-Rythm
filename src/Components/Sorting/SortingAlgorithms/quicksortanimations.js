export function quicksortanimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quicksort(array, 0, array.length - 1, animations);
    return animations;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(array, low, high, animations) {
    let pivot = array[high];
    animations.push([0, high]);
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        animations.push([1, i + 1, j]);
        animations.push([4, i + 1, j]);
        if (array[j] < pivot) {
            i++;
            animations.push([2, i, j]);
            animations.push([4, i, j]);
            animations.push([3, i, j, array[i], array[j]]);
            swap(array, i, j);
        }
    }
    animations.push([1, i + 1, high]);
    animations.push([2, i + 1, high]);
    animations.push([4, i + 1, high]);
    animations.push([3, i + 1, high, array[i + 1], array[high]]);
    swap(array, i + 1, high);
    animations.push([5, i + 1]);
    return i + 1;
}

function quicksort(array, low, high, animations) {
    if (low < high) {
        let pi = partition(array, low, high, animations);
        quicksort(array, low, pi - 1, animations);
        quicksort(array, pi + 1, high, animations);
    } else if (low == high) {
        animations.push([5, low]);
    }
}
