var locations = []; // this array will hold your objects

// object constructor
function State(stateIn, revenueIn, locationCountIn){
  this.state = stateIn;
  this.revenue = revenueIn;
  this.locationCount = locationCountIn;
  this.averageRevenue = function(){
    return (this.revenue/this.locationCount).toFixed(2);
  };
}
// object instances
var ilLocation = new State('IL', 5000, 12);
var mnLocation = new State('MN', 300, 3);
var nvLocation = new State('NV', 25000, 1);

// push object instances to locations array
locations.push(ilLocation);
locations.push(mnLocation);
locations.push(nvLocation);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
