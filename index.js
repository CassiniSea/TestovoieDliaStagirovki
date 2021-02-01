function  f1(array) {
	let result = Array();
	for(let i = 0; i < array.length - 2; i++) {
		if(	(array[i] > array[i + 1] && array[i + 1] < array[i + 2])||
			(array[i] < array[i + 1] && array[i + 1] > array[i + 2])) result.push(1);
		else result.push(0);
	}
	return result;
}
function  f2(array) {
	let result = [];
	let tmp = {};
	let isError = false;
	for(let i = 0; i < array[0].length - 2; i++){
		for(let j = 1; j <= 9; j++) tmp[j] = 0;
		isError = false;
		array.forEach(value => {
			for(let j = i; j < i + 3; j++){
				for(let n = 1; n <= 9; n++) {
					if(value[j] === n) tmp[n]++;
					if(tmp[n] > 1) isError = true;
				}
			}
		})
		if(isError) result.push(false)
		else result.push(true);
	}
	return result;
}
let array = [
	[ 1, 2, 3, 2, 7 ],
	[ 4, 5, 6, 8, 1 ],
	[ 7, 8, 9, 4, 5 ],
];





function f3(text, format, limit) {
	if(text.length === 0 || format.length === 0 || limit <= 0) return []
	let result = []
	let n = 0
	let newFormat = []
	result.push('*'.repeat(limit + 2))
		// Перенос строк
	for(let strNumber = 0; strNumber < text.length; strNumber++) {
		n++
		result[n] = ''
		text[strNumber].forEach(word => {
			newFormat[n] = format[strNumber]
			if(result[n].length + word.length <= limit) {
				if(result[n].length > 0 && result[n].length + 1 <= limit) result[n] += ' '
				result[n] += word
			}
			else {
				n++
				result[n] = word
			}
		})
	}
	result.push('*'.repeat(limit + 2))
		// Форматирование
	for(let i = 1; i < result.length - 1; i++) {
		if(newFormat[i] === 'LEFT')
			result[i] = '*' + result[i] + ' '.repeat(limit - result[i].length) + '*'
		else if(newFormat[i] === 'RIGHT')
			result[i] = '*' + ' '.repeat(limit - result[i].length) + result[i] + '*'
	}
	return result
}
text = [
	["Hello", "world"],
	["Brad", "came", "to", "dinner", "with", "us"],
	["He", "loves", "tacos"]
];
format = ["LEFT", "RIGHT", "LEFT"]
console.log(f3(text,format,16))


