<template>
    <div id="main">
        <div id="chart">
            <bubble></bubble>
        </div>
    </div>
</template>

<script>
// import charts from '../charts.js'
// import doughnut from '../doughnut.js'
// import linechart from '../linechart.js'
// import pie from '../pie.js'
import bubble from '../BubbleChart.js'

export default {
    components:{
        // charts,doughnut,linechart,pie, 
        bubble
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:380px;
  width:1180px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:center;
}
</style>>