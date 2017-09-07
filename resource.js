var deltaT;
var deltaE = 0.5

function updateStocks () {
  nodes.forEach( function(d) {
    var effort = 2 * deltaE * d.opinion + 1 - deltaE
    d.stock.push( dynamics (d.stock[d.stock.length - 1], effort) )
  })
}

function dynamics (stock, effort) {
  var deltaE = effort - 1;
  var numerator = stock * deltaE;
  var t = deltaT / numberOfNodes
  var denumerator = stock * Math.exp (deltaE * t) - stock;
  denumerator += deltaE * Math.exp (deltaE * t);
  var newStock = numerator / denumerator

  if (newStock < 1E-10) {
    newStock = 1E-10;
  }
  console.log(deltaT)

  return newStock;
};
