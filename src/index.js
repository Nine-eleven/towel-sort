
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (typeof matrix === "undefined" || matrix.length === 0) { return []};
  
  let result = "";


// делем реверс элементов через один в матрице
  let newMatrix = matrix.map ( (item, i) => {

   if (i % 2 !== 0) { return item.reverse() 
  } else { return item};

  } );

// переводим каждый элемент матрицы в строку, суммируем (объединяем) строки и учитываем разделение между строками, образованными от разных элементов матрицы
  newMatrix.forEach ( (item, i) => {

    if (i === 0) {
    result += item.join("_") + "_";
    } else if (i === newMatrix.length -1 )  {
      result += item.join("_")
    } else {
      result += item.join("_") + "_"
    }

  } )


// возвращаем массив из обработанной строки с заданным ранее разделителем
  return result.split("_");

}
