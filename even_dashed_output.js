let sample_number_1 = 625468;
let sample_number_2 = 2637922;
let sample_number_3 = 7430246;

let find_even = num_input => {

    // convert a number to a string
    let num_to_string = num_input.toString();

    // convert a string to an array (strings are immutable)
    let string_to_array = num_to_string.split("");

    // access array + logic
    for (let i = 0; i < string_to_array.length; i++) {
        if (string_to_array[i] % 2 === 0 && string_to_array[i+1] % 2 === 0) {
            string_to_array[i] += "-";
        }
    }

    return string_to_array.join("");
}

console.log(find_even(sample_number_1));    // 6-254-6-8
console.log(find_even(sample_number_2));    // 2-63792-2    
console.log(find_even(sample_number_3));    // 7430-2-4-6