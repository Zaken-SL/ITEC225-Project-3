// https://rawgraphs.io

// DATA SET 
var d5 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/hungary/hun_vacc_data_rev.csv"
var d4 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/hungary/hun_test_data_rev.csv"
  var d3 = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/nflx/nflx_close_data.csv"
 var d2 = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/aapl/aapl_close_data_rev.csv"
var d1 = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/mrna/mrna_close_data.csv"
	
  Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'MRNA CLose',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'close'),
      line: {color: '#21A216'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'Custom: MRNA Close Price'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Close Price'
        }
      }
    };    
    Plotly.newPlot('myplot1', data, layout);
  })

  Plotly.d3.csv(d2, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'AAPL CLose',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'close'),
      line: {color: 'blue'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'Custom: AAPL Close Price'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Close Price'
        }
      }
    };    
    Plotly.newPlot('myplot2', data, layout);
  })

  Plotly.d3.csv(d3, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'NFLX CLose',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'close'),
      line: {color: 'red'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'Custom: NFLX Close Price'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Close Price'
        }
      }
    };    
    Plotly.newPlot('myplot3', data, layout);
  })
  Plotly.d3.csv(d4, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Tests',
      x: unpack(rows, 'Dates'),
      y: unpack(rows, 'Test'),
      line: {color: 'blue'}
    }
    
   
    var data = [t1];
    var layout = {
      title: {
        text : 'COVID in Hungary'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Test/Vaccs'
        }
      }
    };    
    Plotly.newPlot('myplot4', data, layout);
  })
  Plotly.d3.csv(d5, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Vaccs',
      x: unpack(rows, 'Dates'),
      y: unpack(rows, 'Vacc'),
      line: {color: 'red'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'COVID in Hungary'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Vaccs'
        }
      }
    };    
    Plotly.newPlot('myplot5', data, layout);
  })