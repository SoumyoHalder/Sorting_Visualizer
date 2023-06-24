// Global variables
const arraySize = 25;
const delay = 50; // Delay in milliseconds
const array = [];

// Generate a random array
function generateArray() {
  const arrayContainer = document.getElementById("array-container");
  arrayContainer.innerHTML = "";


  for (let i = 0; i < arraySize; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
    const bar = document.createElement("div");
    bar.classList.add("array-bar");
    bar.style.height = `${array[i]}%`;
    arrayContainer.appendChild(bar);
  }
  
  enableButtons();
}

// Reset array to original unsorted state
function resetArray() {
  const arrayContainer = document.getElementById("array-container");
  arrayContainer.innerHTML = "";
  for (let i = 0; i < arraySize; i++) {
    const bar = document.createElement("div");
    bar.classList.add("array-bar");
    bar.style.height = `${array[i]}%`;
    arrayContainer.appendChild(bar);
  }
  
  enableButtons();
}

// Bubble Sort
function bubbleSort() {
  disableButtons();

  const bars = document.getElementsByClassName("array-bar");

  async function sort() {
    for (let i = 0; i < arraySize - 1; i++) {
      for (let j = 0; j < arraySize - i - 1; j++) {
        const bar1 = bars[j];
        const bar2 = bars[j + 1];

        bar1.style.backgroundColor = "#ff0000";
        bar2.style.backgroundColor = "#ff0000";

        await new Promise((resolve) => setTimeout(resolve, delay));

        const height1 = parseInt(bar1.style.height);
        const height2 = parseInt(bar2.style.height);

        if (height1 > height2) {
          bar1.style.height = `${height2}%`;
          bar2.style.height = `${height1}%`;
        }

        bar1.style.backgroundColor = "#00ff00";
        bar2.style.backgroundColor = "#00ff00";

        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      bars[arraySize - i - 1].style.backgroundColor = "#00ff00";
    }

    bars[0].style.backgroundColor = "#00ff00";

    enableButtons();
  }

  sort();
}

// Selection Sort
function selectionSort() {
  disableButtons();

  const bars = document.getElementsByClassName("array-bar");

  async function sort() {
    for (let i = 0; i < arraySize - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arraySize; j++) {
        const bar1 = bars[j];
        const bar2 = bars[minIndex];

        bar1.style.backgroundColor = "#ff0000";
        bar2.style.backgroundColor = "#ff0000";

        await new Promise((resolve) => setTimeout(resolve, delay));

        const height1 = parseInt(bar1.style.height);
        const height2 = parseInt(bar2.style.height);

        if (height1 < height2) {
          minIndex = j;
        }

        bar1.style.backgroundColor = "#00ff00";
        bar2.style.backgroundColor = "#00ff00";

        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      const bar1 = bars[minIndex];
      const bar2 = bars[i];

      bar1.style.backgroundColor = "#ff0000";
      bar2.style.backgroundColor = "#ff0000";

      await new Promise((resolve) => setTimeout(resolve, delay));

      const height1 = parseInt(bar1.style.height);
      const height2 = parseInt(bar2.style.height);

      bar1.style.height = `${height2}%`;
      bar2.style.height = `${height1}%`;

      bar1.style.backgroundColor = "#00ff00";
      bar2.style.backgroundColor = "#00ff00";

      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    bars[arraySize - 1].style.backgroundColor = "#00ff00";

    enableButtons();
  }

  sort();
}

// Insertion Sort
function insertionSort() {
  disableButtons();

  const bars = document.getElementsByClassName("array-bar");

  async function sort() {
    for (let i = 1; i < arraySize; i++) {
      const key = parseInt(bars[i].style.height);

      let j = i - 1;
      while (j >= 0 && parseInt(bars[j].style.height) > key) {
        bars[j + 1].style.height = bars[j].style.height;
        j = j - 1;

        for (let k = i; k >= j + 2; k--) {
          bars[k].style.backgroundColor = "#ff0000";
          bars[k - 1].style.backgroundColor = "#ff0000";

          await new Promise((resolve) => setTimeout(resolve, delay));

          const height1 = parseInt(bars[k].style.height);
          const height2 = parseInt(bars[k - 1].style.height);

          bars[k].style.height = `${height2}%`;
          bars[k - 1].style.height = `${height1}%`;

          bars[k].style.backgroundColor = "#00ff00";
          bars[k - 1].style.backgroundColor = "#00ff00";

          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }

      bars[j + 1].style.height = `${key}%`;

      for (let k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = "#00ff00";
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    for (let i = 0; i < arraySize; i++) {
      bars[i].style.backgroundColor = "#00ff00";
    }

    enableButtons();
  }

  sort();
}

// Quick Sort
function quickSort() {
  disableButtons();

  const bars = document.getElementsByClassName("array-bar");

  async function partition(low, high) {
    const pivot = parseInt(bars[high].style.height);
    let i = low - 1;

    bars[high].style.backgroundColor = "#ff0000";

    for (let j = low; j < high; j++) {
      bars[j].style.backgroundColor = "#ff0000";

      await new Promise((resolve) => setTimeout(resolve, delay));

      const height = parseInt(bars[j].style.height);

      if (height < pivot) {
        i++;

        const bar1 = bars[i];
        const bar2 = bars[j];

        bar1.style.backgroundColor = "#00ff00";
        bar2.style.backgroundColor = "#00ff00";

        await new Promise((resolve) => setTimeout(resolve, delay));

        const temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;

        bar1.style.backgroundColor = "#ff0000";
        bar2.style.backgroundColor = "#ff0000";

        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        bars[j].style.backgroundColor = "#00ff00";
      }
    }

    const bar1 = bars[i + 1];
    const bar2 = bars[high];

    bar1.style.backgroundColor = "#00ff00";
    bar2.style.backgroundColor = "#00ff00";

    await new Promise((resolve) => setTimeout(resolve, delay));

    const temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;

    bar1.style.backgroundColor = "#00ff00";
    bar2.style.backgroundColor = "#00ff00";

    await new Promise((resolve) => setTimeout(resolve, delay));

    for (let k = low; k <= high; k++) {
      if (k !== i + 1) {
        bars[k].style.backgroundColor = "#00ff00";
      }
    }

    return i + 1;
  }

  async function sort(low, high) {
    if (low < high) {
      const pivotIndex = await partition(low, high);

      await sort(low, pivotIndex - 1);
      await sort(pivotIndex + 1, high);
    } else if (low === high) {
      bars[low].style.backgroundColor = "#00ff00";
    }
  }

  sort(0, arraySize - 1);

  enableButtons();
}

// Merge Sort
function mergeSort() {
    disableButtons();
  
    const bars = document.getElementsByClassName("array-bar");
    const tempArray = Array.from(bars).map((bar) => parseInt(bar.style.height));
  
    async function merge(low, mid, high) {
      const leftSize = mid - low + 1;
      const rightSize = high - mid;
  
      const leftArray = new Array(leftSize);
      const rightArray = new Array(rightSize);
  
      for (let i = 0; i < leftSize; i++) {
        leftArray[i] = tempArray[low + i];
      }
      for (let j = 0; j < rightSize; j++) {
        rightArray[j] = tempArray[mid + 1 + j];
      }
  
      let i = 0;
      let j = 0; 
      let k = low; 
  
      while (i < leftSize && j < rightSize) {
        bars[k].style.backgroundColor = "#ff0000";
        await new Promise((resolve) => setTimeout(resolve, delay));
  
        if (leftArray[i] <= rightArray[j]) {
          tempArray[k] = leftArray[i];
          bars[k].style.height = `${leftArray[i]}%`;
          i++;
        } else {
          tempArray[k] = rightArray[j];
          bars[k].style.height = `${rightArray[j]}%`;
          j++;
        }
  
        bars[k].style.backgroundColor = "#00ff00";
        await new Promise((resolve) => setTimeout(resolve, delay));
  
        k++;
      }
  
      while (i < leftSize) {
        bars[k].style.backgroundColor = "#ff0000";
        await new Promise((resolve) => setTimeout(resolve, delay));
  
        tempArray[k] = leftArray[i];
        bars[k].style.height = `${leftArray[i]}%`;
  
        bars[k].style.backgroundColor = "#00ff00";
        await new Promise((resolve) => setTimeout(resolve, delay));
  
        i++;
        k++;
      }
      while (j < rightSize) {
        bars[k].style.backgroundColor = "#ff0000";
        await new Promise((resolve) => setTimeout(resolve, delay));
  
        tempArray[k] = rightArray[j];
        bars[k].style.height = `${rightArray[j]}%`;
  
        bars[k].style.backgroundColor = "#00ff00";
        await new Promise((resolve) => setTimeout(resolve, delay));
  
        j++;
        k++;
      }
    }
  
    async function sort(low, high) {
      if (low < high) {
        const mid = Math.floor((low + high) / 2);
  
        await sort(low, mid);
        await sort(mid + 1, high);
        await merge(low, mid, high);
      } else if (low === high) {
        bars[low].style.backgroundColor = "#00ff00";
      }
    }
  
    sort(0, arraySize - 1);
  
    enableButtons();
  }
  

// Enable sorting buttons
function enableButtons() {
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

// Disable sorting buttons
function disableButtons() {
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// Event listeners
document.getElementById("generate-array").addEventListener("click", generateArray);
document.getElementById("reset-array").addEventListener("click", resetArray);
document.getElementById("bubble-sort").addEventListener("click", bubbleSort);
document.getElementById("selection-sort").addEventListener("click", selectionSort);
document.getElementById("insertion-sort").addEventListener("click", insertionSort);
document.getElementById("quick-sort").addEventListener("click", quickSort);
document.getElementById("merge-sort").addEventListener("click", mergeSort);



window.addEventListener("load", generateArray);
